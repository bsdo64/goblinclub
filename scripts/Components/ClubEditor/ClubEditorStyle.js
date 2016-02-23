class EditorStyle {
  constructor() {
    this.widget = {
      container: {
        listStyle: 'none',
        margin: 0,
        padding: 15,
        maxWidth: 1024,
        width: '100%',
        minWidth: 560,
        display: 'inline-block'
      },
      listObj: {
        backgroundColor: '#fff',
        borderRadius: 1,
        boxShadow: '1px 1px #b0c2c0',
        padding: 15
      }
    };
  }
}

export default new EditorStyle();
