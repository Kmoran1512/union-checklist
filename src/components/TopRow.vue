<template>
  <div class="p-fluid grid formgrid">
    <div class="field col">
      <label for="truckNumber">Truck:</label>
      <Dropdown
        id="truckNumber"
        v-model="selectedTruck"
        :options="truckNumbers"
      />
    </div>

    <div class="field col">
      <label for="dateToday">Date:</label>
      <Calendar
        id="dateToday"
        v-model="selectedDate"
        disabled="true"
        showButtonBar
      />
    </div>

    <div class="field col">
      <label for="mileage">Mileage</label>
      <InputNumber
        id="mileage"
        v-model="enteredMilage"
        mode="decimal"
        locale="en-US"
        :minFractionDigits="1"
      />
    </div>

    <div class="field col">
      <label for="checkedBy">Checked By</label>
      <InputText
        id="checkedBy"
        style="height: 39px !important"
        v-model="checkedBy"
      />
    </div>

    <div class="field col">
      <label for="fuelLevel">Fuel Level</label>
      <Dropdown v-model="fuelLevel" :options="fuelOptions" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["checklist"],
  data() {
    console.log(this.checklist);
    return {
      selectedTruck: this.checklist["-- Selected Truck"],
      selectedDate: new Date(),
      enteredMilage: this.checklist.Milage,
      checkedBy: this.checklist["Checked By"],
      fuelLevel: this.checklist["Fuel Level"],
      fuelOptions: [
        "Full",
        "7/8",
        "3/4",
        "5/8",
        "1/2",
        "3/8",
        "1/4",
        "1/8",
        "Empty",
      ],
      truckNumbers: this.checklist.Trucks,
    };
  },
};
</script>

<style>
#checkedBy {
  height: 10px;
}
</style>
