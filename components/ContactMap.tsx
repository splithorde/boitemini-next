export default function ContactMap() {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=fr&q=25bis%20Rue%20Georges%20Bizet%20Nanterre&t=&z=14&ie=UTF8&iwloc=B&output=embed"
      ></iframe>
    </div>
  );
}