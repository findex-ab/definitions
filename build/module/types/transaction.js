import * as ss from 'superstruct';
export const TransactionSchema = ss.type({
    action: ss.enums(["BUY", "SELL", "PRICE_UPDATE"]),
    quantity: ss.number(),
    totalPrice: ss.number(),
    currency: ss.string(),
    source: ss.enums(["MANUAL", "AUTOMATIC"]),
    timestamp: ss.date(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwZXMvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFXbEMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQThCLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3JCLFVBQVUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3ZCLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3JCLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFO0NBQ3JCLENBQUMsQ0FBQyJ9