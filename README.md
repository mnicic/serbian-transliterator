# SerbianTransliterator

This is Angular library for transliterating from Serbian cyrilic to Serbian latinic, and vice versa.

## Installation and how to use

Let's install it:

```bash
npm install serbian-transliterator
```

Import the library into a module:

```javascript
import { SerbianTransliteratorModule } from 'serbian-transliterator';

...

@NgModule({
  declarations: [ ...  ],
  imports: [
    ...
    SerbianTransliteratorModule
  ],
  ...
})
```

Use it in HTML files:

```html
<p>latinic transliteration: <strong>{{ 'аутоматски' | transliterator }}</strong></p>
```

or with explicitly set transliterator:
```html
  <p>cyrilic transliteration: <strong>{{ 'ručno' | transliterator: 'cir' }}</strong></p>
```


### More details

Take a look into `./src/app/app.module.ts` and `./src/app/app.component.html` files.

## About

The library is developed to solve transliteration on [Značenje](https://znacenje.pravac.com) project, so you can use this website as demo. Apart of that, it is planned to be integrated on [CirLat](https://cirlat.pravac.com) and [Knjige](https://knjige.pravac.com).

## Dev info

The project is based on standard Angular CLI environment.

### Can I participate?

Yes. This library is developed in very short time to solve problem of transliteration on existing project. Thus, there are a lot of areas for an improvement. I would be happy if someone is willing to participare and to make any kind of improvements.

