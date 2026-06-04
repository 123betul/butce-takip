import { useState } from "react";
import "./transaction-card.style.css";

const TransactionCard = ({ transaction, onDelete, index }) => {
    const { id, description, amount, type } = transaction;
    const isGelir = type === "gelir";
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        await onDelete(id);
    };

    return (
        <div
            className={`card transaction-card ${isGelir ? "card-income" : "card-expense"} ${isDeleting ? "deleting" : ""}`}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div className="card-body p-0">
                <div className="d-flex align-items-center justify-content-between px-3 py-3">
                    {/* Sol Taraf */}
                    <div className="d-flex align-items-center gap-3 flex-grow-1 min-width-0">
                        <div className={`card-type-icon ${isGelir ? "icon-income" : "icon-expense"}`}>
                            <i className={`bi ${isGelir ? "bi-arrow-up-short" : "bi-arrow-down-short"}`}></i>
                        </div>
                        <div className="transaction-info">
                            <span className={`badge type-badge ${isGelir ? "badge-income" : "badge-expense"} mb-1`}>
                                {isGelir ? "GELİR" : "GİDER"}
                            </span>
                            <span className="transaction-desc d-block">{description}</span>
                        </div>
                    </div>

                    {/* Sağ Taraf */}
                    <div className="d-flex align-items-center gap-3 flex-shrink-0 ms-3">
                        <span className={`transaction-amount ${isGelir ? "text-income" : "text-expense"}`}>
                            {isGelir ? "+" : "-"}{amount.toLocaleString("tr-TR")} ₺
                        </span>
                        <button
                            className="btn btn-delete"
                            onClick={handleDelete}
                            disabled={isDeleting}
                            title="Sil"
                        >
                            {isDeleting ? (
                                <span className="spinner-border spinner-border-sm" role="status"></span>
                            ) : (
                                <i className="bi bi-trash3"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Sol kenar çizgisi */}
            <div className={`card-indicator ${isGelir ? "indicator-income" : "indicator-expense"}`}></div>
        </div>
    );
};

export default TransactionCard;