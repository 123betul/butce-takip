import BudgetForm from "./components/budget-form/budget-form.component";
import BalanceSummary from "./components/balance-summary/balance-summary.component";
import TransactionList from "./components/transaction-list/transaction-list.component";
import { useEffect, useState, useCallback } from "react";
import { db } from "./firebase";
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp
} from "firebase/firestore";
import "./App.css";

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    const [toasts, setToasts] = useState([]);

    // Toast bildirimi göster
    const showToast = useCallback((message, type = "info") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    }, []);

    // Firestore'dan verileri gerçek zamanlı dinle
    useEffect(() => {
        const q = query(
            collection(db, "transactions"),
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const items = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTransactions(items);
                setLoading(false);
            },
            (error) => {
                console.error("Firebase bağlantı hatası:", error);
                setLoading(false);
                showToast("Firebase bağlantı hatası!", "error");
            }
        );

        return () => unsubscribe();
    }, [showToast]);

    // Yeni işlem ekle
    const handleAddItem = async (newItem) => {
        try {
            await addDoc(collection(db, "transactions"), {
                description: newItem.description,
                amount: newItem.amount,
                type: newItem.type,
                createdAt: serverTimestamp(),
            });
            showToast("İşlem başarıyla eklendi!", "success");
        } catch (error) {
            console.error("Ekleme hatası:", error);
            showToast("İşlem eklenirken hata oluştu!", "error");
        }
    };

    // İşlem sil
    const handleDeleteItem = async (id) => {
        try {
            await deleteDoc(doc(db, "transactions", id));
            showToast("İşlem silindi", "info");
        } catch (error) {
            console.error("Silme hatası:", error);
            showToast("İşlem silinirken hata oluştu!", "error");
        }
    };

    if (loading) {
        return (
            <div className="loading-overlay">
                <div className="loading-spinner"></div>
                <span className="loading-text">Yükleniyor...</span>
            </div>
        );
    }

    return (
        <div className="app-bg">
            <div className="container app-container">
                {/* Header */}
                <div className="app-header">
                    <div className="app-logo-icon">
                        <i className="bi bi-wallet2"></i>
                    </div>
                    <h1 className="app-title">Bütçe Takip</h1>
                    <p className="app-subtitle">Gelir ve giderlerinizi kolayca yönetin</p>
                </div>

                {/* Bakiye Özeti */}
                <BalanceSummary transactions={transactions} />

                {/* İşlem Formu */}
                <BudgetForm onAdd={handleAddItem} />

                {/* İşlem Listesi */}
                <TransactionList transactions={transactions} onDelete={handleDeleteItem} />
            </div>

            {/* Toast Bildirimleri */}
            {toasts.length > 0 && (
                <div className="toast-container">
                    {toasts.map((toast) => (
                        <div key={toast.id} className={`custom-toast ${toast.type}`}>
                            <i className={`bi ${
                                toast.type === "success" ? "bi-check-circle-fill" :
                                toast.type === "error" ? "bi-exclamation-circle-fill" :
                                "bi-info-circle-fill"
                            }`}></i>
                            {toast.message}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;