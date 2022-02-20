<template>
  <div class="flex flex-wrap justify-content-center">
    <div
      class="flex flex-wrap align-items-center justify-content-center row-entry"
    >
      <InputSwitch v-model="isChecked" />
      <p v-if="field.Amount">{{ field.Amount }}x</p>
      <p class="p-1">{{ field.Name }}</p>
      <div
        class="flex align-items-center calendar-section pl-1"
        v-if="'Date' in field"
      >
        <p>Date.</p>

        <div class="calendar-wrapper">
          <Calendar
            style="height: 25px"
            v-model="expiryDate"
            view="month"
            date-format="mm/yy"
          />
        </div>
      </div>
      <div
        class="flex align-items-center psi-section pl-1"
        v-if="'Amount (PSI)' in field"
      >
        <p>Amount (PSI).</p>

        <div>
          <InputNumber style="height: 25px" v-model="psi" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["field"],
  data() {
    return {
      isChecked: false,
      expiryDate: null,
      psi: null,
    };
  },
};
</script>

<style></style>
