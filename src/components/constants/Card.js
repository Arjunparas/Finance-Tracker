
import {
  AdspendningIcon,
  CashfreeIcon,
  CogsIcon,
  DonePayment,
  DownwardGrowth,
  EstimateProfit,
  FailedPayment,
  GstTaxIcon,
  MicsIcon,
  NimbusIcon,
  PaytmIcon,
  RazorpayIcon,
  RealTimeProfit,
  RefundPayment,
  ShippingIcon,
  ShopifyIcon,
  StripeIcon,
  TotalExpenses,
  TotalRevenue,
  UpwardGrowth,
} from "../../assets/images/Icons";

export const card = [
  {
    title: "TOTAL REVENUE",
    price: "₹25.72K",
    value: "5.4%",
    description: "+₹2.5K this week",
    titleColor: "#0BAFFF",
    valueColor: "#4FBF67",
    iconOne: TotalRevenue,
    iconTwo: UpwardGrowth,
  },
  {
    title: "Total EXPENSES",
    price: "12.6K",
    description: "₹2.1 this week",
    titleColor: "#0BAFFF",
    iconOne: TotalExpenses,
  },
  {
    title: "REAL TIME PROFIT",
    price: "₹8.92K",
    value: "2.3%",
    description: "+₹562 this week",
    titleColor: "#FF5E2F",
    valueColor: "#FC3400",
    iconOne: RealTimeProfit,
    iconTwo: DownwardGrowth,
  },
  {
    title: "ESTIMATED PROFIT",
    price: " ₹45.7K",
    value: "18.4%",
    description: "+₹2.5K this week",
    titleColor: "#4FBF67",
    valueColor: "#4FBF67",
    iconOne: EstimateProfit,
    iconTwo: UpwardGrowth,
  },
];

export const TransationData = [
  {
    icon: DonePayment,
    text: "Payment from ",
    number: 10023,
    dayAndTime: "Today, 10:30 AM",
    amount: "+ $650.00",
    status: "Completed",
  },
  {
    icon: RefundPayment,
    text: "Refund to",
    number: 10024,
    dayAndTime: "Today, 10:30 AM",
    amount: "- $250.00",
    status: "Completed",
  },
  {
    icon: FailedPayment,
    text: "Failed from",
    number: 10025,
    dayAndTime: "Today, 10:30 AM",
    amount: "+ $128.00",
    status: "Declined",
  },
];

export const expensesGraphData = [
  {
    icon:AdspendningIcon,
    title:"Ad Spedning",
    value:"₹12.3K",
    bgColor:"#7B61FF",
    bdColor:"#7B61FF",
  },
  {
    icon:CogsIcon,
    title:"COGS",
    value:"₹21.4K",
    bgColor:"#FF5E2F",
    bdColor:"#FF5E2F",
  },
  {
    icon:ShippingIcon,
    title:"Shipping",
    value:"₹9.2K",
    bgColor:"#0BAFFF",
    bdColor:"#0BAFFF",
  },
  {
    icon:ShopifyIcon,
    title:"SHOPIFY",
    value:"₹2.7K",
    bgColor:"#4FBF67",
    bdColor:"#4FBF67",
  },
  {
    icon:GstTaxIcon,
    title:"GST Tax",
    value:"₹4.5K",
    bgColor:"#FEAD36",
    bdColor:"#FEAD36",
  },
  {
    icon:MicsIcon,
    title:"MICS",
    value:"₹23.2K",
    bgColor:"##1AD492",
    bdColor:"#1AD492",
  },
]

export const expensesMainData = [
  {
    title:"Zendesk - Aug",
    date:"12 September 2021",
    type:"Zendesk",
    executedBy:"Enrique",
    amount:"₹2,000",
  },
  {
    title:"Nagpur - ELM Project",
    date:"12 September 2021",
    type:"Shipping",
    executedBy:"Dianne ",
    amount:"₹2,500",
  },
  {
    title:"Ad - Facebook",
    date:"12 September 2021",
    type:"Ad Spend",
    executedBy:"Walterson",
    amount:"₹6,020",
  },
  {
    title:"Salary - Alex",
    date:"12 September 2021",
    type:"Mics",
    executedBy:" Kushagrah",
    amount:"₹15,000",
  },
  {
    title:"Shopify",
    date:"12 September 2021",
    type:"Shopify",
    executedBy:" Kushagrah",
    amount:"₹5,212",
  },
]

export const revenueGraphData = [
  {
    icon:StripeIcon,
    value:"₹54.3K",
    bgColor:"#6772E5",
    bdColor:"#6772E5",
  },
  {
    icon:RazorpayIcon,
    value:"₹124.3K",
    bgColor:"#FF5E2F",
    bdColor:"#FF5E2F",
  },
  {
    icon:CashfreeIcon,
    value:"₹28.14K",
    bgColor:"#FEAD36",
    bdColor:"#FEAD36",
  },
  {
    icon:PaytmIcon,
    value:"₹147.5K",
    bgColor:"#0BAFFF",
    bdColor:"#0BAFFF",
  },
  {
    icon:NimbusIcon,
    value:"₹39.8K",
    bgColor:"#1AD492",
    bdColor:"#1AD492",
  }, 
]

export const recentTransactionData = [
  {
    icon: RazorpayIcon,
    title:"Razorpay",
    dateAndTime:"Today, 2:17 AM",
    price:"+$30.03"
  },
  {
    icon: CashfreeIcon,
    title:"Cashfree",
    dateAndTime:"Yesterday, 6:32 PM",
    price:"+$600.03"
  },
  {
    icon: StripeIcon,
    title:"Stripe",
    dateAndTime:"13 September, 1:29 AM",
    price:"+$5,249.00"
  },
  {
    icon: PaytmIcon,
    title:"Paytm",
    dateAndTime:"12 September , 2:42 PM",
    price:"+$6,000.00"
  },
  {
    icon: NimbusIcon,
    title:"Nimbuspost",
    dateAndTime:"12 September , 2:42 PM",
    price:"+$678.00"
  },
]
