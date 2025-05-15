import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 0 20px rgba(138, 43, 226, 0.5)", // violet glow
            borderRadius: "15px",
            backgroundColor: "#1a1a2e", // dark base for neon
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#e0e0e0", // general text color
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 0 15px #8A2BE2" // violet glow
        },
        name: {
            fontSize: "2.2rem",
            marginBottom: "10px",
            color: "#DA70D6" // orchid pink
        },
        description: {
            fontSize: "1.2rem",
            marginBottom: "15px",
            color: "#b0c4de" // soft neon blue
        },
        price: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#39FF14", // neon green
            marginBottom: "20px"
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.1rem",
            backgroundColor: "#00FFFF", // neon cyan
            color: "#1a1a2e",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 0 12px #00FFFF",
            transition: "all 0.3s ease",
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
