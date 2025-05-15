import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#1a1a2e", // dark background
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#e0e0e0"
        },
        title: {
            fontSize: "2.8rem",
            color: "#DA70D6", // orchid
            marginBottom: "20px",
            textShadow: "0 0 10px #8A2BE2, 0 0 20px #8A2BE2" // glowing violet
        },
        message: {
            fontSize: "1.4rem",
            color: "#b0c4de", // light neon blue
            marginBottom: "30px"
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.1rem",
            backgroundColor: "#00FFFF", // neon cyan
            color: "#1a1a2e",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 0 12px #00FFFF",
            transition: "all 0.3s ease"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a href="/" style={styles.button}>Go to Home</a>
        </div>
    );
}
