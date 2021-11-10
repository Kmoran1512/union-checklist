<template>
  <link
    href="https://cdn.jsdelivr.net/npm/primeflex@2.0.0/primeflex.min.css"
    rel="stylesheet"
  />

  <div class="checklist-section" id="sectionOne">
    <Accordion>
      <AccordionTab header="BLS Drug Box (Airway Cabinet)">
        <div class="flex flex-wrap justify-content-center">
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="AspirinValue" />
            <h3 class="p-1">: Aspirin.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="AspirinDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="NarcanValue" />
            <h3 class="p-1">: Narcan.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="NarcanDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="NitroValue" />
            <h3 class="p-1">: Nitroglycerin.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="NitroDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="EpiValue" />
            <h3 class="p-1">: 2 Ampule Epinephrine.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="EpiDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="GlucoseValue" />
            <h3 class="p-1">: Oral Glucose.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="GlucoseDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="TylenolValue" />
            <h3 class="p-1">: 2 Packs Tylenol 500mg.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="TylenolDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="BenadrylValue" />
            <h3 class="p-1">: 2 Packs Benadryl 50mg.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="BenadrylDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="IbuprofenValue" />
            <h3 class="p-1">: 2 Packs Ibuprofen 200mg.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="IbuprofenDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="ChdIbuprofenValue" />
            <h3 class="p-1">: Chidlrens' Ibuprofen.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="ChdIbuprofenDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="ChdTylenolValue" />
            <h3 class="p-1">: Chidlrens' Tylenol.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="ChdTylenolDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="SalbutamolValue" />
            <h3 class="p-1">: 2 Albuterol Aulfate.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="SalbutamolDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="NSValue" />
            <h4 class="p-1">: Normal Saline Nebulizer (Syringe).</h4>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="NSDate" />
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="AfrinValue" />
            <h3 class="p-1">: Afrin Spray.</h3>
            <div class="flex align-items-center calendar-section pl-1">
              <h3>Date.</h3>
              <div class="calendar-wrapper">
                <Calendar style="height: 25px" v-model="AfrinDate" />
              </div>
            </div>
          </div>
        </div>
      </AccordionTab>
      <AccordionTab header="Linens Cabinet">
        <div class="flex flex-wrap justify-content-center">
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="BlanketsValue" />
            <h3 class="p-1">: 2 Blankets.</h3>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="PillowCasesValue" />
            <h3 class="p-1">: 3 Pillow Cases.</h3>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="SheetsValue" />
            <h3 class="p-1">: 6 Sheets.</h3>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="TowelsValue" />
            <h3 class="p-1">: 6 Towels.</h3>
          </div>
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              row-entry
            "
          >
            <InputSwitch v-model="WashClothsValue" />
            <h3 class="p-1">: 6 Wash Cloths.</h3>
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AspirinValue: false,
      AspirinDate: null,
      NarcanValue: false,
      NarcanDate: null,
      NitroValue: false,
      NitroDate: null,
      EpiValue: false,
      EpiDate: null,
      GlucoseValue: false,
      GlucoseDate: null,
      TylenolValue: false,
      TylenolDate: null,
      BenadrylValue: false,
      BenadrylDate: null,
      IbuprofenValue: false,
      IbuprofenDate: null,
      ChdIbuprofenValue: false,
      ChdIbuprofenDate: null,
      ChdTylenolValue: false,
      ChdTylenolDate: null,
      SalbutamolValue: false,
      SalbutamolDate: null,
      NSValue: false,
      NSDate: null,
      AfrinValue: false,
      AfrinDate: null,
      BlanketsValue: false,
      PillowCasesValue: false,
      SheetsValue: false,
      TowelsValue: false,
      WashClothsValue: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 1%;
  margin-right: 2%;
}

.calendar-wrapper {
  width: 6.5rem;
}
.row-entry {
  width: 30rem;
}
input {
  width: 100% !important;
  height: 100% !important;
}
</style>
