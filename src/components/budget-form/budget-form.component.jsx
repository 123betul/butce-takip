import { useState } from "react";
import "./budget-form.style.css";

const BudgetForm = ({ onAdd }) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("gider");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!description.trim() || !amount || Number(amount) <= 0) return;

        setIsSubmitting(true);

        const newItem = {
            description: description.trim(),
            amount: Number(amount),
            type: type,
        };

        await onAdd(newItem);
        setDescription("");
        setAmount("");
        setType("gider");
        setIsSubmitting(false);
    };

    return (
        <div className="card form-card mb-4" style={{ animationDelay: "0.2s" }}>
            <div className="card-body p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="form-header-icon">
                        <i className="bi bi-plus-lg"></i>
                    </div>
                    <h5 className="card-title mb-0 fw-bold">Yeni İşlem</h5>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                        <div className="col-md-5">
                            <label className="form-label" htmlFor="description">
                                Açıklama
                            </label>
                            <div className="input-group custom-input-group">
                                <span className="input-group-text custom-input-icon">
                                    <i className="bi bi-pencil"></i>
                                </span>
                                <input
                                    id="description"
                                    className="form-control"
                                    type="text"
                                    placeholder="Örn: Market alışverişi"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label" htmlFor="amount">
                                Tutar (₺)
                            </label>
                            <div className="input-group custom-input-group">
                                <span className="input-group-text custom-input-icon">
                                    <i className="bi bi-currency-exchange"></i>
                                </span>
                                <input
                                    id="amount"
                                    className="form-control"
                                    type="number"
                                    placeholder="0.00"
                                    min="0.01"
                                    step="0.01"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label" htmlFor="type">
                                Tür
                            </label>
                            <div className="type-selector">
                                <button
                                    type="button"
                                    className={`type-btn type-income ${type === "gelir" ? "active" : ""}`}
                                    onClick={() => setType("gelir")}
                                    disabled={isSubmitting}
                                >
                                    <i className="bi bi-arrow-up-circle"></i>
                                    Gelir
                                </button>
                                <button
                                    type="button"
                                    className={`type-btn type-expense ${type === "gider" ? "active" : ""}`}
                                    onClick={() => setType("gider")}
                                    disabled={isSubmitting}
                                >
                                    <i className="bi bi-arrow-down-circle"></i>
                                    Gider
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-submit w-100"
                        disabled={isSubmitting || !description.trim() || !amount}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Ekleniyor...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-plus-circle me-2"></i>
                                İşlem Ekle
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BudgetForm;