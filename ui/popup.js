var Popup = {
  init: function() {
    $("#button-reload").click(function() { Popup.reloadTab(); });
    $("#button-open").click(function() { Popup.openTab(); });
    $("#button-update").click(function() { Popup.updateBackgroundColor(); });
  },

  reloadTab: function() {
    chrome.tabs.reload();
    window.close();
  },

  openTab: function() {
    chrome.tabs.create({});
    window.close();
  },

  updateBackgroundColor: function() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, { code: "document.body.style.backgroundColor='red'" });
    });
    window.close();
  }
};

$(document).ready(function() { Popup.init(); });
