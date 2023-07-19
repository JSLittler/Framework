const gameEngineAPI = "http://localhost:4002/";
const cdn = "http://localhost:4000/";

const setLocalStorage = state => {
  localStorage.setItem('framework', JSON.stringify(state));
};

const getLocalStorage = () => {
  const state = localStorage.getItem('framework');

  return state ? JSON.parse(state) : '';
};

const setCredentials = (username, password) => {
  const state = getLocalStorage();

  const updatedState = {
    ...state,
    credentials: {
      username,
      password
    }
  };
  
  setLocalStorage(updatedState);
};

const getCredentials = () => getLocalStorage()?.userDetails || '';

const getPageState = async (endpoint = 'slm', headers = {}) => {
  const { username, id } = getCredentials();

  if (username && id) {
    headers.username = username;
    headers.id = id;
  }

  const { state, config } = await fetch(`${gameEngineAPI}${endpoint}`, {
    method: 'GET',
    headers: {
      ...headers,
    },
  }).then(function(response) {

    return response.json();
  });

  return {
    state,
    config
  };
};

const setBackground = (background) => {
  document.body.style.backgroundImage = `url('${cdn}assets/background-images/${background}.png')`;
};

const mountScript = (name) => {
  const script = document.createElement("script");
  script.type = "module";
  script.src = `${cdn}${name}.js`;

  return document.head.appendChild(script);
};

const setStyles = (stylesheet) => {
  const head = document.head;
  const link = document.createElement("link");

  link.type = 'text/css';
  link.id = 'global-styles';
  link.rel = 'stylesheet';
  link.href = `${cdn}assets/stylesheets/${stylesheet}-styles.css`;

  head.appendChild(link);
}

const mountComponent = (name, props) => {
  const appPage = document.getElementById('app-page');
  const element = document.createElement(`wc-${name}`);

  if(props) {
    props.forEach(({key, value}) => element[key] = value);
  }

  return appPage.appendChild(element);
};

const sendUpdate = async update => {
  const { componentIds, attribute, stateAddress, setValue } = update;
  const state = await getLocalStorage();
  let value;

  if (setValue) {
    value =  setValue
  } else {
    value = state?.userDetails ? stateAddress.split('.').reduce((o,i)=> o[i], state) : null;
  }

  componentIds.forEach(async id => {
    const element = document.getElementById(id);

    if (!element || !value) return;

    if (element[attribute] = value) return;

    element[attribute] = value;
  });
};

const setUpPage = async (detail) => {
  const body = document.createElement('body');
  body.id = 'app-page';
  body.classList.add('app-page');
  document.body = body;

  const { state, config } = await getPageState(detail?.endpoint, detail?.headers);
  setLocalStorage(state);

  const { stylesheet, background, components, updates } = config;

  setStyles(stylesheet);
  setBackground(background);

  await components.forEach(async component => {
    const { name, props = {} } = component;

    mountScript(name);
    mountComponent(name, props);
  });

  await updates.forEach(async u => {
    await sendUpdate(u)
  });
};

setLocalStorage({});
setUpPage();

document.addEventListener('updatePage', (e) => {
  const { detail } = e;
  
  return setUpPage(detail);
});
