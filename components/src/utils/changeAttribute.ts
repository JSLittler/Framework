const changeAttribute = (id: string, attribute: string, e: any) => {
    console.log('id: ', id);
    console.log('attribute: ', attribute);
    console.log('e: ', e);
    
    const el = document.getElementById(id);
    el?.setAttribute(attribute, e.detail);
};

export default changeAttribute;
