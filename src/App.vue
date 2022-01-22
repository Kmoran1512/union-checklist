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
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script>
import data from "./static resouces/checklist.json";

console.log(data);
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
