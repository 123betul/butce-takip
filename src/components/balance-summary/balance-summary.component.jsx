import "./balance-summary.style.css";

const BalanceSummary = ({ transactions }) => {
    const totalGelir = transactions
        .filter((item) => item.type === "gelir")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalGider = transactions
        .filter((item) => item.type === "gider")
        .reduce((sum, item) => sum + item.amount, 0);

    const bakiye = totalGelir - totalGider;
    const total = totalGelir + totalGider;
    const gelirPercent = total > 0 ? (totalGelir / total) * 100 : 50;

    return (
        <div className="card balance-card mb-4" style={{ animationDelay: "0.1s" }}>
            <div className="card-body p-4">
                {/* Ana Bakiye */}
                <div className="text-center mb-4">
                    <span className="badge bg-transparent text-secondary balance-badge mb-2">
                        <i className="bi bi-bank me-1"></i>
                        TOPLAM BAKİYE
                    </span>
                    <h2 className={`balance-amount mb-0 ${bakiye >= 0 ? "text-income" : "text-expense"}`}>
                        {bakiye >= 0 ? "+" : ""}{bakiye.toLocaleString("tr-TR")} ₺
                    </h2>
                </div>

                {/* İlerleme Çubuğu */}
                <div className="progress balance-progress mb-4">
                    <div
                        className="progress-bar progress-income"
                        role="progressbar"
                        style={{ width: `${gelirPercent}%` }}
                        aria-valuenow={gelirPercent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>

                {/* Gelir - Gider Detayları */}
                <div className="row g-3">
                    <div className="col-6">
                        <div className="detail-card detail-income">
                            <div className="d-flex align-items-center gap-3">
                                <div className="detail-icon income-icon">
                                    <i className="bi bi-arrow-up-circle-fill"></i>
                                </div>
                                <div>
                                    <small className="text-secondary d-block fw-semibold detail-label">GELİR</small>
                                    <span className="detail-value text-income">
                                        +{totalGelir.toLocaleString("tr-TR")} ₺
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="detail-card detail-expense">
                            <div className="d-flex align-items-center gap-3">
                                <div className="detail-icon expense-icon">
                                    <i className="bi bi-arrow-down-circle-fill"></i>
                                </div>
                                <div>
                                    <small className="text-secondary d-block fw-semibold detail-label">GİDER</small>
                                    <span className="detail-value text-expense">
                                        -{totalGider.toLocaleString("tr-TR")} ₺
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceSummary;