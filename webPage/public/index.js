const cdn = "http://localhost:4000/";

const config = [
  { name: "header", props: [{ key: "id", value: "wc-header" }, { key: "value", value: "Hello World" }] },
  { name: "footer", props: [{ key: "id", value: "wc-footer" }] },
];
const props = { name: 'example name' };

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

config.forEach((component) => {
  const { name, props } = component;

  mountScript(name);
  mountComponent(name, props);
});
