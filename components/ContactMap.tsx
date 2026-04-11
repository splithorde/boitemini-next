export default function ContactMap() {
  const address = "25bis Rue Georges Bizet, 92000 Nanterre, France";
  return (
    <div className="w-full h-80 rounded-xl overflow-hidden shadow-md mt-8">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(address)}`}
        // Alternative non-API key embed for display
        srcDoc={`<style>html,body{margin:0;height:100%}</style><iframe width="100%" height="100%" frameborder="0" src="https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>`}
      ></iframe>
    </div>
  );
}