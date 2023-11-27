<template>
  <div class="the-cart">
    <div class="the-cart__heading">Cart Items</div>

    <table>
      <tr>
        <th>Item</th>
        <th>Weight</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total</th>
        <th>
          <img
            src="/img/trash.png"
            class="action-icon action-icon--delete-small"
            alt=""
          />
        </th>
      </tr>
      <tr v-for="i in 5" :key="i">
        <td>name</td>
        <td>50mg</td>
        <td>30 </td>
        <td>
          <input class="qty-input" type="number"/>
        </td>
        <td class="text-right"> 500 </td>
        <td>
          <img src="/img/trash.png" class="action-icon action-icon--delete-small" alt="" />
        </td>
      </tr>
      <tr>
        <td colspan="6">
          <div class="text-right">
            <hr />
            <strong>Grand Total : 1000 </strong>
          </div>
        </td>
      </tr>
    </table>

    <TheButton class="w-100 mt-4">Checkout </TheButton>

    <div v-if="enteringCustomerInfo" class="mt-4">
      <label for="" class="block">Customer Name</label>
      <input
        type="text"
        placeholder="Enter customer name"
        v-model="customer"
        class="w-100"
      />
      <label for="" class="block mt-4">Customer Phone</label>
      <input
        type="text"
        placeholder="Enter customer phone"
        v-model="phone"
        class="w-100"
      />
      <TheButton class="w-100 mt-4" @click="confirmNow" :loading="confirming">
        Confirm
      </TheButton>
    </div>
  </div>
</template>

<script>
import TheButton from "./TheButton.vue";

export default {
  components: {
    TheButton,
  },
};
</script>

<style>
.the-cart {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 11px 22px;
}

.the-cart__heading {
  font-size: 25px;
  font-weight: bold;
  border-bottom: 1px solid rgb(173, 173, 173);
}

.qty-input {
  width: 50px;
  padding: 5px 7px !important;
}

.action-icon--delete-small {
  height: 14px !important;
}
</style>
