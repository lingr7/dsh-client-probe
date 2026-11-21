window.__ModuleLoader__.load({
  id: 'dsh-client-probe',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    function Probe() {
      return h('div', {
        style: {
          position: 'fixed',
          right: '18px',
          bottom: '18px',
          zIndex: 60,
          padding: '6px 10px',
          borderRadius: '999px',
          background: 'rgba(255, 90, 90, 0.92)',
          color: '#fff',
          font: '12px/1.4 system-ui, sans-serif',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          pointerEvents: 'none',
        },
      }, 'client probe ok');
    }

    function apply(ctx) {
      try {
        ctx.slots.inject('shell.overlay', () => ctx.slots.register(
          { name: 'shell.overlay', id: 'client-probe', order: 41 },
          Probe,
        ));
      } catch (error) {
        // 探针：失败也要留下痕迹
        console.error('client-probe inject failed', error);
      }
    }

    return { name: 'dsh-client-probe', inject: ['slots'], apply };
  },
});
