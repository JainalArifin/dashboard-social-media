import base64url from 'base64url';
import _ from 'lodash';

export function decodeToken(token) {
  if (!token) {
    return {};
  }

  return JSON.parse(base64url.decode(token.split('.')[1]));
}

export const thousandConverter = value => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export function objectToFormData(obj, form = new FormData(), namespace = '') {
  const fd = form;
  let formKey;

  for (const property in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File,
      // use recursivity.
      if (
        typeof obj[property] === 'object' &&
        !(obj[property] instanceof File)
      ) {
        objectToFormData(obj[property], fd, formKey);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
}

// to add -All- value to dropdownData
export function convertListForFilter(options = [], allLabel = '-All-') {
  const _options = _.cloneDeep(options);
  // prevent multiple unshift when re-render
  if (!_options.find(val => val.value === '')) {
    _options.unshift({
      value: '',
      label: allLabel
    });
  }

  return _options;
}

export const sToTime = duration => {
  if (duration) {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration % 3600) / 60);
    let seconds = Math.floor(duration % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
  }
  return '-';
};

export const msToTime = duration => {
  if (duration) {
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
  }
  return '-';
};

export function dateConverter(date) {
  if (typeof date === 'string') {
    return new Date(date).getTime();
  }
  if (typeof date === 'object') {
    return +date.getTime();
  }
  return date;
}

export const stringToBool = value => {
  if (value === 'true' || value === 'false') {
    return JSON.parse(value);
  }

  return value;
};
