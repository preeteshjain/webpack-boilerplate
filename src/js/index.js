import $ from 'jquery';
import getCssSelector from 'css-selector-generator';
import './styles.css';

export class Sitebite {
  init() {
    $('body').css('cursor', 'crosshair');
    $('*').hover(function (e) {
      $(this).parents().removeClass('sitebite-hover');
      $(this).addClass('sitebite-hover');
    }, function (e) {
      $(this).removeClass('sitebite-hover');
    });
    $(document).click(function ($event) {
      let target = $event.target;

      console.clear();
      console.log(getCssSelector(target, {selectors: ['class']}));
      console.log(getCssSelector(target, {selectors: ['tag']}));
      console.log(getCssSelector(target, {selectors: ['attribute']}));
      console.log(getCssSelector(target, {selectors: ['class', 'tag']}));
    });
  }
}

let s = new Sitebite;
s.init();
