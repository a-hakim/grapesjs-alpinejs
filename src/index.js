import loadComponents from './components';
import loadBlocks from './blocks';
import en from './locale/en';

export default (editor, opts = {}) => {
  const options = {
    i18n: {},
    alpineCdn: 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
    // Category names
    categoryLabel: 'Alpine.js',
    blockCategory: 'Alpine.js',
    traitLabels: {
      'x-data': 'Data',
      'x-show': 'Show',
      'x-if': 'If',
      'x-on:click': 'On Click',
      'x-on:submit': 'On Submit',
      'x-bind:class': 'Bind Class',
      'x-bind:disabled': 'Bind Disabled',
      'x-model': 'Model',
      'x-for': 'For',
      'x-text': 'Text',
      'x-html': 'innerHTML',
      'x-transition': 'Transition',
    },
    ...opts
  };

  // Add components
  loadComponents(editor, options);
  
  // Add blocks
  loadBlocks(editor, options);
  
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
    en,
    ...options.i18n,
  });

  // Inject Alpine.js into the canvas
  editor.on('load', () => {
    const canvas = editor.Canvas;
    const canvasDoc = canvas.getDocument();
    const canvasHead = canvasDoc?.head;

    if (canvasHead && options.alpineCdn) {
      // Check if Alpine.js script is already loaded
      const existingScript = canvasDoc.querySelector(`script[src="${options.alpineCdn}"]`);
      
      if (!existingScript) {
        const script = canvasDoc.createElement('script');
        script.src = options.alpineCdn;
        script.defer = true;
        canvasHead.appendChild(script);
      }
    }
  });

  // Add Alpine.js traits to all components
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;

  domc.addType('default', {
    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        traits: [
          ...defaultModel.prototype.defaults.traits,
        ],
      },

      init() {
        // Add Alpine.js traits dynamically
        this.addAlpineTraits();
        
        // Listen for attribute changes to validate Alpine.js directives
        this.on('change:attributes', this.validateAlpineAttributes);
      },

      validateAlpineAttributes() {
        const attrs = this.getAttributes();
        
        // Remove x-for if it's empty to prevent Alpine.js errors
        if (attrs['x-for'] !== undefined && (!attrs['x-for'] || attrs['x-for'].trim() === '')) {
          this.removeAttributes('x-for');
        }
        
        // Remove x-if if it's empty
        if (attrs['x-if'] !== undefined && (!attrs['x-if'] || attrs['x-if'].trim() === '')) {
          this.removeAttributes('x-if');
        }
        
        // Remove x-show if it's empty
        if (attrs['x-show'] !== undefined && (!attrs['x-show'] || attrs['x-show'].trim() === '')) {
          this.removeAttributes('x-show');
        }
        
        // Remove x-bind:* if it's empty
        if (attrs['x-bind:class'] !== undefined && (!attrs['x-bind:class'] || attrs['x-bind:class'].trim() === '')) {
          this.removeAttributes('x-bind:class');
        }
        
        if (attrs['x-bind:disabled'] !== undefined && (!attrs['x-bind:disabled'] || attrs['x-bind:disabled'].trim() === '')) {
          this.removeAttributes('x-bind:disabled');
        }
        
        // Remove x-model if it's empty
        if (attrs['x-model'] !== undefined && (!attrs['x-model'] || attrs['x-model'].trim() === '')) {
          this.removeAttributes('x-model');
        }
        
        // Remove x-text if it's empty
        if (attrs['x-text'] !== undefined && (!attrs['x-text'] || attrs['x-text'].trim() === '')) {
          this.removeAttributes('x-text');
        }
        
        // Remove x-on:* if it's empty
        if (attrs['x-on:click'] !== undefined && (!attrs['x-on:click'] || attrs['x-on:click'].trim() === '')) {
          this.removeAttributes('x-on:click');
        }
        
        if (attrs['x-on:submit'] !== undefined && (!attrs['x-on:submit'] || attrs['x-on:submit'].trim() === '')) {
          this.removeAttributes('x-on:submit');
        }
      },

      addAlpineTraits() {
        const alpineTraits = [
          {
            type: 'textarea',
            name: 'x-data',
            label: options.traitLabels['x-data'] || 'x-data',
            placeholder: '{ count: 0 }',
            category: options.categoryLabel,
          },
          {
            type: 'text',
            name: 'x-show',
            label: options.traitLabels['x-show'] || 'x-show',
            placeholder: 'isVisible',
            category: options.categoryLabel,
          },
          {
            type: 'text',
            name: 'x-if',
            label: options.traitLabels['x-if'] || 'x-if',
            placeholder: 'condition',
            category: options.categoryLabel,
          },
          {
            type: 'text',
            name: 'x-on:click',
            label: options.traitLabels['x-on:click'] || 'x-on:click',
            placeholder: 'count++',
            category: options.categoryLabel,
          },
          {
            type: 'text',
            name: 'x-on:submit',
            label: options.traitLabels['x-on:submit'] || 'x-on:submit',
            placeholder: 'handleSubmit',
            category: options.categoryLabel,
          },
          {
            type: 'text',
            name: 'x-bind:class',
            label: options.traitLabels['x-bind:class'] || 'x-bind:class',
            placeholder: "{ 'active': isActive }",
            category: options.categoryLabel,
          },
          {
            type: 'text',
            name: 'x-bind:disabled',
            label: options.traitLabels['x-bind:disabled'] || 'x-bind:disabled',
            placeholder: 'isDisabled (define in x-data first)',
            category: options.categoryLabel,
          },
          {
            type: 'text',
            name: 'x-model',
            label: options.traitLabels['x-model'] || 'x-model',
            placeholder: 'inputValue (define in x-data first)',
            category: options.categoryLabel,
          },
          {
            type: 'textarea',
            name: 'x-for',
            label: options.traitLabels['x-for'] || 'x-for',
            placeholder: 'item in items',
            category: options.categoryLabel,
            changeProp: 1,
          },
          {
            type: 'text',
            name: 'x-text',
            label: options.traitLabels['x-text'] || 'x-text',
            placeholder: 'message',
            category: options.categoryLabel,
          },
          {
            type: 'textarea',
            name: 'x-html',
            label: options.traitLabels['x-html'] || 'x-html',
            placeholder: 'htmlContent',
            category: options.categoryLabel,
          },
          {
            type: 'checkbox',
            name: 'x-transition',
            label: options.traitLabels['x-transition'] || 'x-transition',
            category: options.categoryLabel,
            valueTrue: '',  // Alpine.js expects empty string when present
            valueFalse: undefined,  // Remove attribute when unchecked
          },
        ];

        // Get current traits
        const currentTraits = this.get('traits') || [];
        
        // Add Alpine.js traits if they don't exist
        alpineTraits.forEach(trait => {
          const existingTrait = currentTraits.find(t => 
            (typeof t === 'string' ? t : t.name) === trait.name
          );
          
          if (!existingTrait) {
            this.addTrait(trait);
          }
        });
      },
    },
  });
};