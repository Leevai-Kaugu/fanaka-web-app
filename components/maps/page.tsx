// components/GoogleMap.js
'use client';

export default function Maps() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <iframe
        src="https://maps.app.goo.gl/fsXktXUxrrKQWyK29"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
