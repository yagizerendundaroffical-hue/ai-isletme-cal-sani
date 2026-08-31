"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Sistem başlatılmaya hazır...");
  const [loading, setLoading] = useState(false);

  const startAI = () => {
    setLoading(true);
    setStatus("Bağlantı kuruluyor...");
    setTimeout(() => {
      setStatus("⚡ AI OPERASYONU: Yapay zekâ kalfası WhatsApp hattına başarıyla bağlandı! Randevular otomatik taranıyor...");
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: "#0B0F19", color: "#F3F4F6", minHeight: "100vh", fontFamily: "sans-serif", padding: "40px 20px" }}>
      
      {/* ANA PANEL KUTUSU */}
      <div style={{ maxWidth: "600px", margin: "0 auto 60px auto", backgroundColor: "#111827", padding: "30px", borderRadius: "16px", border: "1px solid #1F2937", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}>
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

      {/* LÜKS FİYATLANDIRMA ALANI */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Dükkanınız İçin En Uygun Dijital Çalışanı Seçin</h2>
        <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "40px" }}>Esnaf dostu bütçelerle, dükkandaki tüm dertleri sıfıra indirin.</p>

        {/* 3'LÜ PAKET KUTULARI GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
          
          {/* BRONZ - ÇIRAK PAKETİ */}
          <div style={{ backgroundColor: "#111827", padding: "30px", borderRadius: "16px", border: "1px solid #1F2937", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
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
            <button style={{ backgroundColor: "transparent", border: "2px solid #3B82F6", color: "#3B82F6", padding: "12px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", width: "100%", marginTop: "auto" }}>Seç ve Başla</button>
          </div>

          {/* GÜMÜŞ - KALFA PAKETİ (EN POPÜLER) */}
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
            <button style={{ backgroundColor: "#3B82F6", border: "none", color: "#FFF", padding: "12px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", width: "100%", marginTop: "auto" }}>Abone Ol</button>
          </div>

          {/* ALTIN - USTA PAKETİ */}
          <div style={{ backgroundColor: "#111827", padding: "30px", borderRadius: "16px", border: "1px solid #1F2937", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#F3F4F6", marginBottom: "5px" }}>Usta Paketi</h3>
              <p style={{ color: "#9CA3AF", fontSize: "12px", marginBottom: "20px" }}>Tüm dükkanı sırtlayan yapay zekâ</p>
              <div style={{ fontSize: "32px", fontWeight: "bold", color: "#3B82F6", marginBottom: "25px" }}>3.000 TL <span style={{ fontSize: "14px", color: "#9CA3AF" }}>/ ay</span></div>
              <ul style={{ textAlign: "left", paddingLeft: "0", listStyle: "none", fontSize: "14px", color: "#D1D5DB", lineHeight: "2.2", marginBottom: "30px" }}>
                <li>✅ Tüm Kalfa Paketi Özellikleri</li>
                <li>✅ Günlük/Haftalık Ciro Raporu</li>
                <li>✅ Kalfa/Çırak Prim Takip Sistemi</li>
                <li>✅ Akıllı Kampanya Mesajları Gönderimi</li>
              </ul>
            </div>
            <button style={{ backgroundColor: "transparent", border: "2px solid #3B82F6", color: "#3B82F6", padding: "12px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", width: "100%", marginTop: "auto" }}>VIP Satın Al</button>
          </div>

        </div>
      </div>

    </div>
  );
}
