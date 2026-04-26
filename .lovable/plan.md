# 🎯 Estratégia de SEO

**Palavra-chave principal:** `Conserto de microondas em Curitiba`
**Variações semânticas (LSI):** conserto de micro-ondas, assistência técnica de microondas, oficina de microondas em Curitiba, manutenção de microondas, Portão Curitiba.

**Princípios aplicados:**
- ✅ Apenas **1 H1 por página** (regra de ouro do SEO)
- ✅ H2s descritivos com a palavra-chave e variações (sem repetir literal)
- ✅ H3s suportando os H2s com termos de cauda longa
- ✅ Densidade natural da palavra-chave (sem keyword stuffing)
- ✅ Meta title até 60 caracteres / Meta description até 155
- ✅ Schema.org `LocalBusiness` para aparecer no Google Maps/Local Pack

---

## 📐 Hierarquia de Headings proposta

### H1 – Hero (único na página)
> **Conserto de Microondas em Curitiba com qualidade e transparência desde 2000**

*Subtítulo (parágrafo, não heading):*
> Mais de 20 anos consertando micro-ondas de todas as marcas no bairro Portão. Peças originais, técnicos experientes e orçamento somente na loja física.

---

### H2 – Authority (Seção de confiança)
> Assistência técnica de microondas em Curitiba há mais de 20 anos

### H2 – About (História)
> Quem somos: a AJJ, referência em conserto de microondas no Portão

### H2 – Rules (Como trabalhamos)
> Como funciona o nosso atendimento de conserto de microondas
*(H3s mantidos: títulos das 5 regras)*

### H2 – Problems
> Problemas comuns que consertamos no seu microondas em Curitiba

### H2 – Services
> Serviços de conserto e manutenção de microondas

**H3s:**
- Manutenção e revisão de forno de microondas
- Conserto de porta, trava e dobradiça de microondas
- Troca de peças originais para microondas

### H2 – HowItWorks
> Como funciona o conserto do seu microondas passo a passo
*(H3s — mantém os 4 passos)*

### H2 – Differentials
> Por que escolher a AJJ para o conserto do seu microondas

### H2 – Reviews
> Avaliações de clientes que consertaram o microondas conosco

### H2 – Urgency
> Avaliação sem compromisso na nossa loja em Curitiba

### H2 – Location
> Onde estamos: oficina de conserto de microondas no Portão, Curitiba

### H2 – Contact
> Entre em contato com a AJJ Conserto de Microondas

### H2 – CTA Final
> Traga seu microondas para avaliação em Curitiba — sem compromisso

---

## 📝 Meta tags otimizadas (`index.html`)

**Title (58 caracteres):**
`Conserto de Microondas em Curitiba | AJJ Portão — Desde 2000`

**Meta description (152 caracteres):**
`Conserto de microondas em Curitiba há mais de 20 anos. Assistência técnica especializada no Portão (Rua Carlos Blanck, 315). Peças originais e orçamento sem compromisso na loja.`

**Meta keywords (apoio):**
`conserto de microondas em curitiba, assistência técnica microondas curitiba, conserto microondas portão, manutenção microondas curitiba`

**Canonical:** `<link rel="canonical" href="https://conserta-agora-curitiba.lovable.app/" />`

**Open Graph / Twitter:** atualizar `og:title` e `og:description` com os mesmos textos.

**Idioma + região:**
- `<html lang="pt-BR">` (já existe)
- `<meta name="geo.region" content="BR-PR">`
- `<meta name="geo.placename" content="Curitiba">`

---

## 🏷️ Schema.org JSON-LD (Local Business)

Adicionar ao `<head>` do `index.html`:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AJJ Conserto de Microondas",
  "telephone": "+5541999801413",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Carlos Blanck, 315 — Conjunto Phoenix",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "areaServed": "Curitiba",
  "priceRange": "$$",
  "foundingDate": "2000"
}
```

---

## 🖼️ Otimização de `alt` em imagens

| Componente | alt proposto |
|---|---|
| Hero | "Técnico da AJJ consertando microondas em Curitiba" (manter) |
| About | "Bancada de conserto de microondas da AJJ em Curitiba" |
| Problems | "Microondas com defeito em manutenção na assistência técnica de Curitiba" |
| Services srv1-3 | manter (títulos já descritivos) |
| Location | "Loja AJJ Conserto de Microondas no Portão, Curitiba" |

---

## 📋 Arquivos que serão alterados

1. `index.html` — title, description, OG, canonical, geo tags, JSON-LD
2. `src/components/Hero.tsx` — H1 único otimizado
3. `src/components/Authority.tsx` — H2
4. `src/components/About.tsx` — H2
5. `src/components/Rules.tsx` — H2
6. `src/components/Problems.tsx` — H2
7. `src/components/Services.tsx` — H2 + H3s
8. `src/components/HowItWorks.tsx` — H2
9. `src/components/Differentials.tsx` — H2
10. `src/components/Reviews.tsx` — H2
11. `src/components/Urgency.tsx` — H2
12. `src/components/Location.tsx` — H2 + alt da imagem
13. `src/components/Contact.tsx` — H2
14. `src/components/CtaFinal.tsx` — H2

---

## ✅ Resultado esperado

Ao aprovar, a página passa a ter sinais on-page fortíssimos para **"conserto de microondas em Curitiba"**: H1 único com a frase exata, H2/H3 com variações semânticas, meta tags otimizadas, schema LocalBusiness e alts contextualizados. Combinado com o cadastro do **Google Meu Negócio** (recomendação extra fora do site), a página tende a aparecer no Local Pack de Curitiba.