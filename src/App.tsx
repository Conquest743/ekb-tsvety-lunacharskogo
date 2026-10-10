import { baseUrl, Reveal, YandexMap, YandexReviews } from "./blocks";

const mapHref = "https://yandex.com/maps/org/tsvety/1644763990/";
const phone = "+7 (343) 200-77-87";
const coords = "60.617720,56.846282";
const flowwow = "https://flowwow.com/shop/cvety-na-lunacharskogo/";

export default function App() {
  return <div className="site site-tsvety" id="top">
    <div className="concept-note"><span>Концепт страницы</span><span>Не официальный сайт магазина</span></div>
    <header className="masthead"><a className="wordmark" href="#top">Цветы</a><nav aria-label="Навигация"><a href="#offer">Букеты и поводы</a><a href="#reviews">Отзывы</a><a href="#location">Магазин</a></nav><a className="call-button" href="tel:+73432007787">Позвонить</a></header>
    <main>
      <section className="hero"><div className="hero-copy"><p className="category">Цветочный магазин · круглосуточно</p><h1>Цветы</h1><p className="lead">Букеты, доставка, свадебная флористика и подарки — по адресу на Луначарского.</p><a className="primary-action" href="tel:+73432007787">Позвонить в магазин</a><a className="secondary-link" href={flowwow} target="_blank" rel="noreferrer">Заказ через Flowwow</a></div><div className="hero-image"><img src={baseUrl + "hero.webp"} alt="Сгенерированный концепт мятного фасада магазина Цветы с витриной; не фактическая фотография" fetchPriority="high"/><p>Концепт по открытой фотокарточке · исходное фото не используется</p></div></section>
      <Reveal><section className="offer-ledger" id="offer"><div><p className="eyebrow">Поводы, которые указаны в карточке</p><h2>От небольшого букета до оформления события.</h2></div><ul><li>Цветы и букеты</li><li>Свадебная флористика</li><li>Доставка</li><li>Подарки и сувениры</li><li>Выставки местных художников упоминаются в отзывах</li></ul></section></Reveal>
      <Reveal><section className="review-section" id="reviews"><p className="eyebrow">Отзывы на Яндекс Картах</p><h2>Оценки и отзывы покупателей из официального виджета.</h2><YandexReviews placeId="1644763990" title="Цветы на Луначарского" mapHref={mapHref}/></section></Reveal>
      <section className="location-section" id="location"><div className="location-copy"><p className="eyebrow">Центр · магазин открыт 24 часа</p><h2>Цветы на Луначарского.</h2><address>ул. Луначарского, 78</address><dl><div><dt>Часы</dt><dd>Круглосуточно по Яндекс Картам</dd></div><div><dt>Телефон</dt><dd><a href="tel:+73432007787">{phone}</a></dd></div><div><dt>Заказ онлайн</dt><dd><a href={flowwow} target="_blank" rel="noreferrer">Витрина Flowwow</a></dd></div></dl></div><YandexMap coords={coords} title="Цветы, ул. Луначарского, 78" mapHref={mapHref} zoom={16}/></section>
      <section className="closing"><p>Ночной букет начинается со звонка.</p><a className="primary-action" href="tel:+73432007787">{phone}</a></section>
    </main>
    <footer><span>Информация из открытых источников · 10.10.2026</span><span>Иллюстрация — новый визуальный концепт, не фото магазина.</span></footer>
  </div>;
}