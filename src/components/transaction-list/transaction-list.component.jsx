import TransactionCard from "../transaction-card/transaction-card.component";
import "./transaction-list.style.css";

const TransactionList = ({ transactions, onDelete }) => {

    if (transactions.length === 0) {
        return (
            <div className="card empty-card" style={{ animationDelay: "0.3s" }}>
                <div className="card-body text-center py-5">
                    <div className="empty-icon-wrapper mb-3">
                        <i className="bi bi-inbox"></i>
                    </div>
                    <h5 className="fw-semibold text-secondary mb-2">Henüz işlem eklenmedi</h5>
                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                        Yukarıdaki formu kullanarak gelir veya gider ekleyin
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="transaction-section" style={{ animationDelay: "0.3s" }}>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-2">
                    <div className="section-icon">
                        <i className="bi bi-clock-history"></i>
                    </div>
                    <h5 className="fw-bold mb-0">İşlem Geçmişi</h5>
                </div>
                <span className="badge transaction-count">
                    {transactions.length} işlem
                </span>
            </div>
            <div className="transaction-items">
                {
                    transactions.map((transaction, index) => {
                        return (
                            <TransactionCard
                                key={transaction.id}
                                transaction={transaction}
                                onDelete={onDelete}
                                index={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TransactionList;