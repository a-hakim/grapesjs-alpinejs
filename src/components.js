export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  // Alpine Accordion Component
  domc.addType('alpine-accordion', {
    model: {
      defaults: {
        name: 'Accordion',
        tagName: 'div',
        attributes: {
          'x-data': '{ open: false }',
        },
        components: [
          {
            tagName: 'button',
            type: 'text',
            attributes: {
              'x-on:click': 'open = !open',
              type: 'button',
            },
            components: 'Click to toggle',
            style: {
              padding: '10px 20px',
              'background-color': '#4299e1',
              color: 'white',
              border: 'none',
              'border-radius': '4px',
              cursor: 'pointer',
              width: '100%',
              'text-align': 'left',
              'font-size': '16px',
              'font-weight': 'bold',
            },
          },
          {
            tagName: 'div',
            attributes: {
              'x-show': 'open',
              'x-transition': '',
            },
            components: [
              {
                tagName: 'div',
                type: 'text',
                components: 'This is the accordion content. You can put anything here!',
                style: {
                  padding: '20px',
                  'background-color': '#f7fafc',
                  border: '1px solid #e2e8f0',
                  'border-top': 'none',
                  'border-radius': '0 0 4px 4px',
                },
              },
            ],
          },
        ],
        style: {
          margin: '10px',
          'max-width': '600px',
        },
      },
    },
  });

  // Alpine Tabs Component
  domc.addType('alpine-tabs', {
    model: {
      defaults: {
        name: 'Tabs',
        tagName: 'div',
        attributes: {
          'x-data': "{ tab: 'tab1' }",
        },
        components: [
          {
            tagName: 'div',
            attributes: {
              class: 'tab-navigation',
            },
            components: [
              {
                tagName: 'button',
                type: 'text',
                attributes: {
                  'x-on:click': "tab = 'tab1'",
                  'x-bind:class': "{ 'active': tab === 'tab1' }",
                  type: 'button',
                },
                components: 'Tab 1',
                style: {
                  padding: '10px 20px',
                  'background-color': '#e2e8f0',
                  border: '1px solid #cbd5e0',
                  cursor: 'pointer',
                  'margin-right': '5px',
                },
              },
              {
                tagName: 'button',
                type: 'text',
                attributes: {
                  'x-on:click': "tab = 'tab2'",
                  'x-bind:class': "{ 'active': tab === 'tab2' }",
                  type: 'button',
                },
                components: 'Tab 2',
                style: {
                  padding: '10px 20px',
                  'background-color': '#e2e8f0',
                  border: '1px solid #cbd5e0',
                  cursor: 'pointer',
                  'margin-right': '5px',
                },
              },
              {
                tagName: 'button',
                type: 'text',
                attributes: {
                  'x-on:click': "tab = 'tab3'",
                  'x-bind:class': "{ 'active': tab === 'tab3' }",
                  type: 'button',
                },
                components: 'Tab 3',
                style: {
                  padding: '10px 20px',
                  'background-color': '#e2e8f0',
                  border: '1px solid #cbd5e0',
                  cursor: 'pointer',
                },
              },
            ],
            style: {
              'margin-bottom': '10px',
            },
          },
          {
            tagName: 'div',
            attributes: {
              'x-show': "tab === 'tab1'",
            },
            components: [
              {
                tagName: 'div',
                type: 'text',
                components: 'Content for Tab 1',
                style: {
                  padding: '20px',
                  'background-color': '#f7fafc',
                  border: '1px solid #e2e8f0',
                },
              },
            ],
          },
          {
            tagName: 'div',
            attributes: {
              'x-show': "tab === 'tab2'",
            },
            components: [
              {
                tagName: 'div',
                type: 'text',
                components: 'Content for Tab 2',
                style: {
                  padding: '20px',
                  'background-color': '#f7fafc',
                  border: '1px solid #e2e8f0',
                },
              },
            ],
          },
          {
            tagName: 'div',
            attributes: {
              'x-show': "tab === 'tab3'",
            },
            components: [
              {
                tagName: 'div',
                type: 'text',
                components: 'Content for Tab 3',
                style: {
                  padding: '20px',
                  'background-color': '#f7fafc',
                  border: '1px solid #e2e8f0',
                },
              },
            ],
          },
        ],
        style: {
          margin: '10px',
          'max-width': '600px',
        },
        // Add style for active tab button
        stylable: [
          '.active { background-color: #4299e1 !important; color: white; }',
        ],
      },
    },
  });

  // Alpine Modal Component
  domc.addType('alpine-modal', {
    model: {
      defaults: {
        name: 'Modal',
        tagName: 'div',
        attributes: {
          'x-data': '{ showModal: false }',
        },
        components: [
          {
            tagName: 'button',
            type: 'text',
            attributes: {
              'x-on:click': 'showModal = true',
              type: 'button',
            },
            components: 'Open Modal',
            style: {
              padding: '10px 20px',
              'background-color': '#4299e1',
              color: 'white',
              border: 'none',
              'border-radius': '4px',
              cursor: 'pointer',
              'font-size': '16px',
              'font-weight': 'bold',
            },
          },
          {
            tagName: 'div',
            attributes: {
              'x-show': 'showModal',
              'x-transition': '',
              class: 'modal-overlay',
            },
            components: [
              {
                tagName: 'div',
                attributes: {
                  'x-on:click': 'showModal = false',
                  class: 'modal-backdrop',
                },
                style: {
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  'background-color': 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  'align-items': 'center',
                  'justify-content': 'center',
                  'z-index': '1000',
                },
              },
              {
                tagName: 'div',
                attributes: {
                  'x-on:click.stop': '',
                  class: 'modal-content',
                },
                components: [
                  {
                    tagName: 'div',
                    components: [
                      {
                        tagName: 'h2',
                        type: 'text',
                        components: 'Modal Title',
                        style: {
                          'margin-top': '0',
                        },
                      },
                      {
                        tagName: 'p',
                        type: 'text',
                        components: 'This is the modal content. You can put any content here.',
                      },
                      {
                        tagName: 'button',
                        type: 'text',
                        attributes: {
                          'x-on:click': 'showModal = false',
                          type: 'button',
                        },
                        components: 'Close',
                        style: {
                          padding: '8px 16px',
                          'background-color': '#e53e3e',
                          color: 'white',
                          border: 'none',
                          'border-radius': '4px',
                          cursor: 'pointer',
                          'margin-top': '10px',
                        },
                      },
                    ],
                  },
                ],
                style: {
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  'background-color': 'white',
                  padding: '30px',
                  'border-radius': '8px',
                  'box-shadow': '0 10px 25px rgba(0, 0, 0, 0.3)',
                  'z-index': '1001',
                  'max-width': '500px',
                  width: '90%',
                },
              },
            ],
          },
        ],
        style: {
          margin: '10px',
        },
      },
    },
  });

  // Alpine Counter Component (Simple example)
  domc.addType('alpine-counter', {
    model: {
      defaults: {
        name: 'Counter',
        tagName: 'div',
        attributes: {
          'x-data': '{ count: 0 }',
        },
        components: [
          {
            tagName: 'div',
            components: [
              {
                tagName: 'button',
                type: 'text',
                attributes: {
                  'x-on:click': 'count--',
                  type: 'button',
                },
                components: '-',
                style: {
                  padding: '10px 20px',
                  'background-color': '#e53e3e',
                  color: 'white',
                  border: 'none',
                  'border-radius': '4px 0 0 4px',
                  cursor: 'pointer',
                  'font-size': '20px',
                  'font-weight': 'bold',
                },
              },
              {
                tagName: 'span',
                attributes: {
                  'x-text': 'count',
                },
                components: '0',
                style: {
                  padding: '10px 30px',
                  'background-color': '#f7fafc',
                  border: '1px solid #e2e8f0',
                  display: 'inline-block',
                  'font-size': '24px',
                  'font-weight': 'bold',
                  'min-width': '80px',
                  'text-align': 'center',
                },
              },
              {
                tagName: 'button',
                type: 'text',
                attributes: {
                  'x-on:click': 'count++',
                  type: 'button',
                },
                components: '+',
                style: {
                  padding: '10px 20px',
                  'background-color': '#48bb78',
                  color: 'white',
                  border: 'none',
                  'border-radius': '0 4px 4px 0',
                  cursor: 'pointer',
                  'font-size': '20px',
                  'font-weight': 'bold',
                },
              },
            ],
            style: {
              display: 'flex',
              'align-items': 'center',
              'justify-content': 'center',
            },
          },
        ],
        style: {
          margin: '10px',
          padding: '20px',
          'text-align': 'center',
        },
      },
    },
  });
};
