import { defineStore } from 'pinia'



export const usePaymentStore = defineStore('paymentStore', {
    state: () => ({
        paymentValue: 0,
    }),


    actions: {
        setPaymentValue(value: number) {
            this.paymentValue = value
        }
    }
})
