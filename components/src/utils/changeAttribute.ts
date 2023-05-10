const changeAttribute = (id: string, attribute: string, e: any) => {
    const el = document.getElementById(id);
    el?.setAttribute(attribute, e.detail);
};

export default changeAttribute;
