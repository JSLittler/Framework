const cdn = "http://localhost:4000/";

const config = {
  background: 'olderBackground',
  components: [
    { name: "header", props: [{ key: "id", value: "wc-header" }, { key: "value", value: "Hello World" }] },
    { name: "main", props: [{ key: "id", value: "wc-main" }] },
    { name: "footer", props: [{ key: "id", value: "wc-footer" }] },
  ]
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

const mountComponent = (name, props) => {
  const appPage = document.getElementById('app-page');
  const element = document.createElement(`wc-${name}`);

  if(props) {
    props.forEach(({key, value}) => element[key] = value);
  }

  return appPage.appendChild(element);
};

config.components.forEach((component) => {
  const { name, props = {} } = component;

  setBackground();
  mountScript(name);
  mountComponent(name, props);
});
