export interface InstallmentType {
    interest: number,
    times: number
    value: number
}

export interface PaymentDataType {
    paymentValue: number | null
    username: string | null
}
