import React, { useCallback, useMemo, useRef, useState } from "react";import {
  ActivityIndicator,
  Alert,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

const BACKEND_BASE = "http://localhost:3000"; // change for device testing (use your LAN IP or tunnel)

export default function InitiateKhaltiPayment() {
  const [pidx, setPidx] = useState<string | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const webviewRef = useRef<WebView>(null);

  const returnUrlHost = useMemo(() => {
    // Should match your KHALTI_RETURN_URL host; we’ll detect it in WebView
    // e.g. https://your-frontend-app.com/khalti-return
    return "your-frontend-app.com"; // change this to your actual return host
  }, []);

  const startPayment = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://finance-backend-alc7.onrender.com/api/v1/khalti/initiate-payments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: 25000, // paisa
            purchase_order_id: "12345",
            purchase_order_name: "Test Order",
            return_url: `https://www.nishan-bhattarai.com.np/`,
            website_url: `https://example.com`,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(typeof data === "string" ? data : JSON.stringify(data));
      }

      setPidx(data.pidx);
      setPaymentUrl(data.payment_url);
    } catch (err: any) {
      Alert.alert("Init failed", err?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyPayment = useCallback(async () => {
    if (!pidx) return;
    try {
      const res = await fetch(`${BACKEND_BASE}/payments/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pidx }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(typeof data === "string" ? data : JSON.stringify(data));
      }

      // data.status can be Completed | Pending | Refunded | Expired | Canceled
      if (data.status === "Completed") {
        Alert.alert(
          "Payment Success",
          `Transaction ID: ${data.transaction_id || ""}`
        );
      } else {
        Alert.alert("Payment Status", data.status);
      }
    } catch (err: any) {
      Alert.alert("Verify failed", err?.message || "Unknown error");
    } finally {
      setPidx(null);
      setPaymentUrl(null);
    }
  }, [pidx]);

  const onNavStateChange = useCallback(
    (navState: any) => {
      // When Khalti redirects to return_url, we detect it and trigger verify.
      try {
        const url = new URL(navState.url);
        if (url.host === returnUrlHost) {
          // We reached return_url — safe to verify
          verifyPayment();
        }
      } catch {
        // ignore URL parse issues
      }
    },
    [returnUrlHost, verifyPayment]
  );

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (paymentUrl) {
    return (
      <WebView
        ref={webviewRef}
        source={{ uri: paymentUrl }}
        onNavigationStateChange={onNavStateChange}
        startInLoadingState
      />
    );
  }

  return (
    <TouchableOpacity
      onPress={startPayment}
      style={{ alignItems: "center", padding: 12 }}
      className="bg-white  rounded-lg shadow-md"
    >
      <View style={{ width: 200, height: 60 }}>
        <Image
          source={require("@/assets/images/khalti_logo.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}
