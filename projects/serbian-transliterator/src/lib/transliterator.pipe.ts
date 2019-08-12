import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transliterator'
})
export class TransliteratorPipe implements PipeTransform {

  transform(value: string, target?: any): any {
    const noTransliterateTriggers = ['w', 'q', 'x', 'y'];

    // tslint:disable-next-line:max-line-length
    const cirWords = ['нјекција', 'нјугација', 'анјуг', 'дјева', 'Дјева'];
    // tslint:disable-next-line:max-line-length
    const latWords = ['njekcija', 'njugacija', 'anjug', 'djeva', 'Djeva'];


    // tslint:disable-next-line:max-line-length
    const cirCharsLowercase = ['ђ', 'љ', 'њ', 'џ', 'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'ј', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'ћ', 'у', 'ф', 'х', 'ц', 'ч', 'ш'];
    // tslint:disable-next-line:max-line-length
    const cirCharsUppercase = ['Ђ', 'Љ', 'Њ', 'Џ', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Ј', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'Ћ', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш'];
    // tslint:disable-next-line:max-line-length
    const latCharsLowercase = ['đ', 'lj', 'nj', 'dž', 'a', 'b', 'v', 'g', 'd', 'e', 'ž', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'ć', 'u', 'f', 'h', 'c', 'č', 'š'];
    // tslint:disable-next-line:max-line-length
    const latCharsUppercase = ['Đ', 'Lj', 'Nj', 'Dž', 'A', 'B', 'V', 'G', 'D', 'E', 'Ž', 'Z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'Ć', 'U', 'F', 'H', 'C', 'Č', 'Š'];

    const lat = latWords.concat(latCharsUppercase, latCharsLowercase);
    const cir = cirWords.concat(cirCharsUppercase, cirCharsLowercase);

    const excludingTrigerChars = ['w', 'W', 'q', 'Q', 'y', 'Y', 'x', 'X'];

    const count = (value.match(/is/g) || []).length;
    // console.log(count);

    if (['cir', 'lat'].indexOf(target) === -1) {
      target = undefined;
    }

    if (!target) {
      // to recognize input characters
      const cirCount = (value.match(/[аеиоу]/g) || []).length;
      const latCount = (value.match(/[aeiou]/g) || []).length;
      target = latCount > cirCount ? 'cir' : 'lat';
    }

    let sourceArr = lat;
    let targetArr = cir;

    if (target === 'lat') {
      sourceArr = cir;
      targetArr = lat;
    }

    // for (let i = 0, len = sourceArr.length; i < len; i++) {
    //   value = value.replace(new RegExp(sourceArr[i], 'g'), targetArr[i]);
    // }

    // return value;

    const words = value.split(/[\s]+/gi);
    let result = '';



    for (let i = 0, iLen = words.length; i < iLen; i++) {
      // Skip words with w,q,x,y
      if (words[i].split('').filter(itm => noTransliterateTriggers.indexOf(itm) > -1).length > 0) {
        result += ' ' + words[i];
        continue;
      }

      let newWord = ' ' + words[i];

      for (let j = 0, jLen = sourceArr.length; j < jLen; j++) {
        newWord = newWord.replace(new RegExp(sourceArr[j], 'g'), targetArr[j]);
        // newWord = '' + newWord;
      }

      result += newWord;
    }

    return result.trim();

  }

}
