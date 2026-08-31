"use client";

import { useState } from "react";

interface ChatMessage {
  sender: "customer" | "ai";
  text: string;
}

export default function Home() {
  const [status, setStatus] = useState("Sistem başlatılmaya hazır...");
  const [loading, setLoading] = useState(false);
  
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { sender: "customer", text: "Selamünaleyküm usta, bugün saat 15:00 boş mu? Saç sakal geleceğim." }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const startAI = () => {
    setLoading(true);
    setStatus("Bağlantı kuruluyor...");
    setTimeout(() => {
      setStatus("⚡ AI OPERASYONU: Yapay zekâ kalfası WhatsApp hattına başarıyla bağlandı!");
      setLoading(false);
    }, 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const newHistory: ChatMessage[] = [...chatHistory, { sender: "customer", text: chatMessage }];
    setChatHistory(newHistory);
    const currentMsg = chatMessage;
    setChatMessage("");
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse = "Aleykümselam canım kardeşim, hoş geldin. Usta o saatte dolu ama dilersen 16:30'a seni yazayım mı?";
      if (currentMsg.toLowerCase().includes("fiyat") || currentMsg.toLowerCase().includes("kaç")) {
        aiResponse = "Saç sakal yıkama dahil VIP paketimiz 500 TL. Seni hangi saate yazalım?";
      }
      setChatHistory([...newHistory, { sender: "ai", text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: "#0B0F19", color: "#F3F4F6", minHeight: "100vh", fontFamily: "sans-serif", padding: "20px" }}>
      
      {/* 3'LÜ PAKET ALANI */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 40px auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Dükkanınız İçin En Uygun Dijital Çalışanı Seçin</h2>
        <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "30px" }}>Esnaf dostu bütçelerle, dükkandaki tüm dertleri sıfıra indirin.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          
          {/* ÇIRAK PAKETI */}
          <div style={{ backgroundColor: "#111827", padding: "25px", borderRadius: "16px", border: "1px solid #1F2937", textAlign: "left" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#F3F4F6", marginBottom: "5px" }}>Çırak Paketi</h3>
            <div style={{ fontSize: "28px", fontWeight: "bold", color: "#3B82F6", marginBottom: "15px" }}>750 TL <span style={{ fontSize: "14px", color: "#9CA3AF" }}>/ ay</span></div>
            <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "14px", color: "#D1D5DB", lineHeight: "2" }}>
              <li>✅ WhatsApp Randevu Kontrolü</li>
              <li>✅ Boş Saatleri Söyleme</li>
              <li>❌ Müşteri Fotoğraflarını Okuma</li>
              <li>❌ Gelir/Gider Hesap Tablosu</li>
            </ul>
          </div>

          {/* KALFA PAKETI */}
          <div style={{ backgroundColor: "#111827", padding: "25px", borderRadius: "16px", border: "2px solid #3B82F6", textAlign: "left", transform: "scale(1.02)" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#F3F4F6", marginBottom: "5px" }}>Kalfa Paketi</h3>
            <div style={{ fontSize: "28px", fontWeight: "bold", color: "#3B82F6", marginBottom: "15px" }}>1.500 TL <span style={{ fontSize: "14px", color: "#9CA3AF" }}>/ ay</span></div>
            <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "14px", color: "#D1D5DB", lineHeight: "2" }}>
              <li>✅ WhatsApp Randevu Kontrolü</li>
              <li>✅ Boş Saatleri Söyleme</li>
              <li>✅ Saç/Sakal Fotoğraf Analizi (Vision)</li>
              <li>❌ Gelir/Gider Hesap Tablosu</li>
            </ul>
          </div>

          {/* USTA PAKETI (KESIN RAKAMLI) */}
          <div style={{ backgroundColor: "#111827", padding: "25px", borderRadius: "16px", border: "1px solid #1F2937", textAlign: "left" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#F3F4F6", marginBottom: "5px" }}>Usta Paketi</h3>
            <div style={{ fontSize: "28px", fontWeight: "bold", color: "#3B82F6", marginBottom: "15px" }}>3.000 TL <span style={{ fontSize: "14px", color: "#9CA3AF" }}>/ ay</span></div>
            <ul style={{ paddingLeft: "0", listStyle: "none", fontSize: "14px", color: "#D1D5DB", lineHeight: "2" }}>
              <li>✅ Tüm Kalfa Özellikleri</li>
              <li>✅ Günlük/Haftalık Ciro Raporu</li>
              <li>✅ Prim Takip Sistemi</li>
              <li>✅ Akıllı Kampanya Mesajları</li>
            </ul>
          </div>

        </div>
      </div>

      {/* WHATSAPP SİMÜLATÖRÜ */}
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#111827", borderRadius: "16px", border: "1px solid #1F2937", overflow: "hidden" }}>
        <div style={{ backgroundColor: "#1F2937", padding: "15px", display: "flex", alignItems: "center" }}>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#10B981", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", marginRight: "12px" }}>✂️</div>
          <div><div style={{ fontWeight: "bold" }}>Yapay Zekâ Kalfası (Canlı Test)</div></div>
        </div>
        <div style={{ padding: "20px", height: "200px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#0E131F" }}>
          {chatHistory.map((msg, index) => (
            <div key={index} style={{ alignSelf: msg.sender === "customer" ? "flex-end" : "flex-start", backgroundColor: msg.sender === "customer" ? "#2563EB" : "#374151", padding: "10px", borderRadius: "12px", fontSize: "14px" }}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div style={{ alignSelf: "flex-start", backgroundColor: "#374151", color: "#9CA3AF", padding: "10px", borderRadius: "12px", fontSize: "14px" }}>
              Kalfa yazıyor...
            </div>
          )}
        </div>
        <form onSubmit={handleSendMessage} style={{ display: "flex", padding: "15px", backgroundColor: "#1F2937" }}>
          <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} placeholder="Müşteri gibi yazın..." style={{ flexGrow: 1, backgroundColor: "#111827", border: "1px solid #374151", color: "#FFF", padding: "10px", borderRadius: "8px", marginRight: "10px" }} />
          <button type="submit" style={{ backgroundColor: "#10B981", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: "bold" }}>Gönder</button>
        </form>
      </div>

    </div>
  );
}
