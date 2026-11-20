import React from "react";

// React escapa el texto; no se interpreta HTML proporcionado por el modelo.
function inline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  );
}

export default function AIResponse({ text }) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (/^(-{3,}|\*{3,})$/.test(line)) { blocks.push(<hr key={i} />); i++; continue; }
    const heading = line.match(/^#{1,6}\s+(.+)$/);
    if (heading) { blocks.push(<h3 key={i}>{inline(heading[1])}</h3>); i++; continue; }
    const numbered = /^\d+[.)]\s+/.test(line);
    if (numbered || /^[-*+]\s+/.test(line)) {
      const start = i; const items = [];
      const pattern = numbered ? /^\d+[.)]\s+/ : /^[-*+]\s+/;
      while (i < lines.length && pattern.test(lines[i].trim())) {
        items.push(<li key={i}>{inline(lines[i].trim().replace(pattern, ""))}</li>); i++;
      }
      blocks.push(numbered ? <ol key={start}>{items}</ol> : <ul key={start}>{items}</ul>);
      continue;
    }
    const start = i; const paragraph = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s+|[-*+]\s+|\d+[.)]\s+|---+$)/.test(lines[i].trim())) {
      paragraph.push(lines[i].trim()); i++;
    }
    blocks.push(<p key={start}>{inline(paragraph.join(" "))}</p>);
  }
  return <div className="ai-formatted">{blocks}</div>;
}
