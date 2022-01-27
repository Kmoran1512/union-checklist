<template>
  <link
    href="https://cdn.jsdelivr.net/npm/primeflex@2.0.0/primeflex.min.css"
    rel="stylesheet"
  />

  <div class="header">
    <h1>Union Rescue Squad</h1>
    <h1>Ambulance Checklist</h1>
  </div>
  <div class="top-row">
    <top-row ref="topRowInfo" :checklist="checks"> </top-row>
  </div>

  <div class="bottoms">
    <Accordion>
      <AccordionTab
        v-for="section in checks.Sections"
        :key="section"
        :header="section.Header"
      >
        <input-row
          v-for="field in section.Fields"
          :key="field"
          :field="field"
          :ref="field.Name"
        >
        </input-row>
      </AccordionTab>
    </Accordion>
  </div>

  <div class="card" style="padding: 1rem">
    <div class="flex justify-content-center flex-wrap card-container">
      <div class="flex align-items-center justify-content-center">
        <Button label="Submit" v-on:click="testest" />
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

import TopRow from "./components/TopRow.vue";
import InputRow from "./components/InputRow.vue";

import checklistData from "./static resouces/checklist.json";

export default {
  name: "app",
  components: {
    TopRow,
    InputRow,
  },
  data() {
    return {
      checks: {},
      problems: "",
    };
  },
  created() {
    this.checks = checklistData;
  },
  methods: {
    testest: function () {
      for (const section of this.checks.Sections) {
        let changed = false;
        for (const field of section.Fields) {
          if (!this.$refs[field.Name].isChecked) {
            this.problems =
              this.problems + (field.Name + " is in limited supply");
            changed = true;
          }
          if (
            this.$refs[field.Name].expiryDate &&
            (this.$refs[field.Name].expiryDate.getTime() - Date.now()) /
              (1000 * 3600 * 24) <
              30
          ) {
            if (!changed) {
              this.problems = this.problems + field.Name;
            } else {
              this.problems = this.problems + ", and";
            }
            this.problems = this.problems + " expires within a month";
            changed = true;
          }
          if (
            this.$refs[field.Name]["Amount (PSI)"] &&
            this.$refs[field.Name]["Amount (PSI)"] < 500
          ) {
            if (!changed) {
              this.problems = this.problems + field.Name;
            } else {
              this.problems = this.problems + ", and";
            }
            this.problems = this.problems + " has low air pressure";
            changed = true;
          }
          if (changed) this.problems = this.problems + "\n";
        }
        this.problems = this.problems + "\n";
      }
      alert("Form Submitted");
      this.sendEmail(this.problems);
    },
    sendEmail(message) {
      try {
        emailjs.send(
          "service_rzp1dw6",
          "template_2snq8yq",
          {
            messageText: message,
          },
          "user_V4ZEIjyjdrKbWOei7h8Yz"
        );
      } catch (error) {
        console.log({ error });
      }
    },
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
.header {
  text-align: center;
}
.row-entry {
  width: 30rem;
}
input {
  width: 100% !important;
  height: 100% !important;
}
</style>
