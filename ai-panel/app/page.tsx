"use client";

import { useState } from "react";

interface ChatMessage {
  sender: "customer" | "ai";
  text: string;
}

export default function Home() {
  const [status, setStatus] = useState("Sistem başlatılmaya hazır...");
  const [loading, setLoading] = useState(false);
  
  // Simülatör Durumları
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { sender: "customer", text: "Selamünaleyküm usta, bugün saat 15:00 boş mu? Saç sakal geleceğim." }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const startAI = () => {
    setLoading(true);
    setStatus("Bağlantı kuruluyor...");
    setTimeout(() => {
      setStatus("⚡ AI OPERASYONU: Yapay zekâ kalfası WhatsApp hattına başarıyla bağlandı! Randevular otomatik taranıyor...");
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
      let aiResponse = "Aleykümselam canım kardeşim, hoş geldin. Usta o saatte dolu ama dilersen 16:30'a seni yazayım mı, ne dersin?";
      
      if (currentMsg.toLowerCase().includes("fiyat") || currentMsg.toLowerCase().includes("kaç")) {
        aiResponse = "Tabi abi, saç sakal yıkama dahil VIP paketimiz 500 TL. Seni hangi saate yazalım?";
      } else if (currentMsg.toLowerCase().includes("iptal")) {
        aiResponse = "Anlaşıldı abi, randevunu iptal ettim. Başka bir gün bekleriz, cansın.";
      }

      setChatHistory([...newHistory, { sender: "ai", text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: "#0B0F19", color: "#F3F4F6", minHeight: "100vh", fontFamily: "sans-serif", padding: "40px 20px" }}>
      
      {/* ANA PANEL KUTUSU */}
      <div style={{ maxWidth: "600px", margin: "0 auto 40px auto", backgroundColor: "#111827", padding: "30px", borderRadius: "16px", border: "1px solid #1F2937", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px", color: "#F3F4F6" }}>Ara Makas AI 🤖</h1>
        <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "25px" }}>Lüks Salonlar İçin Akıllı Yapay Zekâ Yönetim Paneli</p>
        
        <button 
          onClick={startAI}
          disabled={loading}
          style={{ backgroundColor: loading ? "#1F2937" : "#2563EB", color: "#FFF", border: "none", padding: "14px 28px", fontSize: "16px", fontWeight: "600", borderRadius: "8px", cursor: loading ? "not-allowed" : "pointer", transition: "all 0.3s", width: "100%", boxShadow: "0 4px 12px rgba(37,99,235,0.2)" }}
        >
          {loading ? "Yapay Zekâ Uyanıyor..." : "AI Kalfayı Başlat"}
        </button>

        <p style={{ marginTop: "20px", fontSize: "14px", color: status.includes("⚡") ? "#10B981" : "#9CA3AF", fontWeight: status.includes("⚡") ? "600" : "400", backgroundColor: "#1F2937", padding: "12px", borderRadius: "8px" }}>
          {status}
        </p>
      </div>

      {/* WHATSAPP SİMÜLATÖRÜ */}
      <div style={{ maxWidth: "600px", margin: "0 auto 60px auto", backgroundColor: "#111827", borderRadius: "16px", border: "1px solid #1F2937", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.4)" }}>
        <div style={{ backgroundColor: "#1F2937", padding: "15px", display: "flex", alignItems: "center", borderBottom: "1px solid #374151" }}>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#10B981", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "18px", marginRight: "12px" }}>✂️</div>
          <div>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>Yapay Zekâ Kalfası (Canlı Test)</div>
            <div style={{ fontSize: "12px", color: "#10B981" }}>Müşteriye anında cevap veriyor...</div>
          </div>
        </div>

        <div style={{ padding: "20px", height: "250px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#0E131F" }}>
          {chatHistory.map((msg, index) => (
            <div key={index} style={{ alignSelf: msg.sender === "customer" ? "flex-end" : "flex-start", backgroundColor: msg.sender === "customer" ? "#2563EB" : "#374151", color: "#FFF", padding: "10px 14px", borderRadius: "12px", maxWidth: "80%", fontSize: "14px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div style={{ alignSelf: "flex-start", backgroundColor: "#374151", color: "#9CA3AF", padding: "10px 14px", borderRadius: "12px", fontSize: "14px" }}>
              Kalfa yazıyor...
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} style={{ display: "flex", padding: "15px", backgroundColor: "#1F2937", borderTop: "1px solid #374151" }}>
          <input 
            type="text" 
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Müşteri gibi bir şey yazın... (Örn: Saat kaç boş?)" 
            style={{ flexGrow: 1, backgroundColor: "#111827", border: "1px solid #374151", color: "#FFF", padding: "10px 15px", borderRadius: "8px", marginRight: "10px", outline: "none" }}
          />
          <button type="submit" style={{ backgroundColor: "#10B981", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>Gönder</button>
        </form>
      </div>

      {/* LÜKS FİYATLANDIRMA ALANI */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Dükkanınız İçin En Uygun Dijital Çalışanı Seçin</h2>
        <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "40px" }}>Esnaf dostu bütçelerle, dükkandaki tüm dertleri sıfıra indirin.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
          {/* ÇIRAK PAKETİ */}
          <div style={{ backgroundColor: "#111827", padding: "30px", borderRadius: "16px", border: "1px solid #1F2937", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#F3F4F6", marginBottom: "5px" }}>Çırak Paketi</h3>
              <p style={{ color: "#9CA3AF", fontSize: "12px", marginBottom: "20px" }}>Sadece temel randevu işleri için</p>
              <div style={{ fontSize: "32px", fontWeight: "bold", color: "#3B82F6", marginBottom: "25px" }}>750 TL <span style={{ fontSize: "14px", color: "#9CA3AF" }}>/ ay</span></div>
              <ul style={{ textAlign: "left", paddingLeft: "0", listStyle: "none", fontSize: "14px", color: "#D1D5DB", lineHeight: "2.2", marginBottom: "30px" }}>
                <li>✅ WhatsApp Randevu Kontrolü</li>
                <li>✅ Boş Saatleri Müşteriye Söyleme</li>
                <li>❌ Müşteri Fotoğraflarını Okuma</li>
                <li>❌ Gelir/Gider Hesap Tablosu</li>
              </ul>
            </div>
            <button style={{ backgroundColor: "transparent", border: "2px solid #3B82F6", color: "#3B82F6", padding: "12px", borderRadius: "8px", fontWeight: "600", width: "100%", marginTop: "auto" }}>Seç ve Başla</button>
          </div>

          {/* KALFA PAKETİ */}
          <div style={{ backgroundColor: "#111827", padding: "30px", borderRadius: "16px", border: "2px solid #3B82F6", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", transform: "scale(1.02)", boxShadow: "0 10px 20px rgba(59,130,246,0.1)" }}>
            <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", backgroundColor: "#3B82F6", color: "#FFF", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase" }}>EN POPÜLER</div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#F3F4F6", marginBottom: "5px" }}>Kalfa Paketi</h3>
              <p style={{ color: "#9CA3AF", fontSize: "12px", marginBottom: "20px" }}>Müşteri kaybını sıfıra indiren asistan</p>
              <div style={{ fontSize: "32px", fontWeight: "bold", color: "#3B82F6", marginBottom: "25px" }}>1.500 TL <span style={{ fontSize: "14px", color: "#9CA3AF" }}>/ ay</span></div>
              <ul style={{ textAlign: "left", paddingLeft: "0", listStyle: "none", fontSize: "14px", color: "#D1D5DB", lineHeight: "2.2", marginBottom: "30px" }}>
                <li>✅ WhatsApp Randevu Kontrolü</li>
                <li>✅ Boş Saatleri Müşteriye Söyleme</li>
                <li>✅ Saç/Sakal Fotoğraf Analizi (Vision)</li>
                <li>❌ Gelir/Gider Hesap Tablosu</li>
              </ul>
            </div>
            <button style={{ backgroundColor: "#3B82F6", border: "none", color: "#FFF", padding: "12px", borderRadius: "8px", fontWeight: "600", width: "100%", marginTop: "auto" }}>Abone Ol</button>
          </div>

          {/* USTA PAKETİ */}
          <div style={{ backgroundColor: "#111827", padding: "30px", borderRadius: "16px", border: "1px solid #1F2937", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#F3F4F6", marginBottom: "5px" }}>Usta Paketi</h3>
              <p style={{ color: "#9CA3AF", fontSize: "12px", marginBottom: "20px" }}>Tüm dükkanı sırtlayan yapay zekâ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
