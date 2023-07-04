const cdn = "http://localhost:4000/";

const config = {
  background: 'olderBackground',
  stylesheet: 'slm',
  components: [
    { name: "header", props: [{ key: "id", value: "wc-header" }, { key: "value", value: "Log in" }] },
    {
      name: "main",
      props: [
        { key: "id", value: "wc-main" },
        { key: "value", value: 
          [
            {
              name: "login-form",
              props: [{ key: "id", value: "login-Form" }, { key: "value", value: "Log in" }]
            },
          ]
        }
      ]
    },
    { name: "footer", props: [{ key: "id", value: "wc-footer" }, { key: "value", value: "Log in" }] },
  ],
};

const setBackground = () => {
  document.body.style.backgroundImage = `url('${cdn}assets/background-images/${config.background}.png')`;
};

const mountScript = (name) => {
  const script = document.createElement("script");
  script.type = "module";
  script.src = `${cdn}${name}.js`;

  return document.head.appendChild(script);
};

const setStyles = () => {
  const head = document.head;
  const link = document.createElement("link");

  link.type = 'text/css';
  link.id = 'global-styles';
  link.rel = 'stylesheet';
  link.href = `${cdn}assets/stylesheets/${config.stylesheet}-styles.css`;

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

config.components.forEach( async component => {
  const { name, props = {} } = component;

  setStyles();
  setBackground();
  mountScript(name);
  mountComponent(name, props);
});
