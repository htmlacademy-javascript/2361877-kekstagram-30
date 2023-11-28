const COMMENTS_COUNTS_SHOW = 5;

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштэгов`,
  NOT_UNIQUE: 'Хэштеги повторяются',
  INVALID_PATTERN: 'Неправильный хэштэг',
};

const SubmitButtonCaption = {
  SUBMITTING: 'Отправляю...',
  IDLE: 'Опубликовать',
};

const Effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [Effect.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [Effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [Effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [Effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [Effect.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

const effectToSliderOptions = {
  [Effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const REMOVE_MESSAGE_TIMEOUT = 5000;

const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram';
const ServerRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorData = {
  [HttpMethod.GET]: 'Не удалось загрузить данные',
  [HttpMethod.POST]: 'Не удалось отправить данные',
};

const FilterGroup = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const MAX_RANDOM_FILTER = 10;

export { COMMENTS_COUNTS_SHOW, MAX_HASHTAG_COUNT, VALID_SYMBOLS, ErrorText, SubmitButtonCaption, Effect, effectToFilter, effectToSliderOptions, SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE, REMOVE_MESSAGE_TIMEOUT, SERVER_URL, ServerRoute, HttpMethod, ErrorData, FilterGroup, MAX_RANDOM_FILTER, FILE_TYPES };
