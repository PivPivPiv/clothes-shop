import { insertIcons } from "/src/view/view.js";
import $ from "jquery";
import "slick-carousel";

insertIcons();

$(document).ready(function () {
  $(".slider").slick({});
});
