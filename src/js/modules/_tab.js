function setupTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      const navigation = button.parentElement;
      const tabs = navigation.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabActivate = tabs.querySelector(
        `.tab-content[data-tab="${tabNumber}"]`
      );
      console.log(tabNumber);
      console.log(tabActivate);

      navigation.querySelectorAll(".tab").forEach((button) => {
        button.classList.remove("active");
      });
      tabs.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.remove("active");
        console.log("hi");
      });

      button.classList.add("active");
      tabActivate.classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});
