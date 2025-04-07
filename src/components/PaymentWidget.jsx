import React, { useEffect } from "react";

const PaymentWidget = () => {
  useEffect(() => {
    // Если инструкция требует вызвать функцию pay(this) на форме, вы можете определить её здесь,
    // либо оставить вызов в inline-обработчике onsubmit.
    // Если функция pay уже определена в загруженном скрипте tinkoff_v2.js, то здесь ничего дополнительно писать не нужно.
  }, []);

  return (
    <div>
      {/* Стили можно либо вынести в отдельный CSS-файл, либо оставить здесь */}
      <style>{`
        .payform-tbank {
          display: flex;
          flex-direction: column;
          margin: 2px auto;
          max-width: 250px;
        }
        .payform-tbank-row {
          margin: 2px;
          border-radius: 4px;
          flex: 1;
          transition: 0.3s;
          border: 1px solid #DFE3F3;
          padding: 15px;
          outline: none;
          background-color: #DFE3F3;
          font-size: 15px;
        }
        .payform-tbank-row:focus {
          background-color: #FFFFFF;
          border: 1px solid #616871;
          border-radius: 4px;
        }
        .payform-tbank-btn {
          background-color: #FBC520;
          border: 1px solid #FBC520;
          color: #3C2C0B;
        }
        .payform-tbank-btn:hover {
          background-color: #FAB619;
          border: 1px solid #FAB619;
        }
      `}</style>

      {/* Форма согласно инструкции */}
      <form
        className="payform-tbank"
        name="payform-tbank"
        id="payform-tbank"
        onSubmit="pay(this); return false;"
      >
        <input className="payform-tbank-row" type="hidden" name="terminalkey" value="TBankTest" />
        <input className="payform-tbank-row" type="hidden" name="frame" value="false" />
        <input className="payform-tbank-row" type="hidden" name="language" value="ru" />
        {/* Если нужна интеграция с чеком, оставьте поле receipt, иначе можно удалить */}
        <input className="payform-tbank-row" type="hidden" name="receipt" value="" />
        <input
          className="payform-tbank-row"
          type="text"
          placeholder="Сумма заказа"
          name="amount"
          required
        />
        <input
          className="payform-tbank-row"
          type="hidden"
          placeholder="Номер заказа"
          name="order"
        />
        <input
          className="payform-tbank-row"
          type="text"
          placeholder="Описание заказа"
          name="description"
        />
        <input
          className="payform-tbank-row"
          type="text"
          placeholder="ФИО плательщика"
          name="name"
        />
        <input className="payform-tbank-row" type="email" placeholder="E-mail" name="email" />
        <input
          className="payform-tbank-row"
          type="tel"
          placeholder="Контактный телефон"
          name="phone"
        />
        <input className="payform-tbank-row payform-tbank-btn" type="submit" value="Оплатить" />
      </form>
      <script type="text/javascript">
        {`
          const TPF = document.getElementById("payform-tbank");
          TPF.addEventListener("submit", function (e) {
            e.preventDefault();
            const { description, amount, email, phone, receipt } = TPF;
            
            if (receipt) {
              if (!email.value && !phone.value)
                return alert("Поле E-mail или Phone не должно быть пустым");

              TPF.receipt.value = JSON.stringify({
                "EmailCompany": "your_email@example.com",
                "Taxation": "patent",
                "FfdVersion": "1.2",
                "Items": [
                  {
                    "Name": description.value || "Оплата",
                    "Price": Math.round(amount.value * 100),
                    "Quantity": 1.00,
                    "Amount": Math.round(amount.value * 100),
                    "PaymentMethod": "full_prepayment",
                    "PaymentObject": "service",
                    "Tax": "none",
                    "MeasurementUnit": "pc"
                  }
                ]
              });
            }
            pay(TPF);
          });
        `}
      </script>
    </div>
  );
};

export default PaymentWidget;
