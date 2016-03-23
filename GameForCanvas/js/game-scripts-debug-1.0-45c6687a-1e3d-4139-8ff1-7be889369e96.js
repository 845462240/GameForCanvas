/**
 * 用户自定义脚本.
 */
(function(window, Object, undefined) {

// 检测环境
var _ensureModule = function(clazz) {
    var arr = clazz.split('.');
    var curr = window;
    for (var i = 0; i < arr.length; i++) {
        if (!curr[arr[i]]) curr[arr[i]] = {};
        curr = curr[arr[i]];
    }
};


_ensureModule('com.qici.richText');
/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * Unicode 的字符分段
 */

var UnicodeBlock = com.qici.richText.UnicodeBlock = {};

/**
 * 返回字符所在的段
 */
UnicodeBlock.of = function(c) {
	var value = c.charCodeAt(0);

	var blockStarts = UnicodeBlock.blockStarts,
		bottom = 0, 
		top = blockStarts.length,
		curr = top / 2;

	while (top - bottom > 1) {
		if (value >= blockStarts[curr]) {
			bottom = curr;
		}
		else {
			top = curr;
		}
		curr = ((bottom + top) / 2) | 0;
	}
	return UnicodeBlock.blocks[curr];
};

/**
 * 是否是中日韩字符
 */
UnicodeBlock.isCJK = function(c) {
	var block = UnicodeBlock.of(c);
	return block >= UnicodeBlock.CJK_START && block <= UnicodeBlock.CJK_END;
};

/*
    Unicode block 
 */ 
var blockIdx = 1;
UnicodeBlock.AEGEAN_NUMBERS = blockIdx++;
UnicodeBlock.ALCHEMICAL_SYMBOLS = blockIdx++;
UnicodeBlock.ALPHABETIC_PRESENTATION_FORMS = blockIdx++;
UnicodeBlock.ANCIENT_GREEK_MUSICAL_NOTATION = blockIdx++;
UnicodeBlock.ANCIENT_GREEK_NUMBERS = blockIdx++;
UnicodeBlock.ANCIENT_SYMBOLS = blockIdx++;
UnicodeBlock.ARABIC = blockIdx++;
UnicodeBlock.ARABIC_EXTENDED_A = blockIdx++;
UnicodeBlock.ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS = blockIdx++;
UnicodeBlock.ARABIC_PRESENTATION_FORMS_A = blockIdx++;
UnicodeBlock.ARABIC_PRESENTATION_FORMS_B = blockIdx++;
UnicodeBlock.ARABIC_SUPPLEMENT = blockIdx++;
UnicodeBlock.ARMENIAN = blockIdx++;
UnicodeBlock.ARROWS = blockIdx++;
UnicodeBlock.AVESTAN = blockIdx++;
UnicodeBlock.BALINESE = blockIdx++;
UnicodeBlock.BAMUM = blockIdx++;
UnicodeBlock.BAMUM_SUPPLEMENT = blockIdx++;
UnicodeBlock.BASIC_LATIN = blockIdx++;
UnicodeBlock.BATAK = blockIdx++;
UnicodeBlock.BENGALI = blockIdx++;
UnicodeBlock.BLOCK_ELEMENTS = blockIdx++;
UnicodeBlock.BOPOMOFO = blockIdx++;
UnicodeBlock.BOPOMOFO_EXTENDED = blockIdx++;
UnicodeBlock.BOX_DRAWING = blockIdx++;
UnicodeBlock.BRAHMI = blockIdx++;
UnicodeBlock.BRAILLE_PATTERNS = blockIdx++;
UnicodeBlock.BUGINESE = blockIdx++;
UnicodeBlock.BUHID = blockIdx++;
UnicodeBlock.BYZANTINE_MUSICAL_SYMBOLS = blockIdx++;
UnicodeBlock.CARIAN = blockIdx++;
UnicodeBlock.CHAKMA = blockIdx++;
UnicodeBlock.CHAM = blockIdx++;
UnicodeBlock.CHEROKEE = blockIdx++;
UnicodeBlock.CJK_COMPATIBILITY = blockIdx++;

UnicodeBlock.CJK_START = UnicodeBlock.CJK_COMPATIBILITY;

UnicodeBlock.CJK_COMPATIBILITY_FORMS = blockIdx++;
UnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS = blockIdx++;
UnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT = blockIdx++;
UnicodeBlock.CJK_RADICALS_SUPPLEMENT = blockIdx++;
UnicodeBlock.CJK_STROKES = blockIdx++;
UnicodeBlock.CJK_SYMBOLS_AND_PUNCTUATION = blockIdx++;
UnicodeBlock.HALFWIDTH_AND_FULLWIDTH_FORMS = blockIdx++;
UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS = blockIdx++;
UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A = blockIdx++;
UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B = blockIdx++;
UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C = blockIdx++;
UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D = blockIdx++;

UnicodeBlock.CJK_END = UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D;

UnicodeBlock.COMBINING_DIACRITICAL_MARKS = blockIdx++;
UnicodeBlock.COMBINING_DIACRITICAL_MARKS_SUPPLEMENT = blockIdx++;
UnicodeBlock.COMBINING_HALF_MARKS = blockIdx++;
UnicodeBlock.COMBINING_MARKS_FOR_SYMBOLS = blockIdx++;
UnicodeBlock.COMMON_INDIC_NUMBER_FORMS = blockIdx++;
UnicodeBlock.CONTROL_PICTURES = blockIdx++;
UnicodeBlock.COPTIC = blockIdx++;
UnicodeBlock.COUNTING_ROD_NUMERALS = blockIdx++;
UnicodeBlock.CUNEIFORM = blockIdx++;
UnicodeBlock.CUNEIFORM_NUMBERS_AND_PUNCTUATION = blockIdx++;
UnicodeBlock.CURRENCY_SYMBOLS = blockIdx++;
UnicodeBlock.CYPRIOT_SYLLABARY = blockIdx++;
UnicodeBlock.CYRILLIC = blockIdx++;
UnicodeBlock.CYRILLIC_EXTENDED_A = blockIdx++;
UnicodeBlock.CYRILLIC_EXTENDED_B = blockIdx++;
UnicodeBlock.CYRILLIC_SUPPLEMENTARY = blockIdx++;
UnicodeBlock.DESERET = blockIdx++;
UnicodeBlock.DEVANAGARI = blockIdx++;
UnicodeBlock.DEVANAGARI_EXTENDED = blockIdx++;
UnicodeBlock.DINGBATS = blockIdx++;
UnicodeBlock.DOMINO_TILES = blockIdx++;
UnicodeBlock.EGYPTIAN_HIEROGLYPHS = blockIdx++;
UnicodeBlock.EMOTICONS = blockIdx++;
UnicodeBlock.ENCLOSED_ALPHANUMERIC_SUPPLEMENT = blockIdx++;
UnicodeBlock.ENCLOSED_ALPHANUMERICS = blockIdx++;
UnicodeBlock.ENCLOSED_CJK_LETTERS_AND_MONTHS = blockIdx++;
UnicodeBlock.ENCLOSED_IDEOGRAPHIC_SUPPLEMENT = blockIdx++;
UnicodeBlock.ETHIOPIC = blockIdx++;
UnicodeBlock.ETHIOPIC_EXTENDED = blockIdx++;
UnicodeBlock.ETHIOPIC_EXTENDED_A = blockIdx++;
UnicodeBlock.ETHIOPIC_SUPPLEMENT = blockIdx++;
UnicodeBlock.GENERAL_PUNCTUATION = blockIdx++;
UnicodeBlock.GEOMETRIC_SHAPES = blockIdx++;
UnicodeBlock.GEORGIAN = blockIdx++;
UnicodeBlock.GEORGIAN_SUPPLEMENT = blockIdx++;
UnicodeBlock.GLAGOLITIC = blockIdx++;
UnicodeBlock.GOTHIC = blockIdx++;
UnicodeBlock.GREEK = blockIdx++;
UnicodeBlock.GREEK_EXTENDED = blockIdx++;
UnicodeBlock.GUJARATI = blockIdx++;
UnicodeBlock.GURMUKHI = blockIdx++;
UnicodeBlock.HANGUL_COMPATIBILITY_JAMO = blockIdx++;
UnicodeBlock.HANGUL_JAMO = blockIdx++;
UnicodeBlock.HANGUL_JAMO_EXTENDED_A = blockIdx++;
UnicodeBlock.HANGUL_JAMO_EXTENDED_B = blockIdx++;
UnicodeBlock.HANGUL_SYLLABLES = blockIdx++;
UnicodeBlock.HANUNOO = blockIdx++;
UnicodeBlock.HEBREW = blockIdx++;
UnicodeBlock.HIGH_PRIVATE_USE_SURROGATES = blockIdx++;
UnicodeBlock.HIGH_SURROGATES = blockIdx++;
UnicodeBlock.HIRAGANA = blockIdx++;
UnicodeBlock.IDEOGRAPHIC_DESCRIPTION_CHARACTERS = blockIdx++;
UnicodeBlock.IMPERIAL_ARAMAIC = blockIdx++;
UnicodeBlock.INSCRIPTIONAL_PAHLAVI = blockIdx++;
UnicodeBlock.INSCRIPTIONAL_PARTHIAN = blockIdx++;
UnicodeBlock.IPA_EXTENSIONS = blockIdx++;
UnicodeBlock.JAVANESE = blockIdx++;
UnicodeBlock.KAITHI = blockIdx++;
UnicodeBlock.KANA_SUPPLEMENT = blockIdx++;
UnicodeBlock.KANBUN = blockIdx++;
UnicodeBlock.KANGXI_RADICALS = blockIdx++;
UnicodeBlock.KANNADA = blockIdx++;
UnicodeBlock.KATAKANA = blockIdx++;
UnicodeBlock.KATAKANA_PHONETIC_EXTENSIONS = blockIdx++;
UnicodeBlock.KAYAH_LI = blockIdx++;
UnicodeBlock.KHAROSHTHI = blockIdx++;
UnicodeBlock.KHMER = blockIdx++;
UnicodeBlock.KHMER_SYMBOLS = blockIdx++;
UnicodeBlock.LAO = blockIdx++;
UnicodeBlock.LATIN_1_SUPPLEMENT = blockIdx++;
UnicodeBlock.LATIN_EXTENDED_A = blockIdx++;
UnicodeBlock.LATIN_EXTENDED_ADDITIONAL = blockIdx++;
UnicodeBlock.LATIN_EXTENDED_B = blockIdx++;
UnicodeBlock.LATIN_EXTENDED_C = blockIdx++;
UnicodeBlock.LATIN_EXTENDED_D = blockIdx++;
UnicodeBlock.LEPCHA = blockIdx++;
UnicodeBlock.LETTERLIKE_SYMBOLS = blockIdx++;
UnicodeBlock.LIMBU = blockIdx++;
UnicodeBlock.LINEAR_B_IDEOGRAMS = blockIdx++;
UnicodeBlock.LINEAR_B_SYLLABARY = blockIdx++;
UnicodeBlock.LISU = blockIdx++;
UnicodeBlock.LOW_SURROGATES = blockIdx++;
UnicodeBlock.LYCIAN = blockIdx++;
UnicodeBlock.LYDIAN = blockIdx++;
UnicodeBlock.MAHJONG_TILES = blockIdx++;
UnicodeBlock.MALAYALAM = blockIdx++;
UnicodeBlock.MANDAIC = blockIdx++;
UnicodeBlock.MATHEMATICAL_ALPHANUMERIC_SYMBOLS = blockIdx++;
UnicodeBlock.MATHEMATICAL_OPERATORS = blockIdx++;
UnicodeBlock.MEETEI_MAYEK = blockIdx++;
UnicodeBlock.MEETEI_MAYEK_EXTENSIONS = blockIdx++;
UnicodeBlock.MEROITIC_CURSIVE = blockIdx++;
UnicodeBlock.MEROITIC_HIEROGLYPHS = blockIdx++;
UnicodeBlock.MIAO = blockIdx++;
UnicodeBlock.MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A = blockIdx++;
UnicodeBlock.MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B = blockIdx++;
UnicodeBlock.MISCELLANEOUS_SYMBOLS = blockIdx++;
UnicodeBlock.MISCELLANEOUS_SYMBOLS_AND_ARROWS = blockIdx++;
UnicodeBlock.MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS = blockIdx++;
UnicodeBlock.MISCELLANEOUS_TECHNICAL = blockIdx++;
UnicodeBlock.MODIFIER_TONE_LETTERS = blockIdx++;
UnicodeBlock.MONGOLIAN = blockIdx++;
UnicodeBlock.MUSICAL_SYMBOLS = blockIdx++;
UnicodeBlock.MYANMAR = blockIdx++;
UnicodeBlock.MYANMAR_EXTENDED_A = blockIdx++;
UnicodeBlock.NEW_TAI_LUE = blockIdx++;
UnicodeBlock.NKO = blockIdx++;
UnicodeBlock.NUMBER_FORMS = blockIdx++;
UnicodeBlock.OGHAM = blockIdx++;
UnicodeBlock.OL_CHIKI = blockIdx++;
UnicodeBlock.OLD_ITALIC = blockIdx++;
UnicodeBlock.OLD_PERSIAN = blockIdx++;
UnicodeBlock.OLD_SOUTH_ARABIAN = blockIdx++;
UnicodeBlock.OLD_TURKIC = blockIdx++;
UnicodeBlock.OPTICAL_CHARACTER_RECOGNITION = blockIdx++;
UnicodeBlock.ORIYA = blockIdx++;
UnicodeBlock.OSMANYA = blockIdx++;
UnicodeBlock.PHAGS_PA = blockIdx++;
UnicodeBlock.PHAISTOS_DISC = blockIdx++;
UnicodeBlock.PHOENICIAN = blockIdx++;
UnicodeBlock.PHONETIC_EXTENSIONS = blockIdx++;
UnicodeBlock.PHONETIC_EXTENSIONS_SUPPLEMENT = blockIdx++;
UnicodeBlock.PLAYING_CARDS = blockIdx++;
UnicodeBlock.PRIVATE_USE_AREA = blockIdx++;
UnicodeBlock.REJANG = blockIdx++;
UnicodeBlock.RUMI_NUMERAL_SYMBOLS = blockIdx++;
UnicodeBlock.RUNIC = blockIdx++;
UnicodeBlock.SAMARITAN = blockIdx++;
UnicodeBlock.SAURASHTRA = blockIdx++;
UnicodeBlock.SHARADA = blockIdx++;
UnicodeBlock.SHAVIAN = blockIdx++;
UnicodeBlock.SINHALA = blockIdx++;
UnicodeBlock.SMALL_FORM_VARIANTS = blockIdx++;
UnicodeBlock.SORA_SOMPENG = blockIdx++;
UnicodeBlock.SPACING_MODIFIER_LETTERS = blockIdx++;
UnicodeBlock.SPECIALS = blockIdx++;
UnicodeBlock.SUNDANESE = blockIdx++;
UnicodeBlock.SUNDANESE_SUPPLEMENT = blockIdx++;
UnicodeBlock.SUPERSCRIPTS_AND_SUBSCRIPTS = blockIdx++;
UnicodeBlock.SUPPLEMENTAL_ARROWS_A = blockIdx++;
UnicodeBlock.SUPPLEMENTAL_ARROWS_B = blockIdx++;
UnicodeBlock.SUPPLEMENTAL_MATHEMATICAL_OPERATORS = blockIdx++;
UnicodeBlock.SUPPLEMENTAL_PUNCTUATION = blockIdx++;
UnicodeBlock.SUPPLEMENTARY_PRIVATE_USE_AREA_A = blockIdx++;
UnicodeBlock.SUPPLEMENTARY_PRIVATE_USE_AREA_B = blockIdx++;
UnicodeBlock.SURROGATES_AREA = blockIdx++;
UnicodeBlock.SYLOTI_NAGRI = blockIdx++;
UnicodeBlock.SYRIAC = blockIdx++;
UnicodeBlock.TAGALOG = blockIdx++;
UnicodeBlock.TAGBANWA = blockIdx++;
UnicodeBlock.TAGS = blockIdx++;
UnicodeBlock.TAI_LE = blockIdx++;
UnicodeBlock.TAI_THAM = blockIdx++;
UnicodeBlock.TAI_VIET = blockIdx++;
UnicodeBlock.TAI_XUAN_JING_SYMBOLS = blockIdx++;
UnicodeBlock.TAKRI = blockIdx++;
UnicodeBlock.TAMIL = blockIdx++;
UnicodeBlock.TELUGU = blockIdx++;
UnicodeBlock.THAANA = blockIdx++;
UnicodeBlock.THAI = blockIdx++;
UnicodeBlock.TIBETAN = blockIdx++;
UnicodeBlock.TIFINAGH = blockIdx++;
UnicodeBlock.TRANSPORT_AND_MAP_SYMBOLS = blockIdx++;
UnicodeBlock.UGARITIC = blockIdx++;
UnicodeBlock.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS = blockIdx++;
UnicodeBlock.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED = blockIdx++;
UnicodeBlock.VAI = blockIdx++;
UnicodeBlock.VARIATION_SELECTORS = blockIdx++;
UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT = blockIdx++;
UnicodeBlock.VEDIC_EXTENSIONS = blockIdx++;
UnicodeBlock.VERTICAL_FORMS = blockIdx++;
UnicodeBlock.YI_RADICALS = blockIdx++;
UnicodeBlock.YI_SYLLABLES = blockIdx++;
UnicodeBlock.YIJING_HEXAGRAM_SYMBOLS = blockIdx++;

UnicodeBlock.blockStarts= [
    0x0000,   // 0000..007F; Basic Latin
    0x0080,   // 0080..00FF; Latin-1 Supplement
    0x0100,   // 0100..017F; Latin Extended-A
    0x0180,   // 0180..024F; Latin Extended-B
    0x0250,   // 0250..02AF; IPA Extensions
    0x02B0,   // 02B0..02FF; Spacing Modifier Letters
    0x0300,   // 0300..036F; Combining Diacritical Marks
    0x0370,   // 0370..03FF; Greek and Coptic
    0x0400,   // 0400..04FF; Cyrillic
    0x0500,   // 0500..052F; Cyrillic Supplement
    0x0530,   // 0530..058F; Armenian
    0x0590,   // 0590..05FF; Hebrew
    0x0600,   // 0600..06FF; Arabic
    0x0700,   // 0700..074F; Syriac
    0x0750,   // 0750..077F; Arabic Supplement
    0x0780,   // 0780..07BF; Thaana
    0x07C0,   // 07C0..07FF; NKo
    0x0800,   // 0800..083F; Samaritan
    0x0840,   // 0840..085F; Mandaic
    0x0860,   //             unassigned
    0x08A0,   // 08A0..08FF; Arabic Extended-A
    0x0900,   // 0900..097F; Devanagari
    0x0980,   // 0980..09FF; Bengali
    0x0A00,   // 0A00..0A7F; Gurmukhi
    0x0A80,   // 0A80..0AFF; Gujarati
    0x0B00,   // 0B00..0B7F; Oriya
    0x0B80,   // 0B80..0BFF; Tamil
    0x0C00,   // 0C00..0C7F; Telugu
    0x0C80,   // 0C80..0CFF; Kannada
    0x0D00,   // 0D00..0D7F; Malayalam
    0x0D80,   // 0D80..0DFF; Sinhala
    0x0E00,   // 0E00..0E7F; Thai
    0x0E80,   // 0E80..0EFF; Lao
    0x0F00,   // 0F00..0FFF; Tibetan
    0x1000,   // 1000..109F; Myanmar
    0x10A0,   // 10A0..10FF; Georgian
    0x1100,   // 1100..11FF; Hangul Jamo
    0x1200,   // 1200..137F; Ethiopic
    0x1380,   // 1380..139F; Ethiopic Supplement
    0x13A0,   // 13A0..13FF; Cherokee
    0x1400,   // 1400..167F; Unified Canadian Aboriginal Syllabics
    0x1680,   // 1680..169F; Ogham
    0x16A0,   // 16A0..16FF; Runic
    0x1700,   // 1700..171F; Tagalog
    0x1720,   // 1720..173F; Hanunoo
    0x1740,   // 1740..175F; Buhid
    0x1760,   // 1760..177F; Tagbanwa
    0x1780,   // 1780..17FF; Khmer
    0x1800,   // 1800..18AF; Mongolian
    0x18B0,   // 18B0..18FF; Unified Canadian Aboriginal Syllabics Extended
    0x1900,   // 1900..194F; Limbu
    0x1950,   // 1950..197F; Tai Le
    0x1980,   // 1980..19DF; New Tai Lue
    0x19E0,   // 19E0..19FF; Khmer Symbols
    0x1A00,   // 1A00..1A1F; Buginese
    0x1A20,   // 1A20..1AAF; Tai Tham
    0x1AB0,   //             unassigned
    0x1B00,   // 1B00..1B7F; Balinese
    0x1B80,   // 1B80..1BBF; Sundanese
    0x1BC0,   // 1BC0..1BFF; Batak
    0x1C00,   // 1C00..1C4F; Lepcha
    0x1C50,   // 1C50..1C7F; Ol Chiki
    0x1C80,   //             unassigned
    0x1CC0,   // 1CC0..1CCF; Sundanese Supplement
    0x1CD0,   // 1CD0..1CFF; Vedic Extensions
    0x1D00,   // 1D00..1D7F; Phonetic Extensions
    0x1D80,   // 1D80..1DBF; Phonetic Extensions Supplement
    0x1DC0,   // 1DC0..1DFF; Combining Diacritical Marks Supplement
    0x1E00,   // 1E00..1EFF; Latin Extended Additional
    0x1F00,   // 1F00..1FFF; Greek Extended
    0x2000,   // 2000..206F; General Punctuation
    0x2070,   // 2070..209F; Superscripts and Subscripts
    0x20A0,   // 20A0..20CF; Currency Symbols
    0x20D0,   // 20D0..20FF; Combining Diacritical Marks for Symbols
    0x2100,   // 2100..214F; Letterlike Symbols
    0x2150,   // 2150..218F; Number Forms
    0x2190,   // 2190..21FF; Arrows
    0x2200,   // 2200..22FF; Mathematical Operators
    0x2300,   // 2300..23FF; Miscellaneous Technical
    0x2400,   // 2400..243F; Control Pictures
    0x2440,   // 2440..245F; Optical Character Recognition
    0x2460,   // 2460..24FF; Enclosed Alphanumerics
    0x2500,   // 2500..257F; Box Drawing
    0x2580,   // 2580..259F; Block Elements
    0x25A0,   // 25A0..25FF; Geometric Shapes
    0x2600,   // 2600..26FF; Miscellaneous Symbols
    0x2700,   // 2700..27BF; Dingbats
    0x27C0,   // 27C0..27EF; Miscellaneous Mathematical Symbols-A
    0x27F0,   // 27F0..27FF; Supplemental Arrows-A
    0x2800,   // 2800..28FF; Braille Patterns
    0x2900,   // 2900..297F; Supplemental Arrows-B
    0x2980,   // 2980..29FF; Miscellaneous Mathematical Symbols-B
    0x2A00,   // 2A00..2AFF; Supplemental Mathematical Operators
    0x2B00,   // 2B00..2BFF; Miscellaneous Symbols and Arrows
    0x2C00,   // 2C00..2C5F; Glagolitic
    0x2C60,   // 2C60..2C7F; Latin Extended-C
    0x2C80,   // 2C80..2CFF; Coptic
    0x2D00,   // 2D00..2D2F; Georgian Supplement
    0x2D30,   // 2D30..2D7F; Tifinagh
    0x2D80,   // 2D80..2DDF; Ethiopic Extended
    0x2DE0,   // 2DE0..2DFF; Cyrillic Extended-A
    0x2E00,   // 2E00..2E7F; Supplemental Punctuation
    0x2E80,   // 2E80..2EFF; CJK Radicals Supplement
    0x2F00,   // 2F00..2FDF; Kangxi Radicals
    0x2FE0,   //             unassigned
    0x2FF0,   // 2FF0..2FFF; Ideographic Description Characters
    0x3000,   // 3000..303F; CJK Symbols and Punctuation
    0x3040,   // 3040..309F; Hiragana
    0x30A0,   // 30A0..30FF; Katakana
    0x3100,   // 3100..312F; Bopomofo
    0x3130,   // 3130..318F; Hangul Compatibility Jamo
    0x3190,   // 3190..319F; Kanbun
    0x31A0,   // 31A0..31BF; Bopomofo Extended
    0x31C0,   // 31C0..31EF; CJK Strokes
    0x31F0,   // 31F0..31FF; Katakana Phonetic Extensions
    0x3200,   // 3200..32FF; Enclosed CJK Letters and Months
    0x3300,   // 3300..33FF; CJK Compatibility
    0x3400,   // 3400..4DBF; CJK Unified Ideographs Extension A
    0x4DC0,   // 4DC0..4DFF; Yijing Hexagram Symbols
    0x4E00,   // 4E00..9FFF; CJK Unified Ideographs
    0xA000,   // A000..A48F; Yi Syllables
    0xA490,   // A490..A4CF; Yi Radicals
    0xA4D0,   // A4D0..A4FF; Lisu
    0xA500,   // A500..A63F; Vai
    0xA640,   // A640..A69F; Cyrillic Extended-B
    0xA6A0,   // A6A0..A6FF; Bamum
    0xA700,   // A700..A71F; Modifier Tone Letters
    0xA720,   // A720..A7FF; Latin Extended-D
    0xA800,   // A800..A82F; Syloti Nagri
    0xA830,   // A830..A83F; Common Indic Number Forms
    0xA840,   // A840..A87F; Phags-pa
    0xA880,   // A880..A8DF; Saurashtra
    0xA8E0,   // A8E0..A8FF; Devanagari Extended
    0xA900,   // A900..A92F; Kayah Li
    0xA930,   // A930..A95F; Rejang
    0xA960,   // A960..A97F; Hangul Jamo Extended-A
    0xA980,   // A980..A9DF; Javanese
    0xA9E0,   //             unassigned
    0xAA00,   // AA00..AA5F; Cham
    0xAA60,   // AA60..AA7F; Myanmar Extended-A
    0xAA80,   // AA80..AADF; Tai Viet
    0xAAE0,   // AAE0..AAFF; Meetei Mayek Extensions
    0xAB00,   // AB00..AB2F; Ethiopic Extended-A
    0xAB30,   //             unassigned
    0xABC0,   // ABC0..ABFF; Meetei Mayek
    0xAC00,   // AC00..D7AF; Hangul Syllables
    0xD7B0,   // D7B0..D7FF; Hangul Jamo Extended-B
    0xD800,   // D800..DB7F; High Surrogates
    0xDB80,   // DB80..DBFF; High Private Use Surrogates
    0xDC00,   // DC00..DFFF; Low Surrogates
    0xE000,   // E000..F8FF; Private Use Area
    0xF900,   // F900..FAFF; CJK Compatibility Ideographs
    0xFB00,   // FB00..FB4F; Alphabetic Presentation Forms
    0xFB50,   // FB50..FDFF; Arabic Presentation Forms-A
    0xFE00,   // FE00..FE0F; Variation Selectors
    0xFE10,   // FE10..FE1F; Vertical Forms
    0xFE20,   // FE20..FE2F; Combining Half Marks
    0xFE30,   // FE30..FE4F; CJK Compatibility Forms
    0xFE50,   // FE50..FE6F; Small Form Variants
    0xFE70,   // FE70..FEFF; Arabic Presentation Forms-B
    0xFF00,   // FF00..FFEF; Halfwidth and Fullwidth Forms
    0xFFF0,   // FFF0..FFFF; Specials
    0x10000,  // 10000..1007F; Linear B Syllabary
    0x10080,  // 10080..100FF; Linear B Ideograms
    0x10100,  // 10100..1013F; Aegean Numbers
    0x10140,  // 10140..1018F; Ancient Greek Numbers
    0x10190,  // 10190..101CF; Ancient Symbols
    0x101D0,  // 101D0..101FF; Phaistos Disc
    0x10200,  //               unassigned
    0x10280,  // 10280..1029F; Lycian
    0x102A0,  // 102A0..102DF; Carian
    0x102E0,  //               unassigned
    0x10300,  // 10300..1032F; Old Italic
    0x10330,  // 10330..1034F; Gothic
    0x10350,  //               unassigned
    0x10380,  // 10380..1039F; Ugaritic
    0x103A0,  // 103A0..103DF; Old Persian
    0x103E0,  //               unassigned
    0x10400,  // 10400..1044F; Deseret
    0x10450,  // 10450..1047F; Shavian
    0x10480,  // 10480..104AF; Osmanya
    0x104B0,  //               unassigned
    0x10800,  // 10800..1083F; Cypriot Syllabary
    0x10840,  // 10840..1085F; Imperial Aramaic
    0x10860,  //               unassigned
    0x10900,  // 10900..1091F; Phoenician
    0x10920,  // 10920..1093F; Lydian
    0x10940,  //               unassigned
    0x10980,  // 10980..1099F; Meroitic Hieroglyphs
    0x109A0,  // 109A0..109FF; Meroitic Cursive
    0x10A00,  // 10A00..10A5F; Kharoshthi
    0x10A60,  // 10A60..10A7F; Old South Arabian
    0x10A80,  //               unassigned
    0x10B00,  // 10B00..10B3F; Avestan
    0x10B40,  // 10B40..10B5F; Inscriptional Parthian
    0x10B60,  // 10B60..10B7F; Inscriptional Pahlavi
    0x10B80,  //               unassigned
    0x10C00,  // 10C00..10C4F; Old Turkic
    0x10C50,  //               unassigned
    0x10E60,  // 10E60..10E7F; Rumi Numeral Symbols
    0x10E80,  //               unassigned
    0x11000,  // 11000..1107F; Brahmi
    0x11080,  // 11080..110CF; Kaithi
    0x110D0,  // 110D0..110FF; Sora Sompeng
    0x11100,  // 11100..1114F; Chakma
    0x11150,  //               unassigned
    0x11180,  // 11180..111DF; Sharada
    0x111E0,  //               unassigned
    0x11680,  // 11680..116CF; Takri
    0x116D0,  //               unassigned
    0x12000,  // 12000..123FF; Cuneiform
    0x12400,  // 12400..1247F; Cuneiform Numbers and Punctuation
    0x12480,  //               unassigned
    0x13000,  // 13000..1342F; Egyptian Hieroglyphs
    0x13430,  //               unassigned
    0x16800,  // 16800..16A3F; Bamum Supplement
    0x16A40,  //               unassigned
    0x16F00,  // 16F00..16F9F; Miao
    0x16FA0,  //               unassigned
    0x1B000,  // 1B000..1B0FF; Kana Supplement
    0x1B100,  //               unassigned
    0x1D000,  // 1D000..1D0FF; Byzantine Musical Symbols
    0x1D100,  // 1D100..1D1FF; Musical Symbols
    0x1D200,  // 1D200..1D24F; Ancient Greek Musical Notation
    0x1D250,  //               unassigned
    0x1D300,  // 1D300..1D35F; Tai Xuan Jing Symbols
    0x1D360,  // 1D360..1D37F; Counting Rod Numerals
    0x1D380,  //               unassigned
    0x1D400,  // 1D400..1D7FF; Mathematical Alphanumeric Symbols
    0x1D800,  //               unassigned
    0x1EE00,  // 1EE00..1EEFF; Arabic Mathematical Alphabetic Symbols
    0x1EF00,  //               unassigned
    0x1F000,  // 1F000..1F02F; Mahjong Tiles
    0x1F030,  // 1F030..1F09F; Domino Tiles
    0x1F0A0,  // 1F0A0..1F0FF; Playing Cards
    0x1F100,  // 1F100..1F1FF; Enclosed Alphanumeric Supplement
    0x1F200,  // 1F200..1F2FF; Enclosed Ideographic Supplement
    0x1F300,  // 1F300..1F5FF; Miscellaneous Symbols And Pictographs
    0x1F600,  // 1F600..1F64F; Emoticons
    0x1F650,  //               unassigned
    0x1F680,  // 1F680..1F6FF; Transport And Map Symbols
    0x1F700,  // 1F700..1F77F; Alchemical Symbols
    0x1F780,  //               unassigned
    0x20000,  // 20000..2A6DF; CJK Unified Ideographs Extension B
    0x2A6E0,  //               unassigned
    0x2A700,  // 2A700..2B73F; CJK Unified Ideographs Extension C
    0x2B740,  // 2B740..2B81F; CJK Unified Ideographs Extension D
    0x2B820,  //               unassigned
    0x2F800,  // 2F800..2FA1F; CJK Compatibility Ideographs Supplement
    0x2FA20,  //               unassigned
    0xE0000,  // E0000..E007F; Tags
    0xE0080,  //               unassigned
    0xE0100,  // E0100..E01EF; Variation Selectors Supplement
    0xE01F0,  //               unassigned
    0xF0000,  // F0000..FFFFF; Supplementary Private Use Area-A
    0x100000  // 100000..10FFFF; Supplementary Private Use Area-B
];

UnicodeBlock.blocks = [
    UnicodeBlock.BASIC_LATIN,
    UnicodeBlock.LATIN_1_SUPPLEMENT,
    UnicodeBlock.LATIN_EXTENDED_A,
    UnicodeBlock.LATIN_EXTENDED_B,
    UnicodeBlock.IPA_EXTENSIONS,
    UnicodeBlock.SPACING_MODIFIER_LETTERS,
    UnicodeBlock.COMBINING_DIACRITICAL_MARKS,
    UnicodeBlock.GREEK,
    UnicodeBlock.CYRILLIC,
    UnicodeBlock.CYRILLIC_SUPPLEMENTARY,
    UnicodeBlock.ARMENIAN,
    UnicodeBlock.HEBREW,
    UnicodeBlock.ARABIC,
    UnicodeBlock.SYRIAC,
    UnicodeBlock.ARABIC_SUPPLEMENT,
    UnicodeBlock.THAANA,
    UnicodeBlock.NKO,
    UnicodeBlock.SAMARITAN,
    UnicodeBlock.MANDAIC,
    0,
    UnicodeBlock.ARABIC_EXTENDED_A,
    UnicodeBlock.DEVANAGARI,
    UnicodeBlock.BENGALI,
    UnicodeBlock.GURMUKHI,
    UnicodeBlock.GUJARATI,
    UnicodeBlock.ORIYA,
    UnicodeBlock.TAMIL,
    UnicodeBlock.TELUGU,
    UnicodeBlock.KANNADA,
    UnicodeBlock.MALAYALAM,
    UnicodeBlock.SINHALA,
    UnicodeBlock.THAI,
    UnicodeBlock.LAO,
    UnicodeBlock.TIBETAN,
    UnicodeBlock.MYANMAR,
    UnicodeBlock.GEORGIAN,
    UnicodeBlock.HANGUL_JAMO,
    UnicodeBlock.ETHIOPIC,
    UnicodeBlock.ETHIOPIC_SUPPLEMENT,
    UnicodeBlock.CHEROKEE,
    UnicodeBlock.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS,
    UnicodeBlock.OGHAM,
    UnicodeBlock.RUNIC,
    UnicodeBlock.TAGALOG,
    UnicodeBlock.HANUNOO,
    UnicodeBlock.BUHID,
    UnicodeBlock.TAGBANWA,
    UnicodeBlock.KHMER,
    UnicodeBlock.MONGOLIAN,
    UnicodeBlock.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED,
    UnicodeBlock.LIMBU,
    UnicodeBlock.TAI_LE,
    UnicodeBlock.NEW_TAI_LUE,
    UnicodeBlock.KHMER_SYMBOLS,
    UnicodeBlock.BUGINESE,
    UnicodeBlock.TAI_THAM,
    0,
    UnicodeBlock.BALINESE,
    UnicodeBlock.SUNDANESE,
    UnicodeBlock.BATAK,
    UnicodeBlock.LEPCHA,
    UnicodeBlock.OL_CHIKI,
    0,
    UnicodeBlock.SUNDANESE_SUPPLEMENT,
    UnicodeBlock.VEDIC_EXTENSIONS,
    UnicodeBlock.PHONETIC_EXTENSIONS,
    UnicodeBlock.PHONETIC_EXTENSIONS_SUPPLEMENT,
    UnicodeBlock.COMBINING_DIACRITICAL_MARKS_SUPPLEMENT,
    UnicodeBlock.LATIN_EXTENDED_ADDITIONAL,
    UnicodeBlock.GREEK_EXTENDED,
    UnicodeBlock.GENERAL_PUNCTUATION,
    UnicodeBlock.SUPERSCRIPTS_AND_SUBSCRIPTS,
    UnicodeBlock.CURRENCY_SYMBOLS,
    UnicodeBlock.COMBINING_MARKS_FOR_SYMBOLS,
    UnicodeBlock.LETTERLIKE_SYMBOLS,
    UnicodeBlock.NUMBER_FORMS,
    UnicodeBlock.ARROWS,
    UnicodeBlock.MATHEMATICAL_OPERATORS,
    UnicodeBlock.MISCELLANEOUS_TECHNICAL,
    UnicodeBlock.CONTROL_PICTURES,
    UnicodeBlock.OPTICAL_CHARACTER_RECOGNITION,
    UnicodeBlock.ENCLOSED_ALPHANUMERICS,
    UnicodeBlock.BOX_DRAWING,
    UnicodeBlock.BLOCK_ELEMENTS,
    UnicodeBlock.GEOMETRIC_SHAPES,
    UnicodeBlock.MISCELLANEOUS_SYMBOLS,
    UnicodeBlock.DINGBATS,
    UnicodeBlock.MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A,
    UnicodeBlock.SUPPLEMENTAL_ARROWS_A,
    UnicodeBlock.BRAILLE_PATTERNS,
    UnicodeBlock.SUPPLEMENTAL_ARROWS_B,
    UnicodeBlock.MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B,
    UnicodeBlock.SUPPLEMENTAL_MATHEMATICAL_OPERATORS,
    UnicodeBlock.MISCELLANEOUS_SYMBOLS_AND_ARROWS,
    UnicodeBlock.GLAGOLITIC,
    UnicodeBlock.LATIN_EXTENDED_C,
    UnicodeBlock.COPTIC,
    UnicodeBlock.GEORGIAN_SUPPLEMENT,
    UnicodeBlock.TIFINAGH,
    UnicodeBlock.ETHIOPIC_EXTENDED,
    UnicodeBlock.CYRILLIC_EXTENDED_A,
    UnicodeBlock.SUPPLEMENTAL_PUNCTUATION,
    UnicodeBlock.CJK_RADICALS_SUPPLEMENT,
    UnicodeBlock.KANGXI_RADICALS,
    0,
    UnicodeBlock.IDEOGRAPHIC_DESCRIPTION_CHARACTERS,
    UnicodeBlock.CJK_SYMBOLS_AND_PUNCTUATION,
    UnicodeBlock.HIRAGANA,
    UnicodeBlock.KATAKANA,
    UnicodeBlock.BOPOMOFO,
    UnicodeBlock.HANGUL_COMPATIBILITY_JAMO,
    UnicodeBlock.KANBUN,
    UnicodeBlock.BOPOMOFO_EXTENDED,
    UnicodeBlock.CJK_STROKES,
    UnicodeBlock.KATAKANA_PHONETIC_EXTENSIONS,
    UnicodeBlock.ENCLOSED_CJK_LETTERS_AND_MONTHS,
    UnicodeBlock.CJK_COMPATIBILITY,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A,
    UnicodeBlock.YIJING_HEXAGRAM_SYMBOLS,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS,
    UnicodeBlock.YI_SYLLABLES,
    UnicodeBlock.YI_RADICALS,
    UnicodeBlock.LISU,
    UnicodeBlock.VAI,
    UnicodeBlock.CYRILLIC_EXTENDED_B,
    UnicodeBlock.BAMUM,
    UnicodeBlock.MODIFIER_TONE_LETTERS,
    UnicodeBlock.LATIN_EXTENDED_D,
    UnicodeBlock.SYLOTI_NAGRI,
    UnicodeBlock.COMMON_INDIC_NUMBER_FORMS,
    UnicodeBlock.PHAGS_PA,
    UnicodeBlock.SAURASHTRA,
    UnicodeBlock.DEVANAGARI_EXTENDED,
    UnicodeBlock.KAYAH_LI,
    UnicodeBlock.REJANG,
    UnicodeBlock.HANGUL_JAMO_EXTENDED_A,
    UnicodeBlock.JAVANESE,
    0,
    UnicodeBlock.CHAM,
    UnicodeBlock.MYANMAR_EXTENDED_A,
    UnicodeBlock.TAI_VIET,
    UnicodeBlock.MEETEI_MAYEK_EXTENSIONS,
    UnicodeBlock.ETHIOPIC_EXTENDED_A,
    0,
    UnicodeBlock.MEETEI_MAYEK,
    UnicodeBlock.HANGUL_SYLLABLES,
    UnicodeBlock.HANGUL_JAMO_EXTENDED_B,
    UnicodeBlock.HIGH_SURROGATES,
    UnicodeBlock.HIGH_PRIVATE_USE_SURROGATES,
    UnicodeBlock.LOW_SURROGATES,
    UnicodeBlock.PRIVATE_USE_AREA,
    UnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS,
    UnicodeBlock.ALPHABETIC_PRESENTATION_FORMS,
    UnicodeBlock.ARABIC_PRESENTATION_FORMS_A,
    UnicodeBlock.VARIATION_SELECTORS,
    UnicodeBlock.VERTICAL_FORMS,
    UnicodeBlock.COMBINING_HALF_MARKS,
    UnicodeBlock.CJK_COMPATIBILITY_FORMS,
    UnicodeBlock.SMALL_FORM_VARIANTS,
    UnicodeBlock.ARABIC_PRESENTATION_FORMS_B,
    UnicodeBlock.HALFWIDTH_AND_FULLWIDTH_FORMS,
    UnicodeBlock.SPECIALS,
    UnicodeBlock.LINEAR_B_SYLLABARY,
    UnicodeBlock.LINEAR_B_IDEOGRAMS,
    UnicodeBlock.AEGEAN_NUMBERS,
    UnicodeBlock.ANCIENT_GREEK_NUMBERS,
    UnicodeBlock.ANCIENT_SYMBOLS,
    UnicodeBlock.PHAISTOS_DISC,
    0,
    UnicodeBlock.LYCIAN,
    UnicodeBlock.CARIAN,
    0,
    UnicodeBlock.OLD_ITALIC,
    UnicodeBlock.GOTHIC,
    0,
    UnicodeBlock.UGARITIC,
    UnicodeBlock.OLD_PERSIAN,
    0,
    UnicodeBlock.DESERET,
    UnicodeBlock.SHAVIAN,
    UnicodeBlock.OSMANYA,
    0,
    UnicodeBlock.CYPRIOT_SYLLABARY,
    UnicodeBlock.IMPERIAL_ARAMAIC,
    0,
    UnicodeBlock.PHOENICIAN,
    UnicodeBlock.LYDIAN,
    0,
    UnicodeBlock.MEROITIC_HIEROGLYPHS,
    UnicodeBlock.MEROITIC_CURSIVE,
    UnicodeBlock.KHAROSHTHI,
    UnicodeBlock.OLD_SOUTH_ARABIAN,
    0,
    UnicodeBlock.AVESTAN,
    UnicodeBlock.INSCRIPTIONAL_PARTHIAN,
    UnicodeBlock.INSCRIPTIONAL_PAHLAVI,
    0,
    UnicodeBlock.OLD_TURKIC,
    0,
    UnicodeBlock.RUMI_NUMERAL_SYMBOLS,
    0,
    UnicodeBlock.BRAHMI,
    UnicodeBlock.KAITHI,
    UnicodeBlock.SORA_SOMPENG,
    UnicodeBlock.CHAKMA,
    0,
    UnicodeBlock.SHARADA,
    0,
    UnicodeBlock.TAKRI,
    0,
    UnicodeBlock.CUNEIFORM,
    UnicodeBlock.CUNEIFORM_NUMBERS_AND_PUNCTUATION,
    0,
    UnicodeBlock.EGYPTIAN_HIEROGLYPHS,
    0,
    UnicodeBlock.BAMUM_SUPPLEMENT,
    0,
    UnicodeBlock.MIAO,
    0,
    UnicodeBlock.KANA_SUPPLEMENT,
    0,
    UnicodeBlock.BYZANTINE_MUSICAL_SYMBOLS,
    UnicodeBlock.MUSICAL_SYMBOLS,
    UnicodeBlock.ANCIENT_GREEK_MUSICAL_NOTATION,
    0,
    UnicodeBlock.TAI_XUAN_JING_SYMBOLS,
    UnicodeBlock.COUNTING_ROD_NUMERALS,
    0,
    UnicodeBlock.MATHEMATICAL_ALPHANUMERIC_SYMBOLS,
    0,
    UnicodeBlock.ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS,
    0,
    UnicodeBlock.MAHJONG_TILES,
    UnicodeBlock.DOMINO_TILES,
    UnicodeBlock.PLAYING_CARDS,
    UnicodeBlock.ENCLOSED_ALPHANUMERIC_SUPPLEMENT,
    UnicodeBlock.ENCLOSED_IDEOGRAPHIC_SUPPLEMENT,
    UnicodeBlock.MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS,
    UnicodeBlock.EMOTICONS,
    0,
    UnicodeBlock.TRANSPORT_AND_MAP_SYMBOLS,
    UnicodeBlock.ALCHEMICAL_SYMBOLS,
    0,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B,
    0,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D,
    0,
    UnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT,
    0,
    UnicodeBlock.TAGS,
    0,
    UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT,
    0,
    UnicodeBlock.SUPPLEMENTARY_PRIVATE_USE_AREA_A,
    UnicodeBlock.SUPPLEMENTARY_PRIVATE_USE_AREA_B
];


/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 富文本符号支持
 */
var RichTextSymbol = com.qici.richText.RichTextSymbol = function(game) {
    var self = this;

    self.game = game;
    /**
     * @property {Object} _symbols - 符号集合
     */
    self._symbols ={};

    /**
     * @property {Object} _drawStyle - 绘制方式集合
     */
    self._drawStyles = {};

    /**
     * @property {Object} _emoji - 表情集合
     */
    self._emoji = {},

    // 添加系统默认处理支持
    self.resetToSystemSymbol();
};

RichTextSymbol.prototype = {};
RichTextSymbol.prototype.constructor = RichTextSymbol;

/**
 * 注册一个符号处理
 */
RichTextSymbol.prototype.registerSymbol = function(key, attributeToStyleFunction) {
	var self = this;
	self.unregisterSymbol(key, attributeToStyleFunction);
	var symbol = self._symbols[key];
	if (!symbol) {
		symbol = {
			history : [],
			inEffect : attributeToStyleFunction
		};
		self._symbols[key] = symbol;
	}
	else {
		symbol.history.push(symbol.inEffect);
		symbol.inEffect = attributeToStyleFunction;
	}
};

/**
 * 反注册一个符号处理，将会恢复为被覆盖的处理
 */
RichTextSymbol.prototype.unregisterSymbol = function(key, attributeToStyleFunction) {
	var self = this;
	var symbol = self._symbols[key];
	if (!symbol) {
		return;
	}
	if (symbol.inEffect === attributeToStyleFunction) {
		symbol.inEffect = symbol.history.pop();
	}
	else {
		var idx = symbol.history.length;
		while (idx--) {
			if (symbol.history[idx] === attributeToStyleFunction) {
				symbol.splice(idx, 1);
			}
		}
	}
};

/**
 * 获取符号对应的效果
 */
RichTextSymbol.prototype.getSymbolStyle = function(key, attribute) {
	var self = this;
	var symbol = self._symbols[key];
	if (!symbol || !symbol.inEffect) {
		return null;
	}
	return symbol.inEffect(key, attribute);
};

/**
 * 注册一个符号处理
 */
RichTextSymbol.prototype.registerDrawStyle = function(key, drawFunction) {
	var self = this;
	self.unregisterDrawStyle(key, drawFunction);
	var drawStyle = self._drawStyles[key];
	if (!drawStyle) {
		drawStyle = {
			history : [],
			inEffect : drawFunction
		};
		self._drawStyles[key] = drawStyle;
	}
	else {
		drawStyle.history.push(drawStyle.inEffect);
		drawStyle.inEffect = drawFunction;
	}
};

/**
 * 反注册一个符号处理，将会恢复为被覆盖的处理
 */
RichTextSymbol.prototype.unregisterDrawStyle = function(key, drawFunction) {
	var self = this;
	var drawStyle = self._drawStyles[key];
	if (!drawStyle) {
		return;
	}
	if (drawStyle.inEffect === drawFunction) {
		drawStyle.inEffect = drawStyle.history.pop();
	}
	else {
		var idx = drawStyle.history.length;
		while (idx--) {
			if (drawStyle.history[idx] === drawFunction) {
				drawStyle.splice(idx, 1);
			}
		}
	}
};

/**
 * 注册一个表情包
 */
RichTextSymbol.prototype.registerEmoji = function(packageName, emoji) {
	var self = this;
	self.unregisterEmoji(packageName, emoji);
	var emojiList = self._emoji[packageName];
	if (!emojiList) {
		emojiList = [];
		self._emoji[packageName] = emojiList;
	}
	emojiList.push(emoji);
};

/**
 * 注销一个表情包
 */
RichTextSymbol.prototype.unregisterEmoji = function(packageName, emoji) {
	var self = this;
	var emojiList = self._emoji[packageName];
	if (!emojiList)
		return;
	var idx = emojiList.length;
	while (idx--) {
		if (emojiList[idx] === emoji) {
			emojiList.splice(idx, 1);
		}
	}
};

/**
 * 从表情包获取一个图片
 */
RichTextSymbol.prototype.findEmojiAtlas = function(packageName, frame) {
	var self = this;
	var emojiList = self._emoji[packageName];
	if (!emojiList)
		return null;
	var idx = -1,
		len = emojiList.length;
	if (!frame) {
		return emojiList[0];
	}
	while (++idx < len) {
		var frameIdx = -1,
			frameNames = emojiList[idx].atlas.frameNames,
			frameCount = frameNames.length;
		while (++frameIdx < frameCount) {
			if (frameNames[frameIdx] === frame) {
				return emojiList[idx].atlas;
			}
		}
	}
	return null;
};

/**
 * 获取符号对应的效果
 */
RichTextSymbol.prototype.getDrawStyle = function(key) {
	var self = this;
	var drawStyle = self._drawStyles[key];
	if (!drawStyle || !drawStyle.inEffect) {
		return null;
	}
	return drawStyle.inEffect;
};

/**
 * 文本绘制后，马上进行的绘制
 */
RichTextSymbol.doPostDrawText = function(context, block, elementIdx, x, y) {
	var backStyle = context.fillStyle;
	var style = block.style;
	var rect, extra;
	if (style.underline) {
		if (style.underlineColor) {
			context.fillStyle = style.underlineColor;
		}
		rect = block.elementRects[elementIdx].rect;
		extra = block.isFirstBlockInLine && elementIdx === 0 ? 0 : (style.charSpace + block.line.elementSpace);
		context.fillRect(x + rect.x - extra, Math.floor(y + rect.height - 1), rect.width + extra, 1);
		context.fillStyle = backStyle;
	}

	if (style.strikethrough) {
		if (style.strikethroughColor) {
			context.fillStyle = style.strikethroughColor;
		}
		rect = block.elementRects[elementIdx].rect;
		extra = block.isFirstBlockInLine && elementIdx === 0 ? 0 : (style.charSpace + block.line.elementSpace);
		context.fillRect(x + rect.x - extra, Math.floor(y + (rect.height - 1) / 2) , rect.width + extra, 1);
		context.fillStyle = backStyle;
	}
};

/**
 * 填充的文本绘制方式
 */
RichTextSymbol.fillText = function(context, block, elementIdx, x, y) {
	context.fillStyle = block.style.fontColor;
	context.textBaseline = 'middle';
	var rect = block.elementRects[elementIdx].rect;
	context.fillText(block.elements[elementIdx], x + rect.x, y + rect.y + rect.height / 2);
};

/**
 * 描边的文本绘制方式
 */
RichTextSymbol.strokeText = function(context, block, elementIdx, x, y) {
	context.strokeStyle = block.style.fontColor;
	context.textBaseline = 'middle';
	var rect = block.elementRects[elementIdx].rect;
	context.strokeText(block.elements[elementIdx], x + rect.x, y + rect.y + rect.height / 2);
};

/*
 * 注册一些默认支持的符号
 */
RichTextSymbol.prototype.resetToSystemSymbol = function() {
    // 清理已经存在的符号
    var self = this;
    self._symbols = {};
    self._drawStyle = {};

    // 注册绘制方式
	// 注册基本的绘制函数
	self.registerDrawStyle('fill', RichTextSymbol.fillText);

	self.registerDrawStyle('stroke', RichTextSymbol.strokeText);

	// 注册符号
	// 添加字体颜色
	self.registerSymbol('color', function(key, attribute, currStyle) {
		return {
			fontColor: attribute.value
		};
	});

	// 添加字体大小
	self.registerSymbol('size', function(key, attribute, currStyle) {
		return {
			fontSize: parseInt(attribute.value)
		};
	});

	// 添加水平对齐
	self.registerSymbol('text-align', function(key, attribute, currStyle) {
		return {
			textAlign: attribute.value
		};
	});

	// 添加竖直对齐
	self.registerSymbol('vertical-align', function(key, attribute, currStyle) {
		return {
			verticalAlign: attribute.value
		};
	});

	// 添加粗体
	self.registerSymbol('b', function(key, attribute, currStyle) {
		return {
			fontWeight: 'bold'
		};
	});

	// 添加斜体
	self.registerSymbol('i', function(key, attribute, currStyle) {
		return {
			fontStyle: 'italic'
		};
	});

	// 添加下划线
	self.registerSymbol('underline', function(key, attribute, currStyle) {
		var style = {
			underline: true,
			underlineColor: attribute.color,
			postDrawElementHandle: RichTextSymbol.doPostDrawText
		};
		return style;
	});

	// 添加删除线
	self.registerSymbol('strikethrough', function(key, attribute, currStyle) {
		var style = {
			strikethrough: true,
			strikethroughColor: attribute.color,
			postDrawElementHandle: RichTextSymbol.doPostDrawText
		};
		return style;
	});

	// 添加点击事件
	self.registerSymbol('click', function(key, attribute, currStyle) {
		var style = {
			onClickHandle: function(clickContext, block, x, y) {
				var command = attribute.value;
				if (clickContext && clickContext._sendMessage) {
					clickContext._sendMessage(command, true, block.elements.join(''), x, y);
				}
				else if (clickContext && (typeof clickContext[command] === 'function')) {
					clickContext[command].call(clickContext, block.elements.join(''), x, y);
				}
			}
		};
		return style;
	});

	// 添加绘制样式
	self.registerSymbol('stroke', function(key, attribute, currStyle) {
		return {
			drawStyle: 'stroke'
		};
	});

	// 添加行高控制
	self.registerSymbol('linespace', function(key, attribute, currStyle) {
		return {
			lineSpace: parseInt(attribute.value)
		};
	});

	// 字间距
	self.registerSymbol('charspace', function(key, attribute, currStyle) {
		return {
			charSpace: parseInt(attribute.value)
		};
	});

	// 固定行高
	self.registerSymbol('lineweight', function(key, attribute, currStyle) {
		return {
			lineWeight: parseInt(attribute.value)
		};
	});

	// 表情标签
	self.registerSymbol('image', function(key, attribute, currStyle) {
		var packageName = attribute.package;
		var frame = attribute.frame;
		var atlas = self.findEmojiAtlas(packageName, frame);
		if (!atlas) {
			return null;
		}
		else {
			var phaserImage = new Phaser.Sprite(self.game.phaser);
			phaserImage.loadTexture(atlas.key, frame);
			if (attribute.width) {
				phaserImage.texture.frame.width = parseInt(attribute.width);
			}
			if (attribute.height) {
				phaserImage.texture.frame.height = parseInt(attribute.height);
			}
			return {
				onEnable: function(section) {
					var currChunk = new RichTextChunk(frame);
					currChunk.type = RichTextChunk.BLOCK;
					currChunk.sprite = phaserImage;
					return [currChunk];
				},

				measureHandle: function(context, style, body) {
					var sprite = body.sprite;
					return {
						x : 0,
						y : 0,
						width : sprite ? sprite.width : 0,
						height : sprite ? sprite.height : 0
					};
				},

				drawElementHandle: function(context, block, elementIdx, x, y) {
					var sprite = block.elements[elementIdx].sprite;
					if (!sprite)
						return;
					var resolution = sprite.texture.baseTexture.resolution;
					context.drawImage(
                            sprite.texture.baseTexture.source,
                            sprite.texture.crop.x,
                            sprite.texture.crop.y,
                            sprite.texture.crop.width,
                            sprite.texture.crop.height,
                            x,
                            y,
                            sprite.texture.frame.width / resolution,
                            sprite.texture.frame.height / resolution);
				}
			};
		}
	});
};



/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * RichText结构模块
 */
var RichTextChunk = com.qici.richText.RichTextChunk = function(source) {
	var self = this;
	/**
	 * @property {number} type - 模块的类型
	 */
	self.type = RichTextChunk.TEXT;
	/**
	 * @property {string} tag - 模块的标签
	 */
	self.tag = 'text';
	/**
	 * @property {null | RichTextChunk} - 模块的父节点
	 */
	self.parent = null;
	/**
	 * @property {string} source - 原始文本
	 */
	self.source = source;
	/**
	 * @property {Object} attributes - 模块的属性值
	 */
	self.attributes = {};
	/**
	 * @property {Array} subs - 子节点
	 */
	self.subs = [];
	/**
	 * @property {string} inner - 模块包含的文本内容
	 */
	self.inner = {
		source: source,
		start: 0,
		end: source.length,
		toString : function() {
			return this.source.substring(this.start, this.end);
		}
	};
	/**
	 * @property {string} outer - 模块完整的描述的文本
	 */
	self.outer = {
		source: source,
		start : 0,
		end : source.length,
		toString : function() {
			return this.source.substring(this.start, this.end);
		}
	};
};

RichTextChunk.prototype = {};
RichTextChunk.prototype.constructor = RichTextChunk;

/**
 * 文本模块类型
 */
RichTextChunk.TEXT = 0;

/**
 * 固定块
 */
RichTextChunk.BLOCK = 1;

/**
 * 功能模块
 */
RichTextChunk.SYMBOL = 2;

/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 用来解析富文本标记中的属性文本
 */
var RichTextAttributeParse = com.qici.richText.RichTextAttributeParse = function(text) {
	var self = this;

	/**
	 * @property {string} text - 需要解析的文本
	 */
	self.text = text;
	/**
	 * @property {string} idx - 当前解析到的位置
	 */
	self.idx = 0;
};

RichTextAttributeParse.prototype = {};
RichTextAttributeParse.prototype.constructor = RichTextAttributeParse;

/**
 * 重置解析进度
 */
RichTextAttributeParse.prototype.reset = function() {
	this.idx = 0;
};

/**
 * 返回下一个属性定义词
 * 1 特殊字符通过\进行转义
 * 2 被'', ""包含的文本块作为一个单元
 * 3 单元通过 =, ' ', '\t' 进行分隔
 * 4 忽略前后多余的空格
 */
RichTextAttributeParse.prototype.nextWord = function() {
	var text = this.text;
	var len = text.length;
	var char = text[this.idx];
	var isSeparate = char === ' ' || char === '\t';

	// 整合连续的分隔符
	if (isSeparate) {
		do {
			char = text[++this.idx];
		} while (char === ' ' || char === '\t');
	}
	if (this.idx >= len) {
		return null;
	}
	if (char === '=') {
		do {
			char = text[++this.idx];
		} while (char === ' ' || char === '\t');
		return '=';
	}
	else if (isSeparate) {
		// 空白作为分隔符时需要单独返回
		return ' ';
	}
	var buffer = [];
	do {
		if (char === '\\') {
			if (this.idx < len - 1) {
				buffer.push(text[++this.idx]);
			}
		}
		else if (char === "'" || char === '"') {
			// 进入文本段
			var endChar = text[++this.idx];
			do {
				if (endChar === '\\') {
					if (this.idx < len - 1) {
						buffer.push(text[++this.idx]);
					}
				}
				else if (endChar === char) {
					break;
				}
				else {
					buffer.push(endChar);
				}
				endChar = text[++this.idx];
			} while (this.idx < len);
		}
		else if (char === ' ' || char === '\t' || char === '=') {
			break;
		}
		else {
			buffer.push(char);
		}
		char = text[++this.idx];
	} while (this.idx < len);

	return buffer.join('');
};

/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 富文本解析工具，将富文本解析成为RichTextChunk结构
 */
var RichTextParse = com.qici.richText.RichTextParse = function(string) {
	/**
	 * @property {string} source - 需要解析的文本
	 */
	this.source = string;
	
	this._reset();
};

RichTextParse.prototype = {};
RichTextParse.prototype.constructor = RichTextParse;

/**
 * 解析文本为RichTextChunk结构
 */
RichTextParse.parse = function(text) {
	var instance = RichTextParse._instance || (RichTextParse._instance = new RichTextParse(''));
	instance.source = text;
	return instance.parse();
};

/**
 * 重置环境
 */
RichTextParse.prototype._reset = function() {
	var self = this;
	self._idx = 0;
	self._len = self.source.length;
	self._lastChunk = null;
	self.chunks = [];
};

/**
 * 获取下一个块
 */
RichTextParse.prototype._next = function() {
	var self = this,
		source = self.source,
		start = self._idx,
		len = self._len;

	if (start >= len)
		return null;

	var isBreak = false,
		isSymbol = source[start] === '[',
		firstSplit = len;
	while(!isBreak && ++self._idx < len) {
		switch (source[self._idx]) {
			case ']':
				self._idx++;
				isBreak = true;
				break;
			case '[':
				isBreak = true;
				isSymbol = false;
				break;
			case ' ':
			case '=':
				firstSplit = Math.min(firstSplit, self._idx);
				break;
		}
	}

	var broken = {
		start: start,
		end: self._idx,
		isSymbol: isBreak && isSymbol,
		attributes: {}
	};
	if (broken.isSymbol) {
		broken.selfClose = source[broken.end - 2] === '/';
		broken.isClose = source[broken.start + 1] === '/';
		var define = source.substring(broken.start + (broken.isClose ? 2 : 1),
			broken.end - (broken.selfClose ? 2 : 1));
		var parseTool = new RichTextAttributeParse(define);
		var key, sep, value;
		key = parseTool.nextWord() || '';
		sep = key && parseTool.nextWord();
		value = sep === '=' ? parseTool.nextWord() : true;
		broken.key = key.toLowerCase();
		broken.attributes.value = value;
		do {
			key = parseTool.nextWord();
			if (key === ' ')
				key = parseTool.nextWord();
			sep = key && parseTool.nextWord();
			value = sep === '=' ? parseTool.nextWord() : true;
			if (key) {
				broken.attributes[key.toLowerCase()] = value;	
			}
		} while (key);
	}
	return broken;
};

/**
 * 解析下一个结构块
 */
RichTextParse.prototype._parseNextChunk = function() {
	var self = this,
		source = self.source,
		broken = self._next(),
		lastChunk = self._lastChunk;
	if (!broken)
		return false;

	var currChunk = new RichTextChunk(source);
	if (!broken.isSymbol) {
		currChunk.type = RichTextChunk.TEXT;
		currChunk.tag = 'text';
		currChunk.outer.start = currChunk.inner.start = broken.start;
		currChunk.outer.end = currChunk.inner.end = broken.end;
		currChunk.close = true;
	}
	else if (broken.isClose) {
		while (lastChunk && lastChunk.tag !== broken.key) {
			lastChunk = lastChunk.parent;
		}
		if (lastChunk) {
			lastChunk.close = true;
			lastChunk.outer.end = broken.end;
			lastChunk.inner.end = broken.start;
			currChunk = null;
		}
		else {
			lastChunk = self._lastChunk;
			currChunk.type = RichTextChunk.TEXT;
			currChunk.tag = 'text';
			currChunk.outer.start = currChunk.inner.start = broken.start;
			currChunk.outer.end = currChunk.inner.end = broken.end;
			currChunk.close = true;
		}
		
	}
	else if (broken.selfClose) {
		currChunk.type = RichTextChunk.SYMBOL;
		currChunk.tag = broken.key;
		currChunk.outer.start = broken.start;
		currChunk.outer.end = broken.end;
		currChunk.inner.start = currChunk.inner.end = broken.start;
		currChunk.close = true;
		currChunk.attributes = broken.attributes;
	}
	else {
		currChunk.type = RichTextChunk.SYMBOL;
		currChunk.tag = broken.key;
		currChunk.outer.start = broken.start;
		currChunk.inner.start = broken.end;
		currChunk.close = false;
		currChunk.attributes = broken.attributes;
	}

	while (lastChunk && lastChunk.close) {
		lastChunk = lastChunk.parent;
	}
	if (!currChunk) {
		self._lastChunk = lastChunk;
		return true;
	}
	if (lastChunk) {
		lastChunk.subs.push(currChunk);
		currChunk.parent = lastChunk;
	}
	else {
		self.chunks.push(currChunk);
	}
	self._lastChunk = currChunk;
	return true;
};

/**
 * 生成富文本结构
 */
RichTextParse.prototype.parse = function() {
	var self = this;
	self._reset();
	while (self._parseNextChunk()) {
	}
	return self.chunks;
};
/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 富文本行的块结构
 */
var RichTextBlock = com.qici.richText.RichTextBlock = function(line, style) {
    var self = this;

    /**
     * @property {com.qici.richText.RichTextLine} line - 块所属的行
     */
    self.line = line;

    /**
     * @property {boolean} isClosed - 块是否结束
     */
    self.isClosed = false;

    /**
     * @property {com.qici.richText.RichTextStyle} style - 块使用的显示风格
     */
    self.style = style;

    /**
     * @property {Array} elements - 块包含的显示元素
     */
    self.elements = [];

    /**
     * @property {Array} elementRects - 块显示范围
     */
    self.elementRects = [];

    /**
     * @property {number} type - 块的类型，0 为文本结构
     */
    self.type = 0;

    /**
     * @property {boolean} isFirstBlockInLine - 是否为行首
     */
    self.isFirstBlockInLine = false;

    /**
     * @property {{x, y, width, height}} rect - 块的主体显示范围
     */
	self.rect = {
        x : 0,
        y : 0,
        width : 0,
        height : 0
    };

    /**
     * @property {{left, right, top, bottom}} margin - 块显示外边距
     */
    self.margin = {
        left : 0,
        right : 0,
        top : 0,
        bottom : 0
    };

    /**
     * @property {number} elementCount - 块内所有显示元素的个数
     */
	self.elementCount = 0;
};

RichTextBlock.prototype = {};
RichTextBlock.prototype.constructor = RichTextBlock;

/**
 * 结束块
 */
RichTextBlock.prototype.close = function() {
    var self = this;
    if (self.isClosed) {
        return;
    }

    self.isClosed = true;

    // 合并最后一个块的范围
    self.line._appendLayout(self);
};

/**
 * 添加显示元素
 */
RichTextBlock.prototype.appendElement = function(element, count, x, y, width, height,
                                                 marginLeft, marginRight, marginTop, marginBottom) {
    var self = this;

    self.elements.push(element);
    self.elementCount += count;
    self.line.elementCount += count;

    var layout = {
        rect : { x: x, y: y, width: width, height: height},
        margin : { left: marginLeft, right: marginRight, top: marginTop, bottom: marginBottom}
    };
    self.elementRects.push(layout);
    // 先按当期模式进行布局处理
    self._appendLayout(layout.rect, layout.margin);
};

/**
 * 添加显示区域
 */
RichTextBlock.prototype._appendLayout = function(rect, margin) {
    var self = this;
    var startX = self.rect.x,
        startY = self.rect.y,
        endX = startX + self.rect.width,
        endY = startY + self.rect.height;
    var mStartX = startX - self.margin.left,
        mStartY = startY - self.margin.top,
        mEndX = endX + self.margin.right,
        mEndY = endY + self.margin.left;

    var charStep = self.line.section.charStep;
    var extra = endX === startX && endY === startY ? 0 : (self.line.elementSpace + self.style.charSpace);
    var addStartX = (endX + extra) * charStep.width + rect.x,
        addStartY = (endY + extra) * charStep.height + rect.y,
        addEndX = addStartX + rect.width,
        addEndY = addStartY + rect.height;

    

    self.rect.x = Math.min(startX, addStartX);
    self.rect.y = Math.min(startY, addStartY);
    self.rect.width = Math.max(endX, addEndX) - self.rect.x;
    self.rect.height = Math.max(endY, addEndY) - self.rect.y;

    mStartX = Math.min(mStartX, addStartX - margin.left);
    mStartY = Math.min(mStartY, addStartY - margin.top);
    mEndX = Math.max(mEndX, addEndX + margin.right);
    mEndY = Math.max(mEndY, addEndY + margin.bottom);

    // 外边距最小为0
    self.margin.left = Math.max(0, self.rect.x - mStartX);
    self.margin.right = Math.max(0, mEndX - self.rect.x - self.rect.width);
    self.margin.top = Math.max(0, self.rect.y - mStartY);
    self.margin.bottom = Math.max(0, mEndY - self.rect.y - self.rect.height);
};

/**
 * 重新计算范围信息
 */
RichTextBlock.prototype.relayout = function() {
    var self = this;
    self.rect.x = self.rect.y = self.rect.width = self.rect.height = 0;
    self.margin.left = self.margin.right = self.margin.top = self.margin.bottom = 0;

    var idx = -1,
        len = self.elementRects.length;
    while (++idx < len) {
        var layout = self.elementRects[idx];
        self._appendLayout(layout.rect, layout.margin);
    }
};


/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 富文本行结构
 */
var RichTextLine = com.qici.richText.RichTextLine = function(richTextSection) {
	var self = this;

    /**
     * @property {com.qici.richText.RichTextSection} section - 行所属的块
     */
    self.section = richTextSection;

    /**
     * @property {boolean} isClosed - 行是否已经结束
     */
	self.isClosed = false;

    /**
     * @property {Array} blocks - 行的块
     */
	self.blocks = [];

    /**
     * @property {{x, y, width, height}} rect - 行的主体显示范围
     */
	self.rect = {
        x : 0,
        y : 0,
        width : 0,
        height : 0
    };

    /**
     * @property {{left, right, top, bottom}} margin - 行显示外边距
     */
    self.margin = {
        left : 0,
        right : 0,
        top : 0,
        bottom : 0
    };

    /**
     * @property {number} offset - 对于section的附加偏移
     */
    self.offset = 0;

    /**
     * @property {Array} styles - 行内所有使用的显示风格
     */
	self.styles = [self.section.getCurrStyle()];

    /**
     * @property {number} elementCount - 行内所有显示元素的个数
     */
	self.elementCount = 0;

    /**
     * @property {number} elementSpace - 每个结构的间距
     */
    self.elementSpace = 0;
};

RichTextLine.prototype = {};
RichTextLine.prototype.constructor = RichTextLine;

/**
 * 结束行
 */
RichTextLine.prototype.close = function() {
    var self = this;
    if (self.isClosed)
        return;
    self.isClosed = true;
    // 关闭最后一个块
    self.closeLastBlock();

    // 在行结束后，需要根据当前行最后生效的style.textAlign类型进行重排
    var style = self.styles[self.styles.length - 1];
    var remainSpace = self.remainSpace();
    var textAlign = style.textAlign;
    self.rect.height += Math.max(0, style.getFontHeight() - self.rect.height - self.rect.y);

    if (textAlign === 'end') {
        self.offset = remainSpace;
        self.elementSpace = 0;
    }
    else if (textAlign === 'center') {
        self.offset = remainSpace / 2;
        self.elementSpace = 0;
    }
    else if (textAlign === 'justify') {
        self.offset = 0;
        if (self.elementCount < 2) {
            self.elementSpace = 0;
        }
        else {
            self.elementSpace = remainSpace / (self.elementCount - 1);
        }

        // 设置完间距后，重新进行布局
        self.rect.x = self.rect.y = self.rect.width = self.rect.height = 0;
        self.margin.left = self.margin.right = self.margin.top = self.margin.bottom = 0;
        var blockIdx = -1, blockLen = self.blocks.length;
        while (++blockIdx < blockLen) {
            var block = self.blocks[blockIdx];
            block.relayout();
            self._appendLayout(block);
        }
    }
    else {
        self.offset = 0;
        self.elementSpace = 0;
    }

    // 取最后生效的行间距
    self.lineSpace = style.lineSpace;

    if (style.lineWeight) {
        if (self.section.lineStep.height) {
            self.lineSpace += style.lineWeight - self.rect.height;
        }
        else if (self.section.lineStep.width) {
            self.lineSpace += style.lineWeight - self.rect.width;
        }   
    }

    // 合并最后一行的范围
    self.section._appendLayout(self.rect, self.margin, self.lineSpace);
};

/**
 * 关闭最后一个块
 */
RichTextLine.prototype.closeLastBlock = function() {
    var self = this,
        lastBlock = self.getLastBlock();

    if (!lastBlock || lastBlock.isClosed)
        return;

    lastBlock.close();
};

/**
 * 获取最后的块
 */
RichTextLine.prototype.getLastBlock = function() {
    var self = this,
        blockLen = self.blocks.length;
    return blockLen < 1 ? null : self.blocks[blockLen - 1];
};

/**
 * 获取当前可操作的块
 */
RichTextLine.prototype.getCurrBlock = function() {
    var self = this,
        lastBlock = self.getLastBlock();
    if (!lastBlock || lastBlock.isClosed) {
        lastBlock = new RichTextBlock(this, self.section.getCurrStyle());
        lastBlock.isFirstBlockInLine = self.blocks.length === 0;
        self.blocks.push(lastBlock);
    }
    return lastBlock;
};

/**
 * 添加显示区域
 */
RichTextLine.prototype._appendLayout = function(block) {
    var self = this;
    var rect = block.rect,
        margin = block.margin;
    var startX = self.rect.x,
        startY = self.rect.y,
        endX = startX + self.rect.width,
        endY = startY + self.rect.height;
    var mStartX = startX - self.margin.left,
        mStartY = startY - self.margin.top,
        mEndX = endX + self.margin.right,
        mEndY = endY + self.margin.left;

    var charStep = self.section.charStep;
    var extra = endX === startX && endY === startY ? 0 : (self.elementSpace + block.style.charSpace);
    var addStartX = (endX + extra) * charStep.width + rect.x,
        addStartY = (endY + extra) * charStep.height + rect.y,
        addEndX = addStartX + rect.width,
        addEndY = addStartY + rect.height;
    
    self.rect.x = Math.min(startX, addStartX);
    self.rect.y = Math.min(startY, addStartY);
    self.rect.width = Math.max(endX, addEndX) - self.rect.x;
    self.rect.height = Math.max(endY, addEndY) - self.rect.y;

    mStartX = Math.min(mStartX, addStartX - margin.left);
    mStartY = Math.min(mStartY, addStartY - margin.top);
    mEndX = Math.max(mEndX, addEndX + margin.right);
    mEndY = Math.max(mEndY, addEndY + margin.bottom);

    // 外边距最小为0
    self.margin.left = Math.max(0, self.rect.x - mStartX);
    self.margin.right = Math.max(0, mEndX - self.rect.x - self.rect.width);
    self.margin.top = Math.max(0, self.rect.y - mStartY);
    self.margin.bottom = Math.max(0, mEndY - self.rect.y - self.rect.height);
};

/**
 * 获取当前可用来显示的宽度
 */
RichTextLine.prototype.remainSpace = function() {
    var self = this,
        lastBlock = self.getLastBlock();
    var remainSpace = self.section.limitLength - 
                        (self.rect.width + self.rect.x) * self.section.charStep.width -
                        (self.rect.height + self.rect.y) * self.section.charStep.height;
    if (lastBlock && !lastBlock.isClosed) {
        remainSpace -= (self.blocks.length > 1 ? lastBlock.style.charSpace : 0) +
                        (lastBlock.rect.width + lastBlock.rect.x) * self.section.charStep.width +
                        (lastBlock.rect.height + lastBlock.rect.y) * self.section.charStep.height;
    }
    return remainSpace;
};

/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 富文本段
 */
var RichTextSection = com.qici.richText.RichTextSection = function(limit, breakStyle, defaultStyle, order) {
	var self = this;

	/**
     * @property {Array} lines - 解析后所有的行
     */
    self.lines = [];

	/**
	 * @property {number} limitLength - 每行限制的长度
	 */
	self.limitLength = limit;

    /**
     * @property {number} breakStyle - 行打断类型
     */
    self.breakStyle = breakStyle;

	/**
	 * @property {{x, y, width, height}} rect - 富文本块的主体显示范围
	 */
	self.rect = {
        x : 0,
        y : 0,
        width : 0,
        height : 0
    };

    /**
     * @property {{left, right, top, bottom}} margin - 富文本块的主体显示外边界
     */
    self.margin = {
        left : 0,
        right : 0,
        top : 0,
        bottom : 0
    };

	/**
	 * @property {Array} _styles - 当前生效的样式
	 */
	self._styles = [];

	/**
	 * @property {com.qici.richText.RichTextStyle} defualtStyle - 默认样式
	 */
	self.defaultStyle = defaultStyle;

    /**
     * @property {Array} lineSpaces - 所有行的行间距
     */
    self.lineSpaces = [];

    /**
     * @property {number} charOrder - 文本显示顺序
     */
    self.charOrder = order || 0;

    /**
     * 交互的上下文对象
     */
    self.clickHandleContext = null;

    self.calcStep();
};

RichTextSection.prototype = {};
RichTextSection.prototype.constructor = RichTextSection;

/**
 * 重置结构
 */
RichTextSection.prototype.reset = function() {
	var self = this;
    self.lines = [];
	self._styles = [];
	self.rect = {
        x : 0,
        y : 0,
        width : 0,
        height : 0
    };
    self.margin = {
        left : 0,
        right : 0,
        top : 0,
        bottom : 0
    };
};

/**
 * 结束最后一行
 */
RichTextSection.prototype.closeLastLine = function() {
    var self = this,
        lastLine = self.getLastLine();

    if (!lastLine || lastLine.isClosed)
        return;

    lastLine.close();
};

/**
 * 获取实际的最后一行
 */
RichTextSection.prototype.getLastLine = function() {
	var self = this,
        lineLen = self.lines.length;
	return lineLen < 1 ? null : self.lines[lineLen - 1];
};

/**
 *  获取最后一个块
 */
RichTextSection.prototype.getLastBlock = function() {
	var self = this,
		lastLine = self.getLastLine();
	if (!lastLine)
		return null;
	return lastLine.getLastBlock();
};

/**
 * 获取当前可操作的行
 */
RichTextSection.prototype.getCurrLine = function() {
	var self = this,
		lastLine = self.getLastLine();
	if (!lastLine || lastLine.isClosed) {
        // 行结构
        lastLine = new RichTextLine(this);
        self.lines.push(lastLine);
	}
	return lastLine;
};

/**
 * 获取当前的可操作的块
 */
RichTextSection.prototype.getCurrBlock = function() {
	var self = this,
		line = self.getCurrLine();
    return line.getCurrBlock();
};

/**
 * 获取当前生效的样式
 */
RichTextSection.prototype.getCurrStyle = function() {
	var self = this,
        styleLen = self._styles.length;
	return styleLen < 1 ? self.defaultStyle : self._styles[styleLen - 1];
};

/**
 * 设置当前使用的style
 */
RichTextSection.prototype.pushStyle = function(style) {
	var self = this,
		lastLine = self.getLastLine(),
		lastBlock = self.getLastBlock();
	if (lastBlock && !lastBlock.isClosed) {
		lastBlock.close();
	}
	if (lastLine && !lastLine.isClosed) {
		lastLine.styles.push(style);
	}
	self._styles.push(style);
};

/**
 * 返回上一个style
 */
RichTextSection.prototype.popStyle = function() {
	var self = this,
		lastBlock = self.getLastBlock();
	if (lastBlock && !lastBlock.isClosed) {
		lastBlock.close();
	}
	var pop = self._styles.pop();
	if (!pop) {
		pop = self.defaultStyle;
	}
	return pop;
};

/**
 * 获取布局的字步进参数
 */
RichTextSection.prototype.calcStep = function() {
    var self = this;
    var reverseLine = (self.charOrder & 0x0f) !== 0;
    switch((self.charOrder & 0xf0) >>> 4) {
        case 1:
            self.charStep = { x : -1, y : 0, width : 1, height : 0, xRatio : -1, yRatio : 0 };
            self.lineStep = { x : 0, y : reverseLine ? -1 : 1, width : 0, height : 1, xRatio : 0, yRatio : reverseLine ? -1 : 0 };
            break;
        case 2:
            self.charStep = { x : 0, y : 1, width : 0, height : 1, xRatio : 0, yRatio : 0 };
            self.lineStep = { x : reverseLine ? -1 : 1, y : 0, width : 1, height : 0, xRatio : reverseLine ? -1 : 0, yRatio : 0 };
            break;
        case 3:
            self.charStep = { x : 0, y : -1, width : 0, height : 1, xRatio : 0, yRatio : -1 };
            self.lineStep = { x : reverseLine ? -1 : 1, y : 0, width : 1, height : 0, xRatio : reverseLine ? -1 : 0, yRatio : 0 };
            break;
        default:
            self.charStep = { x : 1, y : 0, width : 1, height : 0, xRatio : 0, yRatio : 0 };
            self.lineStep = { x : 0, y : reverseLine ? -1 : 1, width : 0, height : 1, xRatio : 0, yRatio : reverseLine ? -1 : 0 };
            break;
    }
};

/**
 * 添加一个字符串
 */
RichTextSection.prototype.appendElement = function(type, element, count, x, y, width, height,
                                                   marginLeft, marginRight, marginTop, marginBottom){
    var self = this,
        lastBlock = self.getLastBlock();
    if (!lastBlock || lastBlock.type !== type || lastBlock.isClosed) {
        if (lastBlock)
            lastBlock.close();
        lastBlock = self.getCurrBlock();
        lastBlock.type = type;
    }

    lastBlock.appendElement(element, count, x, y, width, height,
                            marginLeft, marginRight, marginTop, marginBottom);
};

/**
 * 添加显示区域
 */
RichTextSection.prototype._appendLayout = function(rect, margin, lineSpace) {
    var self = this;
    var startX = self.rect.x,
        startY = self.rect.y,
        endX = startX + self.rect.width,
        endY = startY + self.rect.height;

    var mStartX = startX - self.margin.left,
        mStartY = startY - self.margin.top,
        mEndX = endX + self.margin.right,
        mEndY = endY + self.margin.left;
    var lineStep = self.lineStep;

    if (lineStep.height)
        endX = self.limitLength;
    else if (lineStep.width)
        endY = self.limitLength;

    var extra = self.lineSpaces[self.lineSpaces.length - 1] || 0;
    var addStartX = (endX + extra) * lineStep.width + rect.x,
        addStartY = (endY + extra) * lineStep.height + rect.y,
        addEndX = addStartX + rect.width,
        addEndY = addStartY + rect.height;

    self.rect.x = Math.min(startX, addStartX);
    self.rect.y = Math.min(startY, addStartY);
    self.rect.width = Math.max(endX, addEndX) - self.rect.x;
    self.rect.height = Math.max(endY, addEndY) - self.rect.y;

    mStartX = Math.min(mStartX, addStartX - margin.left);
    mStartY = Math.min(mStartY, addStartY - margin.top);
    mEndX = Math.max(mEndX, addEndX + margin.right);
    mEndY = Math.max(mEndY, addEndY + margin.bottom);

    // 外边距最小为0
    self.margin.left = Math.max(0, self.rect.x - mStartX);
    self.margin.right = Math.max(0, mEndX - self.rect.x - self.rect.width);
    self.margin.top = Math.max(0, self.rect.y - mStartY);
    self.margin.bottom = Math.max(0, mEndY - self.rect.y - self.rect.height);

    // 将行间距添加到列表中
    self.lineSpaces.push(lineSpace);
};

/**
 * 生成主体结构
 */
RichTextSection.prototype._buildLines = function(context, chunks, symbol) {
    if (!chunks || chunks.length === 0) {
		return;
	}
	var self = this,
        style = self.getCurrStyle();

	var idx = -1, len = chunks.length;
    var chunkStyle, result;
	while (++idx < len) {
		var chunk = chunks[idx];
		if (chunk.type === RichTextChunk.SYMBOL &&
            (chunkStyle = symbol.getSymbolStyle(chunk.tag, chunk.attributes, style))) {
            style = style.mixin(chunkStyle);
            self.pushStyle(style);
            if (chunkStyle.onEnable) {
                result = chunkStyle.onEnable(self);
                if (result) {
                    self._buildLines(context, result, symbol);
                }
            }

            self._buildLines(context, chunk.subs, symbol);

            if (chunkStyle.onDisable) {
                result = chunkStyle.onDisable(self);
                if (result) {
                    self._buildLines(context, result, symbol);
                }
            }
            self.popStyle();
            style = self.getCurrStyle();
		}
		else {
			RichTextWrap.wrapChunk(self, context, self.breakStyle, chunk);
		}
	}
};

/**
 * 将富文本结构构建显示段
 */
RichTextSection.prototype.build = function(context, chunks) {
    var self = this,
    	symbol = self.defaultStyle.symbol;
    self.reset();
    self._buildLines(context, chunks, symbol);
    self.closeLastLine();
};

/**
 * 添加富文本结构到显示段
 */
RichTextSection.prototype.append = function(context, chunks, closeLine) {
    var self = this,
        symbol = self.defaultStyle.symbol;
    self._buildLines(context, chunks, symbol);
    if (closeLine)
        self.closeLastLine();
};

RichTextSection.prototype.contains = function (a, x, y) {
    if (a.width <= 0 || a.height <= 0)
    {
        return false;
    }

    return (x >= a.x && x < a.x + a.width && y >= a.y && y < a.y + a.height);

};

/**
 * 点击富文本区域
 */
RichTextSection.prototype.onClick = function(clickX, clickY) {
    var self = this;
    var lines = self.lines;
    var lineStep = self.lineStep,
        charStep = self.charStep;
    
    var lineOffX = - lineStep.xRatio * (self.rect.width + self.rect.x),
        lineOffY = - lineStep.yRatio * (self.rect.height + self.rect.y);

    var offX = lineOffX, 
        offY = lineOffY;

    var lineIdx, line, lineSpace, blocks, blockIdx, block, layout, extra;
    var elementIdx, elementLength, elementRect;

    for (lineIdx = 0; lineIdx < lines.length; ++lineIdx) {
        line = lines[lineIdx];
        lineSpace = self.lineSpaces[lineIdx];
        extra = line.elementSpace;
        blocks = line.blocks;
        lineOffX += lineStep.xRatio * line.rect.width;
        lineOffY += lineStep.yRatio * line.rect.height;
        offX = lineOffX - charStep.xRatio * self.limitLength + charStep.x * line.offset;
        offY = lineOffY - charStep.yRatio * self.limitLength + charStep.y * line.offset;
        if ((lineStep.width && (clickX >= offX && clickX <= offX + line.rect.width)) ||
            (lineStep.height && (clickY >= offY && clickY <= offY + line.rect.height))) {
            for (blockIdx = 0; blockIdx < blocks.length; ++blockIdx) {
                block = blocks[blockIdx];
                offX += charStep.xRatio * block.rect.width + charStep.x * (blockIdx === 0 ? 0 :  block.style.charSpace);
                offY += charStep.yRatio * block.rect.height + charStep.y * (blockIdx === 0 ? 0 :  block.style.charSpace);
                
                if (self.contains(block.rect, clickX - offX, clickY - offY)) {
                    if (block.style) {
                        block.style.onClick(self.clickHandleContext, block, clickX, clickY);
                    }
                    return;
                }
                offX += charStep.x * ((1 + charStep.xRatio) * block.rect.width + extra * (block.elementCount - 1));
                offY += charStep.y * ((1 + charStep.yRatio) * block.rect.height + extra * (block.elementCount - 1));
            }    
        }
        lineOffX += lineStep.x * ((1 + lineStep.xRatio) * line.rect.width + line.lineSpace);
        lineOffY += lineStep.y * ((1 + lineStep.yRatio) * line.rect.height + line.lineSpace);
    }
};


RichTextSection.prototype._loopElement = function(context, x, y, func) {
    var self = this;
    var lines = self.lines;
    var lineStep = self.lineStep,
        charStep = self.charStep;
    
    var lineOffX = x - lineStep.xRatio * (self.rect.width + self.rect.x),
        lineOffY = y - lineStep.yRatio * (self.rect.height + self.rect.y);

    var offX = lineOffX, 
        offY = lineOffY;

    var lineIdx, line, lineSpace, blocks, blockIdx, block, layout, extra;
    var elementIdx, elementLength, elementRect;

    for (lineIdx = 0; lineIdx < lines.length; ++lineIdx) {
        line = lines[lineIdx];
        lineSpace = self.lineSpaces[lineIdx];
        extra = line.elementSpace;
        blocks = line.blocks;
        lineOffX += lineStep.xRatio * line.rect.width;
        lineOffY += lineStep.yRatio * line.rect.height;
        offX = lineOffX - charStep.xRatio * self.limitLength + charStep.x * line.offset;
        offY = lineOffY - charStep.yRatio * self.limitLength + charStep.y * line.offset;
        for (blockIdx = 0; blockIdx < blocks.length; ++blockIdx) {
            block = blocks[blockIdx];
            if (block && block.style) {
                elementIdx = -1;
                elementLength = block.elements.length;
                while (++elementIdx < elementLength) {
                    elementRect = block.elementRects[elementIdx];
                    offX += charStep.xRatio * elementRect.rect.width + charStep.x * (blockIdx === 0 && elementIdx === 0 ? 0 :  block.style.charSpace);
                    offY += charStep.yRatio * elementRect.rect.height + charStep.y * (blockIdx === 0 && elementIdx === 0 ? 0 :  block.style.charSpace);
                    func(context, block, elementIdx, offX, offY);
                    offX += charStep.x * ((1 + charStep.xRatio) * elementRect.rect.width + extra);
                    offY += charStep.y * ((1 + charStep.yRatio) * elementRect.rect.height + extra);
                }
            }
        }
        lineOffX += lineStep.x * ((1 + lineStep.xRatio) * line.rect.width + line.lineSpace);
        lineOffY += lineStep.y * ((1 + lineStep.yRatio) * line.rect.height + line.lineSpace);
    }
};

RichTextSection.prototype._doPreDrawElement = function(context, block, elementIdx, x, y) {
    if (block.style)
        block.style.preDraw(context, block, elementIdx, x, y);
};

RichTextSection.prototype._doDrawElement = function(context, block, elementIdx, x, y) {
    if (block.style)
        block.style.drawElement(context, block, elementIdx, x, y);
};

RichTextSection.prototype._doPostDrawElement = function(context, block, elementIdx, x, y) {
    if (block.style)
        block.style.postDraw(context, block, elementIdx, x, y);
};

/**
 * 绘制富文本块
 */
RichTextSection.prototype.render = function(context, x, y) {
    var self = this;
    self._loopElement(context, x, y, self._doPreDrawElement);
    self._loopElement(context, x, y, self._doDrawElement);
    self._loopElement(context, x, y, self._doPostDrawElement);
};

/**
 * 从左至右，从上至下显示
 * @constant
 * @type {Number}
 */
RichTextSection.LTR_TTB = 0x00;

/**
 * 从左至右，从下至上显示
 * @constant
 * @type {Number}
 */
RichTextSection.LTR_BTT = 0x01;

/**
 * 从右至左，从上至下显示
 * @constant
 * @type {Number}
 */
RichTextSection.RTL_TTB = 0x10;

/**
 * 从右至左，从下至上显示
 * @constant
 * @type {Number}
 */
RichTextSection.RTL_BTT = 0x11;

/**
 * 从上至下，从左至右显示
 * @constant
 * @type {Number}
 */
RichTextSection.TTB_LTR = 0x20;

/**
 * 从上至下，从右至左显示
 * @constant
 * @type {Number}
 */
RichTextSection.TTB_RTL = 0x21;

/**
 * 从下至上, 从左至右显示
 * @constant
 * @type {Number}
 */
RichTextSection.BTT_LTR = 0x30;

/**
 * 从下至上，从右至左显示
 * @constant
 * @type {Number}
 */
RichTextSection.BTT_RTL = 0x31;
/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 富文本换行处理
 */
var RichTextWrap = com.qici.richText.RichTextWrap = {};

/**
 * 普通模式的换行。
 * 英文以空白字符进行词分割，以词为单位进行换行，当词的宽度度大于最大宽度时，以每个字母为单位换行。
 * 中文一单个字进行换行。
 * 部分后缀符号，如，。！等不会出现在行首。
 * 部分前缀符号，如《 “ ‘ 不会出现在行尾
 * @constant
 * @type {Number}
 */
RichTextWrap.BREAK_NORMAL = 0;

/**
 * 以单个字符为单位，只要超过限制宽度，就换行。
 * @constant
 * @type {Number}
 */
RichTextWrap.BREAK_BREAKALL = 1;

/**
 * 除了主动换行符外，不换行。
 * @constant
 * @type {Number}
 */
RichTextWrap.BREAK_KEEPALL = 2;

/**
 * 普通符号类型，可以位于行首也能位于行尾
 * @constant
 * @type {Number}
 */
RichTextWrap.SP_NORMAL = 0;

/**
 * 前缀符号类型，不能出现在行尾
 * @constant
 * @type {Number}
 */
RichTextWrap.SP_PREFIX = 1;

/**
 * 后缀符号类型，不能出现在行首
 * @constant
 * @type {Number}
 */
RichTextWrap.SP_SUFFIX = 2;

/**
 * 中日韩符号的符号类型表
 * 范围：0x3000~0x303f
 * @type {Array}
 */
RichTextWrap.CJK_SP = [
	RichTextWrap.SP_SUFFIX, // ID SP
	RichTextWrap.SP_SUFFIX, // 、
	RichTextWrap.SP_SUFFIX, // 。
	RichTextWrap.SP_SUFFIX, // 〃
	RichTextWrap.SP_NORMAL, // 〄
	RichTextWrap.SP_NORMAL, // 々
	RichTextWrap.SP_NORMAL, // 〆
	RichTextWrap.SP_NORMAL, // 〇
	RichTextWrap.SP_PREFIX, //〈
	RichTextWrap.SP_SUFFIX, // 〉
	RichTextWrap.SP_PREFIX, //《
	RichTextWrap.SP_SUFFIX, // 》
	RichTextWrap.SP_PREFIX, //「
	RichTextWrap.SP_SUFFIX, // 」
	RichTextWrap.SP_PREFIX, //『
	RichTextWrap.SP_SUFFIX, // 』
	RichTextWrap.SP_PREFIX, //【
	RichTextWrap.SP_SUFFIX, // 】
	RichTextWrap.SP_NORMAL, // 〒
	RichTextWrap.SP_NORMAL, // 〓
	RichTextWrap.SP_PREFIX, //〔
	RichTextWrap.SP_SUFFIX, // 〕
	RichTextWrap.SP_PREFIX, //〖
	RichTextWrap.SP_SUFFIX, // 〗
	RichTextWrap.SP_PREFIX, //〘
	RichTextWrap.SP_SUFFIX, // 〙
	RichTextWrap.SP_PREFIX, // 〚
	RichTextWrap.SP_SUFFIX, // 〛
	RichTextWrap.SP_SUFFIX, // 〜
	RichTextWrap.SP_PREFIX, //〝
	RichTextWrap.SP_SUFFIX, // 〞
	RichTextWrap.SP_SUFFIX, // 〟
	RichTextWrap.SP_NORMAL, // 〠
	RichTextWrap.SP_NORMAL, // 〡
	RichTextWrap.SP_NORMAL, // 〢
	RichTextWrap.SP_NORMAL, // 〣
	RichTextWrap.SP_NORMAL, // 〤
	RichTextWrap.SP_NORMAL, // 〥
	RichTextWrap.SP_NORMAL, // 〦
	RichTextWrap.SP_NORMAL, // 〧
	RichTextWrap.SP_NORMAL, // 〨
	RichTextWrap.SP_NORMAL, // 〩
	RichTextWrap.SP_SUFFIX, // 〪
	RichTextWrap.SP_SUFFIX, // 〫
	RichTextWrap.SP_SUFFIX, //〬	
	RichTextWrap.SP_SUFFIX, //〭	
	RichTextWrap.SP_PREFIX, // 〮
	RichTextWrap.SP_SUFFIX, // 〯
	RichTextWrap.SP_SUFFIX, // 〰
	RichTextWrap.SP_NORMAL, //〱
	RichTextWrap.SP_NORMAL, //〲
	RichTextWrap.SP_NORMAL, //〳
	RichTextWrap.SP_NORMAL, //〴
	RichTextWrap.SP_NORMAL, //〵
	RichTextWrap.SP_NORMAL, // 〶
	RichTextWrap.SP_NORMAL, // 〷
	RichTextWrap.SP_NORMAL, // 〸
	RichTextWrap.SP_NORMAL, // 〹
	RichTextWrap.SP_NORMAL, // 〺
	RichTextWrap.SP_NORMAL, // 〻
	RichTextWrap.SP_NORMAL, // 〼
	RichTextWrap.SP_NORMAL, // 〽
	RichTextWrap.SP_NORMAL, // 〾
	RichTextWrap.SP_NORMAL // 〿
];

/**
 * 中日韩全角半角符号的符号类型表
 * 范围：0xFF00..0xFFEF
 * @type {Array}
 */
RichTextWrap.HALF_FULL_FORMS = [
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_SUFFIX, // ！
	RichTextWrap.SP_NORMAL, // ＂
	RichTextWrap.SP_NORMAL, // ＃
	RichTextWrap.SP_NORMAL, // ＄
	RichTextWrap.SP_NORMAL, // ％
	RichTextWrap.SP_NORMAL, // ＆
	RichTextWrap.SP_NORMAL, // ＇
	RichTextWrap.SP_PREFIX, // （
	RichTextWrap.SP_SUFFIX, // ）
	RichTextWrap.SP_NORMAL, // ＊
	RichTextWrap.SP_SUFFIX, // ＋
	RichTextWrap.SP_SUFFIX, // ，
	RichTextWrap.SP_SUFFIX, // －
	RichTextWrap.SP_SUFFIX, // ．
	RichTextWrap.SP_SUFFIX, // ／
	RichTextWrap.SP_NORMAL, // ０
	RichTextWrap.SP_NORMAL, // １
	RichTextWrap.SP_NORMAL, // ２
	RichTextWrap.SP_NORMAL, // ３
	RichTextWrap.SP_NORMAL, // ４
	RichTextWrap.SP_NORMAL, // ５
	RichTextWrap.SP_NORMAL, // ６
	RichTextWrap.SP_NORMAL, // ７
	RichTextWrap.SP_NORMAL, // ８
	RichTextWrap.SP_NORMAL, // ９
	RichTextWrap.SP_SUFFIX, // ：
	RichTextWrap.SP_SUFFIX, // ；
	RichTextWrap.SP_SUFFIX, // ＜
	RichTextWrap.SP_SUFFIX, // ＝
	RichTextWrap.SP_SUFFIX, // ＞
	RichTextWrap.SP_SUFFIX, // ？
	RichTextWrap.SP_SUFFIX, // ＠
	RichTextWrap.SP_NORMAL, // Ａ
	RichTextWrap.SP_NORMAL, // Ｂ
	RichTextWrap.SP_NORMAL, // Ｃ
	RichTextWrap.SP_NORMAL, // Ｄ
	RichTextWrap.SP_NORMAL, // Ｅ
	RichTextWrap.SP_NORMAL, // Ｆ
	RichTextWrap.SP_NORMAL, // Ｇ
	RichTextWrap.SP_NORMAL, // Ｈ
	RichTextWrap.SP_NORMAL, // Ｉ
	RichTextWrap.SP_NORMAL, // Ｊ
	RichTextWrap.SP_NORMAL, // Ｋ
	RichTextWrap.SP_NORMAL, // Ｌ
	RichTextWrap.SP_NORMAL, // Ｍ
	RichTextWrap.SP_NORMAL, // Ｎ
	RichTextWrap.SP_NORMAL, // Ｏ
	RichTextWrap.SP_NORMAL, // Ｐ
	RichTextWrap.SP_NORMAL, // Ｑ
	RichTextWrap.SP_NORMAL, // Ｒ
	RichTextWrap.SP_NORMAL, // Ｓ
	RichTextWrap.SP_NORMAL, // Ｔ
	RichTextWrap.SP_NORMAL, // Ｕ
	RichTextWrap.SP_NORMAL, // Ｖ
	RichTextWrap.SP_NORMAL, // Ｗ
	RichTextWrap.SP_NORMAL, // Ｘ
	RichTextWrap.SP_NORMAL, // Ｙ
	RichTextWrap.SP_NORMAL, // Ｚ
	RichTextWrap.SP_PREFIX, // ［
	RichTextWrap.SP_NORMAL, // ＼
	RichTextWrap.SP_SUFFIX, // ］
	RichTextWrap.SP_NORMAL, // ＾
	RichTextWrap.SP_NORMAL, // ＿
	RichTextWrap.SP_NORMAL, // ｀
	RichTextWrap.SP_NORMAL, // ａ
	RichTextWrap.SP_NORMAL, // ｂ
	RichTextWrap.SP_NORMAL, // ｃ
	RichTextWrap.SP_NORMAL, // ｄ
	RichTextWrap.SP_NORMAL, // ｅ
	RichTextWrap.SP_NORMAL, // ｆ
	RichTextWrap.SP_NORMAL, // ｇ
	RichTextWrap.SP_NORMAL, // ｈ
	RichTextWrap.SP_NORMAL, // ｉ
	RichTextWrap.SP_NORMAL, // ｊ
	RichTextWrap.SP_NORMAL, // ｋ
	RichTextWrap.SP_NORMAL, // ｌ
	RichTextWrap.SP_NORMAL, // ｍ
	RichTextWrap.SP_NORMAL, // ｎ
	RichTextWrap.SP_NORMAL, // ｏ
	RichTextWrap.SP_NORMAL, // ｐ
	RichTextWrap.SP_NORMAL, // ｑ
	RichTextWrap.SP_NORMAL, // ｒ
	RichTextWrap.SP_NORMAL, // ｓ
	RichTextWrap.SP_NORMAL, // ｔ
	RichTextWrap.SP_NORMAL, // ｕ
	RichTextWrap.SP_NORMAL, // ｖ
	RichTextWrap.SP_NORMAL, // ｗ
	RichTextWrap.SP_NORMAL, // ｘ
	RichTextWrap.SP_NORMAL, // ｙ
	RichTextWrap.SP_NORMAL, // ｚ
	RichTextWrap.SP_PREFIX, // ｛
	RichTextWrap.SP_NORMAL, // ｜
	RichTextWrap.SP_SUFFIX, // ｝
	RichTextWrap.SP_NORMAL, // ～
	RichTextWrap.SP_PREFIX, // ｟
	RichTextWrap.SP_SUFFIX, // ｠
	RichTextWrap.SP_SUFFIX, // ｡
	RichTextWrap.SP_PREFIX, // ｢
	RichTextWrap.SP_SUFFIX, // ｣
	RichTextWrap.SP_SUFFIX, // ､
	RichTextWrap.SP_SUFFIX, // ･
	RichTextWrap.SP_NORMAL, // ｦ
	RichTextWrap.SP_NORMAL, // ｧ
	RichTextWrap.SP_NORMAL, // ｨ
	RichTextWrap.SP_NORMAL, // ｩ
	RichTextWrap.SP_NORMAL, // ｪ
	RichTextWrap.SP_NORMAL, // ｫ
	RichTextWrap.SP_NORMAL, // ｬ
	RichTextWrap.SP_NORMAL, // ｭ
	RichTextWrap.SP_NORMAL, // ｮ
	RichTextWrap.SP_NORMAL, // ｯ
	RichTextWrap.SP_NORMAL, // ｰ
	RichTextWrap.SP_NORMAL, // ｱ
	RichTextWrap.SP_NORMAL, // ｲ
	RichTextWrap.SP_NORMAL, // ｳ
	RichTextWrap.SP_NORMAL, // ｴ
	RichTextWrap.SP_NORMAL, // ｵ
	RichTextWrap.SP_NORMAL, // ｶ
	RichTextWrap.SP_NORMAL, // ｷ
	RichTextWrap.SP_NORMAL, // ｸ
	RichTextWrap.SP_NORMAL, // ｹ
	RichTextWrap.SP_NORMAL, // ｺ
	RichTextWrap.SP_NORMAL, // ｻ
	RichTextWrap.SP_NORMAL, // ｼ
	RichTextWrap.SP_NORMAL, // ｽ
	RichTextWrap.SP_NORMAL, // ｾ
	RichTextWrap.SP_NORMAL, // ｿ
	RichTextWrap.SP_NORMAL, // ﾀ
	RichTextWrap.SP_NORMAL, // ﾁ
	RichTextWrap.SP_NORMAL, // ﾂ
	RichTextWrap.SP_NORMAL, // ﾃ
	RichTextWrap.SP_NORMAL, // ﾄ
	RichTextWrap.SP_NORMAL, // ﾅ
	RichTextWrap.SP_NORMAL, // ﾆ
	RichTextWrap.SP_NORMAL, // ﾇ
	RichTextWrap.SP_NORMAL, // ﾈ
	RichTextWrap.SP_NORMAL, // ﾉ
	RichTextWrap.SP_NORMAL, // ﾊ
	RichTextWrap.SP_NORMAL, // ﾋ
	RichTextWrap.SP_NORMAL, // ﾌ
	RichTextWrap.SP_NORMAL, // ﾍ
	RichTextWrap.SP_NORMAL, // ﾎ
	RichTextWrap.SP_NORMAL, // ﾏ
	RichTextWrap.SP_NORMAL, // ﾐ
	RichTextWrap.SP_NORMAL, // ﾑ
	RichTextWrap.SP_NORMAL, // ﾒ
	RichTextWrap.SP_NORMAL, // ﾓ
	RichTextWrap.SP_NORMAL, // ﾔ
	RichTextWrap.SP_NORMAL, // ﾕ
	RichTextWrap.SP_NORMAL, // ﾖ
	RichTextWrap.SP_NORMAL, // ﾗ
	RichTextWrap.SP_NORMAL, // ﾘ
	RichTextWrap.SP_NORMAL, // ﾙ
	RichTextWrap.SP_NORMAL, // ﾚ
	RichTextWrap.SP_NORMAL, // ﾛ
	RichTextWrap.SP_NORMAL, // ﾜ
	RichTextWrap.SP_NORMAL, // ﾝ
	RichTextWrap.SP_SUFFIX, // ﾞ
	RichTextWrap.SP_SUFFIX, // ﾟ
	RichTextWrap.SP_NORMAL, // HWHF
	RichTextWrap.SP_NORMAL, // ﾡ
	RichTextWrap.SP_NORMAL, // ﾢ
	RichTextWrap.SP_NORMAL, // ﾣ
	RichTextWrap.SP_NORMAL, // ﾤ
	RichTextWrap.SP_NORMAL, // ﾥ
	RichTextWrap.SP_NORMAL, // ﾦ
	RichTextWrap.SP_NORMAL, // ﾧ
	RichTextWrap.SP_NORMAL, // ﾨ
	RichTextWrap.SP_NORMAL, // ﾩ
	RichTextWrap.SP_NORMAL, // ﾪ
	RichTextWrap.SP_NORMAL, // ﾫ
	RichTextWrap.SP_NORMAL, // ﾬ
	RichTextWrap.SP_NORMAL, // ﾭ
	RichTextWrap.SP_NORMAL, // ﾮ
	RichTextWrap.SP_NORMAL, // ﾯ
	RichTextWrap.SP_NORMAL, // ﾰ
	RichTextWrap.SP_NORMAL, // ﾱ
	RichTextWrap.SP_NORMAL, // ﾲ
	RichTextWrap.SP_NORMAL, // ﾳ
	RichTextWrap.SP_NORMAL, // ﾴ
	RichTextWrap.SP_NORMAL, // ﾵ
	RichTextWrap.SP_NORMAL, // ﾶ
	RichTextWrap.SP_NORMAL, // ﾷ
	RichTextWrap.SP_NORMAL, // ﾸ
	RichTextWrap.SP_NORMAL, // ﾹ
	RichTextWrap.SP_NORMAL, // ﾺ
	RichTextWrap.SP_NORMAL, // ﾻ
	RichTextWrap.SP_NORMAL, // ﾼ
	RichTextWrap.SP_NORMAL, // ﾽ
	RichTextWrap.SP_NORMAL, // ﾾ
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // ￂ
	RichTextWrap.SP_NORMAL, // ￃ
	RichTextWrap.SP_NORMAL, // ￄ
	RichTextWrap.SP_NORMAL, // ￅ
	RichTextWrap.SP_NORMAL, // ￆ
	RichTextWrap.SP_NORMAL, // ￇ
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // ￊ
	RichTextWrap.SP_NORMAL, // ￋ
	RichTextWrap.SP_NORMAL, // ￌ
	RichTextWrap.SP_NORMAL, // ￍ
	RichTextWrap.SP_NORMAL, // ￎ
	RichTextWrap.SP_NORMAL, // ￏ
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // ￒ
	RichTextWrap.SP_NORMAL, // ￓ
	RichTextWrap.SP_NORMAL, // ￔ
	RichTextWrap.SP_NORMAL, // ￕ
	RichTextWrap.SP_NORMAL, // ￖ
	RichTextWrap.SP_NORMAL, // ￗ
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // ￚ
	RichTextWrap.SP_NORMAL, // ￛ
	RichTextWrap.SP_NORMAL, // ￜ
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // ￠
	RichTextWrap.SP_NORMAL, // ￡
	RichTextWrap.SP_NORMAL, // ￢
	RichTextWrap.SP_NORMAL, // ￣
	RichTextWrap.SP_NORMAL, // ￤
	RichTextWrap.SP_NORMAL, // ￥
	RichTextWrap.SP_NORMAL, // ￦
	RichTextWrap.SP_NORMAL, // null
	RichTextWrap.SP_NORMAL, // ￨
	RichTextWrap.SP_NORMAL, // ￩
	RichTextWrap.SP_NORMAL, // ￪
	RichTextWrap.SP_NORMAL, // ￫
	RichTextWrap.SP_NORMAL, // ￬
	RichTextWrap.SP_NORMAL, // ￭
	RichTextWrap.SP_NORMAL, // ￮
	RichTextWrap.SP_NORMAL, // null
];

/**
 * 词的组成部分
 */
RichTextWrap.WORD_ELEMENT = 0;

/**
 * 单独可以作为词
 */
RichTextWrap.WORD_STAND = 1;

/**
 * 词的前缀
 */
RichTextWrap.WORD_PREFIX = 2;

/**
 * 词的后缀
 */
RichTextWrap.WORD_SUFFIX = 3;

/**
 * 词的分隔符
 */
RichTextWrap.WORD_SPLIT = 4;

/**
 * 强制结束
 */
RichTextWrap.WORD_FORCE = 5;

/**
 * 判定一个字符的词分割类型
 */
RichTextWrap._isWordEnd = function(text, startIdx) {
	if (startIdx >= text.length) {
		return RichTextWrap.WORD_FORCE;
	}
	var char = text[startIdx];
	if (char === '\r' || char === '\n') {
		return RichTextWrap.WORD_FORCE;
	}
	else if (char === ' ' || char === '\t') {
		return RichTextWrap.WORD_SPLIT;
	}
	var block = UnicodeBlock.of(char);
	if (block < UnicodeBlock.CJK_START || block > UnicodeBlock.CJK_END) {
		// 不是中日韩文，字符为词的组成
		return RichTextWrap.WORD_ELEMENT;
	}
	if (block === UnicodeBlock.CJK_SYMBOLS_AND_PUNCTUATION) {
		var spType = RichTextWrap.CJK_SP[char.charCodeAt(0) - 0x3000];
		switch (spType) {
			case RichTextWrap.SP_NORMAL: 	// 可以作为单词的符号
				return RichTextWrap.WORD_STAND;
			case RichTextWrap.SP_PREFIX: 	// 作为前缀的符号不能单独作为词
				return RichTextWrap.WORD_PREFIX;
			case RichTextWrap.SP_SUFFIX: 	// 作为后缀的符号强制标记结束
				return RichTextWrap.WORD_SUFFIX;
		}
	}
	else if (block === UnicodeBlock.HALFWIDTH_AND_FULLWIDTH_FORMS) {
		var hfType = RichTextWrap.HALF_FULL_FORMS[char.charCodeAt(0) - 0xff00];
		switch (hfType) {
			case RichTextWrap.SP_NORMAL: 	// 可以作为单词的符号
				return RichTextWrap.WORD_STAND;
			case RichTextWrap.SP_PREFIX: 	// 作为前缀的符号不能单独作为词
				return RichTextWrap.WORD_PREFIX;
			case RichTextWrap.SP_SUFFIX: 	// 作为后缀的符号强制标记结束
				return RichTextWrap.WORD_SUFFIX;
		}
	}
	return RichTextWrap.WORD_STAND;
};

/**
 * 下一个词处理单元
 */
RichTextWrap._nextWord = function(text, startIdx) {
	var len = text.length;
	if (len <= startIdx) {
		return false;
	}

	var char = text[startIdx];
	if (char === '\r') {
		return startIdx + (text[startIdx + 1] === '\n' ? 2 : 1);
	}
	else if (char === '\n') {
		return startIdx + 1;
	}
	else {
		var currCharEndType = RichTextWrap._isWordEnd(text, startIdx);
		var endIdx = startIdx + 1;
		var nextCharEndType = RichTextWrap._isWordEnd(text, endIdx);
		// 如果当前词为前缀，则查找到主体部分
		if (currCharEndType === RichTextWrap.WORD_PREFIX) {
			while (nextCharEndType === RichTextWrap.WORD_PREFIX) {
				currCharEndType = nextCharEndType;
				nextCharEndType = RichTextWrap._isWordEnd(text, ++endIdx);
			}
			if (nextCharEndType === RichTextWrap.WORD_ELEMENT ||
				nextCharEndType === RichTextWrap.WORD_STAND ||
				nextCharEndType === RichTextWrap.WORD_SUFFIX) {
				currCharEndType = nextCharEndType;
				nextCharEndType = RichTextWrap._isWordEnd(text, ++endIdx);
			}
		}
		// 如果当前类型为Element则继续查找所有连续的element
		if (currCharEndType === RichTextWrap.WORD_ELEMENT) {
			while (nextCharEndType === RichTextWrap.WORD_ELEMENT) {
				currCharEndType = nextCharEndType;
				nextCharEndType = RichTextWrap._isWordEnd(text, ++endIdx);
			}
			if (nextCharEndType === RichTextWrap.WORD_SUFFIX) {
				currCharEndType = nextCharEndType;
				nextCharEndType = RichTextWrap._isWordEnd(text, ++endIdx);
			}
		}
		// 如果当前类型为后缀或者词则获取所有的后缀
		if (currCharEndType === RichTextWrap.WORD_STAND ||
			currCharEndType === RichTextWrap.WORD_SUFFIX) {
			while (nextCharEndType === RichTextWrap.WORD_SUFFIX) {
				currCharEndType = nextCharEndType;
				nextCharEndType = RichTextWrap._isWordEnd(text, ++endIdx);
			}
		}

		// 现在的结束点就是一个单独的处理单元
		return endIdx;
	}
};

/**
 * 按词换行
 */
RichTextWrap._nextBlockInNormal = function(context, section, text, startIdx) {
	var len = text.length;
	if (len <= startIdx) {
		return false;
	}
	var style = section.getCurrStyle();
	var currLine = section.getCurrLine();
	var remainSpace = currLine.remainSpace();
	var space = style.charSpace;
	var appendStr, value;

	for (var idx = startIdx; idx < len; ) {
		var wordEnd = RichTextWrap._nextWord(text, idx);
		var word = text.substring(idx, wordEnd);
		if (word === '\n' || word === '\r' || word === '\r\n') {
			if (idx > startIdx) {
				RichTextWrap._appendText(context, section, style, text, startIdx, idx);
			}
			section.closeLastLine();
			return wordEnd;
		}
		else {
			value = style.measureWord(context, word, section.charStep);
			var wordWidth = (value.x + value.width) * section.charStep.width +
							(value.y + value.height) * section.charStep.height +
							+ word.length * space;
			if (startIdx === idx && currLine.elementCount === 0) {
				wordWidth -= space;
			}

			if (wordWidth < remainSpace) {
				remainSpace -= wordWidth;
				idx = wordEnd;
			}
			else if (wordWidth > section.limitLength) {
				// 换行都会越界，则打断显示
				if (idx > startIdx) {
					// 提交前面的文本
					RichTextWrap._appendText(context, section, style, text, startIdx, idx);
				}
				var charIdx = 0;
				do {
					charIdx = RichTextWrap._nextBlockInBreakAll(context, section, word, charIdx);
				} while (charIdx);
				return wordEnd;
			}
			else {
				if (idx > startIdx) {
					// 提交前面的文本
					RichTextWrap._appendText(context, section, style, text, startIdx, idx);
				}
				section.closeLastLine();
				if (word !== ' ' && word !== '\t') {
					RichTextWrap._appendText(context, section, style, word, 0, word.length);
				}
				return wordEnd;
			}
		}
	}

	RichTextWrap._appendText(context, section, style, text, startIdx, len);
	return false;
};

/**
 * 按字符换行
 */
RichTextWrap._nextBlockInBreakAll = function(context, section, text, startIdx) {
	var len = text.length;
	if (len <= startIdx) {
		return false;
	}
	var style = section.getCurrStyle();
	var currLine = section.getCurrLine();
	var remainSpace = currLine.remainSpace();
	var space = style.charSpace;
	var appendStr, value;

	for (var idx = startIdx; idx < len; ++idx) {
		var char = text[idx];
		if (char === '\r') {
			if(idx > startIdx) {
				RichTextWrap._appendText(context, section, style, text, startIdx, idx);
			}
			section.closeLastLine();
			return idx + (text[idx + 1] === '\n' ? 2 : 1);
		}
		else if (char === '\n') {
			if(idx > startIdx) {
				RichTextWrap._appendText(context, section, style, text, startIdx, idx);
			}
			section.closeLastLine();
			return idx + 1;
		}
		else {
			value = style.measure(context, char);

			var charWidth = (value.x + value.width) * section.charStep.width +
							(value.y + value.height) * section.charStep.height +
							+ space;
			if (startIdx === idx && currLine.elementCount === 0) {
				charWidth -= space;
			}
			if (charWidth < remainSpace) {
				remainSpace -= charWidth;
			}
			else {
				if(idx > startIdx) {
					RichTextWrap._appendText(context, section, style, text, startIdx, idx);
				}
				section.closeLastLine();
				if (char !== ' ' && char !== '\t') {
					RichTextWrap._appendText(context, section, style, char, 0, 1);
				}
				return idx + 1;
			}
		}
	}

	RichTextWrap._appendText(context, section, style, text, startIdx, len);
	return false;
};

/**
 * 按换行符换行
 */
RichTextWrap._nextBlockInKeepAll = function(context, section, text, startIdx) {
	var len = text.length;
	if (len <= startIdx) {
		return false;
	}
	var style = section.getCurrStyle();
	for (var idx = startIdx; idx < len; ++idx) {
		var char = text[idx];
		if (char === '\r') {
			if(idx > startIdx) {
				RichTextWrap._appendText(context, section, style, text, startIdx, idx);
			}
			section.closeLastLine();
			return idx + (text[idx + 1] === '\n' ? 2 : 1);
		}
		else if (char === '\n') {
			if(idx > startIdx) {
				RichTextWrap._appendText(context, section, style, text, startIdx, idx);
			}
			section.closeLastLine();
			return idx + 1;
		}
	}
	RichTextWrap._appendText(context, section, style, text, startIdx, len);
	return false;
};

/**
 * 添加块元素
 */
RichTextWrap._wrapBlockInKeepAll = function(context, section, chunk, startIdx) {
    var style = section.getCurrStyle();
    var value = style.measure(context, chunk);
    RichTextWrap._appendElement(section, chunk, value);
	return false;
};

/**
 * 添加块元素
 */
RichTextWrap._wrapBlockInNormal = function(context, section, chunk, startIdx) {
    var currLine = section.getCurrLine();
    var style = section.getCurrStyle();
    var value = style.measure(context, chunk);
    var space = currLine.elementCount > 0 ? style.charSpace : 0;
    var use = (value.x + value.width) * section.charStep.width +
			  (value.y + value.height) * section.charStep.height +
			  + space;
    if (currLine.remainSpace() < use) {
        currLine.close();
    }
    RichTextWrap._appendElement(section, chunk, value);
	return false;
};

/**
 * 添加一个文本绘制元素
 */
RichTextWrap._appendText = function(context, section, style, text, start, end) {
	var value = style.measure(context, text[start]);
	RichTextWrap._appendElement(section, text[start], value);
	for (var idx = start + 1; idx < end; ++idx) {
		value = style.measure(context, text[idx]);
		RichTextWrap._appendElement(section, text[idx], value);
	}
};

/**
 * 添加一个绘制元素
 */
RichTextWrap._appendElement = function(section, text, measureValue) {
    section.appendElement(measureValue.type || 0,
                          text,
                          1,
                          measureValue.x || 0,
                          measureValue.y || 0,
                          measureValue.width || 0,
                          measureValue.height || 0,
                          measureValue.marginLeft || 0,
                          measureValue.marginRight || 0,
                          measureValue.marginTop || 0,
                          measureValue.marginBottom || 0);
};

/**
 * 自动换行
 */
RichTextWrap.wrapChunk = function(section, context, blockStyle, chunk) {
	var func;
    if (chunk.type === RichTextChunk.BLOCK) {
        func = blockStyle === RichTextWrap.BREAK_KEEPALL ? 
        		RichTextWrap._wrapBlockInKeepAll : RichTextWrap._wrapBlockInNormal;
	    var startIdx = 0;
		do {
			startIdx = func(context, section, chunk, startIdx);
		} while (startIdx);	
    }
    else {
        if (blockStyle === RichTextWrap.BREAK_KEEPALL) {
			func = RichTextWrap._nextBlockInKeepAll;
		}
		else if (blockStyle === RichTextWrap.BREAK_BREAKALL) {
			func = RichTextWrap._nextBlockInBreakAll;
		}
		else {
			func = RichTextWrap._nextBlockInNormal;
		}

	    var text = chunk.inner.toString();
	    var startIdx = 0;
		do {
			startIdx = func(context, section, text, startIdx);
		} while (startIdx);	
    }
};

/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 富文本处理类型
 */
var RichTextStyle = com.qici.richText.RichTextStyle = function(symbol, cssFont) {
	var self = this;

	/**
	 * @property {com.qici.richText.RichTextSymbol} symbol - 当前富文本的解析环境
	 */
	self.symbol = symbol || new RichTextSymbol();

	/**
	 * @property {object} _fontComponents - 字体详细属性
	 */
	self._fontComponents = {};

	/**
	 * @property {string} cssFont - 当前使用的字体
	 */
	self.cssFont = cssFont;

	/**
	 * @property {string} fontColor - 文本颜色
	 */
	self.fontColor = 'rgb(0, 0, 0)';

	/**
	 * @property {string} drawStyle - 绘制文字的方式
	 *
	 * 可选值：fill | stroke
	 * 可以通过RichTextStyle.registerDrawStyle注册自己的绘制方式
	 */
	self.drawStyle = 'fill';

	/**
	 * @property {string} textAlign - 文本行的对齐方式
	 *
	 * 可选值：start | end | center | justify
	 */
	self.textAlign = 'left';

	/**
	 * @property {string} verticalAlgin - 文本竖直对齐方式
	 *
	 * 可选值：top | middle | bottom
	 */
	self.verticalAlign = 'bottom';

	/**
	 * @property {number} lineSpace - 行间距
	 */
	self.lineSpace = 0;

	/**
	 * @property {number} charSpace - 字间距，当前标记后的每个字符
	 */
	self.charSpace = 0;

	/**
	 * @property {function} preDrawHandle - 绘制之前的调用
	 */
	self.preDrawHandle = null;

	/**
	 * @property {function} preDrawElementHandle - 绘制块前调用
	 */
	self.preDrawElementHandle = null;

	/**
	 * @property {function} drawElementHandle - 绘制块
	 */
	self.drawElementHandle = null;

	/**
	 * @property {function} postDrawElementHandle - 绘制块完成后调用
	 */
	self.postDrawElementHandle = null;

	/**
	 * @property {function} postDrawHandle - 绘制之后的调用
	 */
	self.postDrawHandle = null;

	/**
	 * @property {function} onClickHandle - 点击事件处理
	 */
	self.onClickHandle = null;

	/**
	 * @property {function} measureHandle - 计算块的显示属性
	 */
	self.measureHandle = null;
};

RichTextStyle.prototype = {};
RichTextStyle.prototype.constuctor = RichTextStyle;

Object.defineProperties(RichTextStyle.prototype,{
	/**
	 * @property {string} cssFont - css字体描述
	 */
	cssFont : {
		get : function() {
			return this._cssFont;
		},
		set : function(v) {
			v = v || 'bold 20pt Arial';
			this._fontComponents = this._fontToComponents(v);
			this.refreshFont();
		}
	},

	/**
	 * @property {string} font -  字体描述
	 */
	font : {
		get : function() {
			return this._fontComponents.fontFamily;
		},
		set : function(value) {
			value = value || 'Arial';
			value = value.trim();
			// If it looks like the value should be quoted, but isn't, then quote it.
	        if (!/^(?:inherit|serif|sans-serif|cursive|fantasy|monospace)$/.exec(value) && !/['",]/.exec(value))
	        {
	            value = "'" + value + "'";
	        }

	        this._fontComponents.fontFamily = value;
	        this.refreshFont();
		}
	},

	/**
	 * @property {number} fontSize - 字体大小
	 */
	fontSize : {
		get : function() {
			var size = this._fontComponents.fontSize;
		    if (size && /(?:^0$|px$)/.exec(size))
		    {
		        return parseInt(size, 10);
		    }
		    else
		    {
		        return size;
		    }		
		},
		set : function(size) {
			size = size || '0';
			if (typeof size === 'number') {
				size = size + 'px';
			}
			this._fontComponents.fontSize = size;
			this.refreshFont();
		}
	},

	/**
	 * @property {string} fontWeight - 字体粗细
	 */
	fontWeight : {
	    get: function() {
	        return this._fontComponents.fontWeight || 'normal';
	    },

	    set: function(value) {

	        value = value || 'normal';
	        this._fontComponents.fontWeight = value;
	        this.refreshFont();

	    }
	},

	/**
	 * @property {string} fontStyle - 字体样式
	 */
	fontStyle : {
	    get: function() {
	        return this._fontComponents.fontStyle || 'normal';
	    },

	    set: function(value) {
	        value = value || 'normal';
	        this._fontComponents.fontStyle = value;
	        this.refreshFont();
	    }
	},

	/**
	 * @property {string} fontVariant - 字体变种
	 */
	fontVariant : {
	    get: function() {
	        return this._fontComponents.fontVariant || 'normal';
	    },

	    set: function(value) {

	        value = value || 'normal';
	        this._fontComponents.fontVariant = value;
	        this.refreshFont();
	    }
	}
});

/**
 * 获取字体
 */
RichTextStyle.prototype.getFont = function() {
	var self = this;
	return self._cssFont;
};

/**
 * 获取字体高度
 */
RichTextStyle.prototype.getFontHeight = function() {
	var self = this;
	return self._fontHeight;
};

/**
 * 测量Word尺寸
 */
RichTextStyle.prototype.measureWord = function(context, word, charStep) {
	var self = this;
	context.font = self.getFont();
	var x = 0,
		y = 0,
		endX = 0,
		endY = 0;
	var idx = -1,
		len = word.length;
	var rect, width;
	if (self.measureHandle) {
		while (++idx < len) {
			rect = self.measureHandle(context, self, word[idx]);
			x = Math.min(x, rect.x + endX * charStep.width);
			y = Math.min(y, rect.y + endY * charStep.height);
			endX = Math.max(endX, rect.x + endX * charStep.width + rect.width);
			endY = Math.max(endY, rect.y + endY * charStep.height + rect.height);
		}
	}
	else {
		while (++idx < len) {
			width = context.measureText(word[idx]).width;
			endX = Math.max(endX, endX * charStep.width + width);
			endY = Math.max(endY, endY * charStep.height + self._fontHeight);
		}
	}
	
	return {
		x : x,
		y : y,
		width : endX - x,
		height : endY - y
	};
};

/**
 * 测量文本宽度
 */
RichTextStyle.prototype.measure = function(context, body) {
	var self = this;
	var rect;
	context.font = self.getFont();
	
	if (self.measureHandle) {
		rect = self.measureHandle(context, self, body);
	}
	else {
		rect = {
			x : 0,
			y : 0,
			width : context.measureText(body).width,
			height : self._fontHeight
		};
	}
	return rect;
};

/**
 * 刷新样式参数
 */
RichTextStyle.prototype.refreshFont = function() {
	var self = this;

	self._cssFont = self._componentsToFont(self._fontComponents);
	self._fontHeight = self._determineFontProperties().fontSize;
};

/**
 * 混合一个样式
 */
RichTextStyle.prototype.mixin = function(style) {
	var self = this;
	var mixin = new RichTextStyle(self.symbol, self.cssFont);
	var idx = 0;
	var keys = Object.keys(self);
	for (idx = 0; idx < keys.length; ++idx) {
		if (keys[idx][0] === '_')
			continue;
		if (typeof self[keys[idx]] !== 'function' || 
			keys[idx].indexOf('Handle'))
			mixin[keys[idx]] = self[keys[idx]];
	}

	keys = Object.keys(style);
	for (idx = 0; idx < keys.length; ++idx) {
		mixin[keys[idx]] = style[keys[idx]];
	}
	return mixin;
};

/**
 * 正式绘制之前的准备工作
 */
RichTextStyle.prototype.preDraw = function(context, block, elementIdx, x, y) {
	var self = this;
	if (self.preDrawHandle) {
		self.preDrawHandle(context, block, elementIdx, x, y);
	}
};

/**
 * 绘制元素
 */
RichTextStyle.prototype.drawElement = function(context, block, elementIdx, x, y) {
	var self = this;
	if (self.verticalAlign === 'bottom') {
		x += (block.line.rect.width - block.rect.width) * block.line.section.lineStep.width;
		y += (block.line.rect.height - block.rect.height) * block.line.section.lineStep.height;
	}
	else if (self.verticalAlign === 'middle') {
		x += (block.line.rect.width - block.rect.width) / 2 * block.line.section.lineStep.width;
		y += (block.line.rect.height - block.rect.height) / 2 * block.line.section.lineStep.height;
	}

	if (self.preDrawElementHandle) {
		self.preDrawElementHandle(context, block, elementIdx, x, y);
	}

	context.font = self.getFont();
	var drawFunction = self.symbol.getDrawStyle(self.drawStyle);

	if (self.drawElementHandle) {
		self.drawElementHandle(context, block, elementIdx, x, y);
	}
	else if (drawFunction) {
		drawFunction(context, block, elementIdx, x, y);
	}

	if (self.postDrawElementHandle) {
		self.postDrawElementHandle(context, block, elementIdx, x, y);
	}
};

/**
 * 正式绘制之后的收尾工作
 */
RichTextStyle.prototype.postDraw = function(context, block, elementIdx, x, y) {
	var self = this;
	if (self.postDrawHandle) {
		self.postDrawHandle(context, block, elementIdx, x, y);
	}
};

/**
 * 添加点击
 */
RichTextStyle.prototype.onClick = function(clickContext, block, x, y) {
	var self = this;
	if (self.onClickHandle) {
		self.onClickHandle(clickContext, block, x, y);
	}
};

/**
 * 从字体获取描述
 */
RichTextStyle.prototype._fontToComponents = function (font) {
    // The format is specified in http://www.w3.org/TR/CSS2/fonts.html#font-shorthand:
    // style - normal | italic | oblique | inherit
    // variant - normal | small-caps | inherit
    // weight - normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit
    // size - xx-small | x-small | small | medium | large | x-large | xx-large,
    //        larger | smaller
    //        {number} (em | ex | ch | rem | vh | vw | vmin | vmax | px | mm | cm | in | pt | pc | %)
    // font-family - rest (but identifiers or quoted with comma separation)
    var m = font.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);

    if (m)
    {
        return {
            font: font,
            fontStyle: m[1] || 'normal',
            fontVariant: m[2] || 'normal',
            fontWeight: m[3] || 'normal',
            fontSize: m[4] || 'medium',
            fontFamily: m[5]
        };
    }
    else
    {
        console.warn("RichTextStyle - unparsable CSS font: " + font);
        return {
            font: font
        };
    }
};

/**
 * 获取字体描述
 */
RichTextStyle.prototype._componentsToFont = function (components) {
    var parts = [];
    var v;

    v = components.fontStyle;
    if (v && v !== 'normal') { parts.push(v); }

    v = components.fontVariant;
    if (v && v !== 'normal') { parts.push(v); }

    v = components.fontWeight;
    if (v && v !== 'normal') { parts.push(v); }

    v = components.fontSize;
    if (v && v !== 'medium') { parts.push(v); }

    v = components.fontFamily;
    if (v) { parts.push(v); }

    if (!parts.length)
    {
        // Fallback to whatever value the 'font' was
        parts.push(components.font);
    }

    return parts.join(" ");
};

/**
 * 获取字体高度属性
 */
RichTextStyle.fontPropertiesCache = {};
RichTextStyle.prototype._determineFontProperties = function() {
	var cssFont = this._cssFont;
    var properties = RichTextStyle.fontPropertiesCache[cssFont];

    if (!properties)
    {
        properties = {};
        if (!RichTextStyle.fontPropertiesCanvas) {
            RichTextStyle.fontPropertiesCanvas = document.createElement('canvas');
            RichTextStyle.fontPropertiesContext = RichTextStyle.fontPropertiesCanvas.getContext('2d');
        }
        var canvas = RichTextStyle.fontPropertiesCanvas;
        var context = RichTextStyle.fontPropertiesContext;

        context.font = cssFont;

        var width = Math.ceil(context.measureText('|MÉq').width);
        if (width === 0) width = 1;
        var baseline = Math.ceil(context.measureText('M').width);

        var height = 2 * baseline;
        if (height === 0) height = 1;

        baseline = baseline * 1.4 | 0;

        canvas.width = width;
        canvas.height = height;

        context.fillStyle = '#f00';
        context.fillRect(0, 0, width, height);

        context.font = cssFont;

        context.textBaseline = 'alphabetic';
        context.fillStyle = '#000';
        context.fillText('|MÉq', 0, baseline);

        var imagedata = context.getImageData(0, 0, width, height).data;
        var pixels = imagedata.length;
        var line = width * 4;

        var i, j;

        var idx = 0;
        var stop = false;

        // ascent. scan from top to bottom until we find a non red pixel
        for (i = 0; i < baseline; i++)
        {
            for (j = 0; j < line; j += 4)
            {
                if (imagedata[idx + j] !== 255)
                {
                    stop = true;
                    break;
                }
            }
            if (!stop)
            {
                idx += line;
            }
            else
            {
                break;
            }
        }

        properties.ascent = baseline - i;

        idx = pixels - line;
        stop = false;

        // descent. scan from bottom to top until we find a non red pixel
        for (i = height; i > baseline; i--)
        {
            for (j = 0; j < line; j += 4)
            {
                if (imagedata[idx + j] !== 255)
                {
                    stop = true;
                    break;
                }
            }
            if (!stop)
            {
                idx -= line;
            }
            else
            {
                break;
            }
        }

        properties.descent = i - baseline;

        properties.fontSize = properties.ascent + properties.descent;

        RichTextStyle.fontPropertiesCache[cssFont] = properties;
    }

    return properties;
};
/**
 * 注册富文本类型
 */
qc.Serializer.registerCustomDeserializer('com.qici.richText.RichText', function(game, parent, uuid) {
	return new com.qici.richText.RichText(game, parent, uuid);
});
/**
 * 富文本绘制控制
 */
var RichText = com.qici.richText.RichText = function(game, parent, uuid) {
    var self = this;
    /**
     * @property {Canvas} canvas - 缓存
     */
    self.canvas = document.createElement('canvas');
    /**
     * @property {Context} context - 绘制上下文
     */
    self.context = self.canvas.getContext('2d');

    /**
     * @property {PIXI.Texture} texture - 贴图缓存
     */
    self.texture = PIXI.Texture.fromCanvas(self.canvas);
    self.texture.baseTexture.resolution = game.resolution;

    /**
     * @property {PIXI.Sprite} sprite - 绘制精灵
     */
    var sprite = self.sprite = new PIXI.Sprite(self.texture);

    /**
     * @property {string} text - 需要绘制的文本
     */
    self.text = '';

    /**
     * @property {com.qici.richText.RichTextSymbol} symbol - 富文本使用的符号环境
     */
    self.symbol = new com.qici.richText.RichTextSymbol(game);

    /**
     * @property {com.qici.richText.RichTextStyle} defaultStyle - 富文本默认的样式
     */
    self.defaultStyle =  new com.qici.richText.RichTextStyle(self.symbol, self.context.font);

    /**
     * @property {Array} richTextChunks - 富文本解析的出来的结构块
     * @type {Array}
     */
    self.richTextChunks = [];

    /**
     * @property {com.qici.richText.RichTextSection} richTextSection - 富文本显示块
     */
    self.richTextSection = new com.qici.richText.RichTextSection(this.width, RichTextWrap.BREAK_KEEPALL, self.defaultStyle, 0);
    self.richTextSection.clickHandleContext = self;

    // 调用基类的初始
    qc.Node.call(this, new Phaser.Group(game.phaser, null), parent, uuid);

    /**
     * @property {string} name - 节点名
     */
    self.name = 'RichText';

    self.phaser._renderSelfCanvas = self._renderSelfCanvas;
    self.phaser._renderSelfWebGL = self._renderSelfWebGL;

    self.phaser.transformCallback = self.onUpdateTransform;
    self.phaser.transformCallbackContext = self;

    self._currCanvasScale = 1;
    self._currCanvasScaleDown = 1;
    self._lastChangeTime = -Infinity;
    self.scaleDirtyInterval = 1000;

    self._updateBounds = true;

    self.addListener(self.onClick, self.doClick, self);

    // 设置绘制代理
    self.phaser.setDisplayProxy(self.sprite, false);
};

RichText.prototype = Object.create(qc.Node.prototype);
RichText.prototype.constructor = RichText;

Object.defineProperties(RichText.prototype,{
	/**
     * @property {string} class - 类的名字
     * @internal
     */
    class : {
        get : function() { return 'com.qici.richText.RichText'; }
    },
    /**
     * @property {string} text - 显示的文本
     */
    'text' : {
        get : function() {
            return this._text;
        },

        set : function(v) {
            if (v === this._text)
                return;
            this._text = v;
            this.rebuildChunks();

            this._needUpdateSection = true;
        }
    },

    /**
     * @property {number} order - 文本显示的顺序
     */
    'order' : {
        get : function() {
            return this.richTextSection.charOrder;
        },
        set : function(v) {
            if (v === this.richTextSection.charOrder)
                return;
            this.richTextSection.charOrder = v;
            this.richTextSection.calcStep();

            this._needUpdateSection = true;
        }
    },

    /**
     * @property {number} wrap - 文本的换行模式
     */
    'wrap' : {
        get : function() {
            return this.richTextSection.breakStyle;
        },
        set : function(v) {
            if (v === this.richTextSection.breakStyle)
                return;
            this.richTextSection.breakStyle = v;

            this._needUpdateSection = true;
        }
    },

    /**
     * @property {string} font - 使用的字体
     */
    'font' : {
    	get : function() {
            var fontName = this.defaultStyle.font.replace(/\'/g, "");
    		return fontName;
    	},
    	set : function(v) {
    		if (v === this.font)
    			return;
    		this.defaultStyle.font = v;

    		this._needUpdateSection = true;
    	}
    }, 

    /**
     * @property {number} fontSize - 默认文本大小
     */
    'fontSize' : {
    	get : function() {
    		return this.defaultStyle.fontSize;
    	},
    	set : function(v) {
    		if (v === this.defaultStyle.fontSize)
    			return;
    		this.defaultStyle.fontSize = v;

    		this._needUpdateSection = true;
    	}
    },

    /**
     * @property {boolean} bold - 是否是粗体
     */
    'bold' : {
        get : function() {
            return this.defaultStyle.fontWeight === 'bold';
        },
        set : function(v) {
            if (v === this.bold)
                return;
            this.defaultStyle.fontWeight = v ? 'bold' : 'normal';

            this._needUpdateSection = true;
        }
    },

    /**
     * @property {boolean} italic - 是否为斜体
     */
    'italic' : {
        get : function() {
            return this.defaultStyle.fontStyle === 'italic';
        },
        set : function(v) {
            if (v === this.italic)
                return;
            this.defaultStyle.fontStyle = v ? 'italic' : 'normal';

            this._needUpdateSection = true;
        }
    },

    /**
     * @property {string} color - 默认文本颜色
     */
    'color' : {
    	get : function() {
            return new qc.Color(this.defaultStyle.fontColor);
        },
        set : function(v) {
            if (!(v instanceof qc.Color))
                throw new Error('Expected qc.Color');

            var value = v.toString('rgb');
            if (value === this.defaultStyle.fontColor)
                return;

            this.defaultStyle.fontColor = value;

            this._needUpdateSection = true;
        }
    },

    /**
     * @property {boolean} updateBounds -  是否根据文本大小更新节点大小
     */
    'updateBounds' : {
        get : function() {
            return this._updateBounds;
        },
        set : function(v) {
            if (v === this._updateBounds)
                return;
            this._updateBounds = v;
            this._needUpdateSection = true;

            this._resizeNode();
        }
    }
});

RichText.prototype.getMeta = function() {
    var json = qc.Node.prototype.getMeta.call(this);
    var Serializer = qc.Serializer;

    // 增加UIText需要序列化的内容
    json.text = Serializer.STRING;
    json.wrap = Serializer.NUMBER;
    json.order = Serializer.NUMBER;

    // json.fontFamily = Serializer.NUMBER;
    // json.alignH = Serializer.NUMBER;
    // json.alignV = Serializer.NUMBER;
    json.font = Serializer.FONT;
    json.bold = Serializer.BOOLEAN;
    json.italic = Serializer.BOOLEAN;
    json.fontSize = Serializer.NUMBER;
    json.color = Serializer.COLOR;
    // json.lineSpace = Serializer.NUMBER;
    // json.charSpace = Serializer.NUMBER;
    json.updateBounds = Serializer.BOOLEAN;
    return json;
};

/**
 * @method onDestroy
 * @overide
 * @internal
 */
RichText.prototype.onDestroy = function() {
    var self = this;

    self.phaser.transformCallback = null;
    self.phaser.transformCallbackContext = null;
    self.richTextSection.clickHandleContext = null;

    // 调用父类的析构
    qc.Node.prototype.onDestroy.call(self);
};

/**
 * 设置节点的宽度
 * @protected
 * @override
 */
RichText.prototype.setWidth = function(w) {
    var self = this;
    qc.Node.prototype.setWidth.call(self, w);
    if (self.richTextSection.charStep.width &&
        self.richTextSection.limitLength !== w) {
        self.richTextSection.limitLength = w;
        self._needUpdateSection = true;
    }
};

/**
 * 设置节点的高度
 * @protected
 * @override
 */
RichText.prototype.setHeight = function(h) {
    var self = this;
    qc.Node.prototype.setHeight.call(self, h);
    if (self.richTextSection.charStep.height &&
        self.richTextSection.limitLength !== h) {
        self.richTextSection.limitLength = h;
        self._needUpdateSection = true;
    }
};

/**
 * 更新
 */
RichText.prototype.update = function() {
	var self = this;

	if (self._needUpdateSection) {
		self.rebuildSection();
		self._needUpdateSection = false;
	}
};

/**
 * 点击处理
 */
RichText.prototype.doClick = function(gameObject, event) {
    var self = this;
    var point = self.toLocal(event.source);

    self.richTextSection.onClick(point.x, point.y);
};

/**
 * 当UpdateTransform更新时
 */
RichText.prototype.onUpdateTransform = function() {
    var self = this,
        sprite = self.sprite,
        section = self.richTextSection;
    var wt = self.phaser.worldTransform;
    var worldScale = self.getWorldScale();
    var canvasScaleX = Math.max(0.2, Math.min(10, Math.abs(worldScale.x)));
    var canvasScaleY = Math.max(0.2, Math.min(10, Math.abs(worldScale.y)));
    var resolution = self.game.resolution;
    var isDesktop = self.game.device.desktop;
    var gameWorldWidth = isDesktop ?  1920 : Math.max(960, self.game.world.width);
    var gameWorldHeight = isDesktop ?  1920 : Math.max(960, self.game.world.height);

    if (canvasScaleX * resolution * section.rect.width > gameWorldWidth) {
        canvasScaleX = gameWorldWidth / (section.rect.width * resolution);
    }
    if (canvasScaleY * resolution * section.rect.height > gameWorldHeight) {
        canvasScaleY = gameWorldHeight / (section.rect.height * resolution);
    }
    var canvasScale = Math.min(canvasScaleX, canvasScaleY);
    var fixedTime = self.game.time.fixedTime;
    var lastChangeTime = self._lastChangeTime || 0;
    if (canvasScale !== self._currCanvasScale && 
        fixedTime - lastChangeTime > self.scaleDirtyInterval) {
        self._currCanvasScale = canvasScale;
        self._lastChangeTime = fixedTime;
        self._needUpdateSection = true;
    }
    if (sprite.tint !== self.phaser.tint) {
        sprite.tint = self.phaser.tint;
    }
    
    var st = sprite.worldTransform;
    st.a = wt.a * self._currCanvasScaleDown;
    st.b = wt.b * self._currCanvasScaleDown;
    st.c = wt.c * self._currCanvasScaleDown;
    st.d = wt.d * self._currCanvasScaleDown;
    st.tx = wt.tx | 0;
    st.ty = wt.ty | 0;
};

/**
 * 重建富文本结构
 */
RichText.prototype.rebuildChunks = function() {
    var self = this;
    self.richTextChunks = com.qici.richText.RichTextParse.parse(self._text);
};

/**
 * 重置缓存大小
 */
RichText.prototype._resizeCanvas = function(width, height) {
	var self = this;
    var resolution = self.texture.baseTexture.resolution = self.game.resolution;
    self.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
    width = width * resolution * self._currCanvasScale;
    height = height * resolution * self._currCanvasScale;
    width = Math.max(1, Math.ceil(width));
    height = Math.max(1, Math.ceil(height));

	self.canvas.width = self.texture.frame.width =
        self.texture.baseTexture.width = self.texture.width =
        self.texture.crop.width = width;

	self.canvas.height = self.texture.frame.height =
        self.texture.baseTexture.height = self.texture.height =
        self.texture.crop.height = height;

    self._currCanvasScaleDown = 1 / self._currCanvasScale;

	self.context.setTransform(1, 0, 0, 1, 0, 0);
	self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);

    self.context.scale(resolution * self._currCanvasScale, resolution * self._currCanvasScale);
};

/**
 * 更新外部范围
 */
RichText.prototype._resizeNode = function() {
    var self = this;
    if (!self._updateBounds)
        return;
    if (self.width !== self.richTextSection.rect.width)
        self.width = self.richTextSection.rect.width;
    if (self.height !== self.richTextSection.rect.height)
        self.height = self.richTextSection.rect.height;
};

/**
 * 重新刷新显示内容
 */
RichText.prototype.rebuildSection = function() {
    var self = this,
        section = self.richTextSection;
    section.build(self.context, self.richTextChunks);
    self._resizeNode();
    self.rebuildTexture();
};

/**
 * 重新绘制显示内容
 */
RichText.prototype.rebuildTexture = function() {
    var self = this,
        section = self.richTextSection;
    /**
     * 更新缓存大小
     */
    self._resizeCanvas(section.rect.width + section.margin.left + section.margin.right,
                      section.rect.height + section.margin.top + section.margin.bottom);

    /**
     * 绘制
     */
    section.render(self.context, section.margin.left | 0, section.margin.top | 0);
    self.texture.baseTexture.dirty();
    self.sprite.cachedTint = self.sprite.tint - 1; 
    self.sprite.displayChanged(qc.DisplayChangeStatus.TEXTURE | qc.DisplayChangeStatus.SIZE);
    self.phaser.displayChanged(qc.DisplayChangeStatus.TEXTURE | qc.DisplayChangeStatus.SIZE);
};

/**
 * 在Canvas环境下绘制
 */
RichText.prototype._renderSelfCanvas = function(renderSession) {
	var self = this,
        sprite = self._qc.sprite;
	sprite._renderCanvas(renderSession);
};

/**
 * 在WebGL环境下绘制
 */
RichText.prototype._renderSelfWebGL = function(renderSession) {
	var self = this,
        sprite = self._qc.sprite;
	sprite._renderWebGL(renderSession);
};
/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 富文本表情注册脚本
 */
var RichTextEmoji = qc.defineBehaviour('com.qici.richText.RichTextEmoji', qc.Behaviour, function() {
	var self = this;

	/**
	 * @property {string} packageName - 表情包名
	 */
	self.packageName = 'emoji';

	/**
	 * @property {qc.Atlas} packageAtlas - 表情包
	 */
	self.packageAtlas = null;
}, {
	richText : qc.Serializer.NODE,
	packageName: qc.Serializer.STRING,
	packageAtlas: qc.Serializer.TEXTURE
});

// 菜单上的显示
RichTextEmoji.__menu = 'UI/RichText/RichTextEmoji';

Object.defineProperties(RichTextEmoji.prototype,{
	/**
	 * @property {string} packageName - 表情包名
	 */
	'packageName' : {
		get : function() {
			return this._packageName;
		},
		set : function(v) {
			if (v === this._packageName)
				return;
			this.unregisterEmoji();
			this._packageName = v;
			this.registerEmoji();
		}
	},
	/**
	 * @property {qc.Atlas} packageAtlas - 表情包
	 */
	'packageAtlas' : {
		get : function() {
			return this._packageAtlas;
		},
		set : function(v) {
			if (v === this._packageAtlas)
				return;
			this.unregisterEmoji();
			this._packageAtlas = v;
			this.registerEmoji();
		}
	},
	/**
	 * @property {qc.Node} richText - 注册到的富文本对象
	 */
	'richText' : {
		get : function() {
			return this._richText;
		},
		set : function(v) {
			if (v === this._richText)
				return;
			this.unregisterEmoji();
			this._richText = v;
			this.registerEmoji();
		}
	}
});

/**
 * 启用
 */
RichTextEmoji.prototype.onEnable = function() {
    this.registerEmoji();
};

/**
 * 停用
 */
RichTextEmoji.prototype.onDisable = function() {
    this.unregisterEmoji();
};

/**
 * 注册表情
 */
RichTextEmoji.prototype.registerEmoji = function() {
	var self = this;
	if (!self._richText ||
		!self._packageAtlas)
		return;

	if (!self.enable) 
		return;
	var symbol = self._richText.symbol;
	symbol.registerEmoji(self._packageName, self._packageAtlas);
};

/**
 * 反注册表情
 */
RichTextEmoji.prototype.unregisterEmoji = function() {
	var self = this;
	if (!self._richText ||
		!self._packageAtlas)
		return;
	var symbol = self._richText.symbol;
	symbol.unregisterEmoji(self._packageName, self._packageAtlas);
};


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

// 注册粒子系统节点的反序列化方法
qc.Serializer.registerCustomDeserializer('qc.ParticleSystem', function(game, parent, uuid) {
    return new qc.ParticleSystem(game, parent, uuid);
});

/**
 * 粒子系统，扩展自qc.Node
 */
var ParticleSystem = qc.ParticleSystem = function(game, parent, uuid) {
    qc.Node.call(this, new Phaser.Group(game.phaser, null), parent, uuid);

    // 默认名字
    this.name = 'Particle System';

    // 是否处于暂停状态
    this.paused = false;

    // 可视化状态变化事件
    this.onVisibleChanged = new qc.Signal();

    // 发射器对象
    this.emitter = null;

    /**
     * @property {Array} textures - 粒子图片数组，当设定了多张图片时，在发射时将随机选取一个
     */
    var builtinAtlas = game.assets.find('__builtin_resource__');
    this.textures = [ builtinAtlas.getTexture('empty.png') ];

    /**
     * @property {number} rendererType - 渲染类型，暂时只支持一种类型
     */
    this.rendererType = qc.ParticleSystem.Renderer.SPRITE;

    /**
     * @property {number} zoneType - 发射区域，支持四种类型：Zone.POINT、Zone.LINE、Zone.CIRCLE、Zone.RECTANGLE
     */
    this.zoneType = qc.ParticleSystem.Zones.Zone.POINT;

    /**
     * @property {number} zoneLength - 发射区域长度，仅当zoneType为Zone.LINE时起效
     */
    this.zoneLength = 100;

    /**
     * @property {number} zoneRotation - 发射区域旋转角度，仅当zoneType为Zone.LINE时起效
     */
    this.zoneRotation = 0;

    /**
     * @property {number} zoneRadius - 发射区域半径，仅当zoneType为Zone.CIRCLE时起效
     */
    this.zoneRadius = 100;

    /**
     * @property {number} zoneWidth - 发射区域宽度，仅当zoneType为Zone.RECTANGLE时起效
     */
    this.zoneWidth = 100;

    /**
     * @property {number} zoneHeight - 发射区域高度，仅当zoneType为Zone.RECTANGEL时起效
     */
    this.zoneHeight = 100;

    /**
     * @property {number} frequency - 发射频率，即多久发射一次粒子，单位为秒
     */
    this.frequency = 0.1;

    /**
     * @property {number} quantity - 每次发射的粒子数量
     */
    this.quantity = 1;

    /**
     * @property {number} repeat - 重复发射次数，-1表示循环发射
     */
    this.repeat = -1;

    /**
     * @property {number} delay - 发射延迟
     */
    this.delay = 0;

    /**
     * @property {Array} lifespan - 粒子生命时长，在指定范围内随机取值
     */
    this.lifespan = [5, 5];

    /**
     * @property {Array} angle - 粒子发射角度，在指定范围内随机取值
     */
    this.angle = [-120, -60];

    /**
     * @property {Number} blendMode - 混合模式
     */
    this.blendMode = Phaser.blendModes.NORMAL;

    /**
     * @property {qc.Color} srcColorTint - 粒子初始颜色
     */
    this.srcColorTint = new qc.Color(0xFFFFFF);

    /**
     * @property {qc.Color} dstColorTint - 粒子目标颜色
     */
    this.dstColorTint = new qc.Color(0xFFFFFF);

    /**
     * @property {Array} startAlpha - 粒子初始透明度，在指定范围内随机取值
     */
    this.startAlpha = [1, 1];

    /**
     * @property {Array} startScale - 粒子初始缩放，在指定范围内随机取值
     */
    this.startScale = [1, 1];

    /**
     * @property {Array} startRotation - 粒子初始旋转，在指定范围内随机取值
     */
    this.startRotation = [0, 0];

    /**
     * @property {Array} startVelocity - 粒子初始速度，在指定范围内随机取值
     */
    this.startVelocity = [100, 100];

    /**
     * @property {Number} angularVelocity - 粒子旋转角速度，在指定范围内随机取值
     */
    this.angularVelocity = [0, 0];

    /**
     * @property {qc.Point} gravity - 重力
     */
    this.gravity = new qc.Point(0, 0);

    /**
     * @property {number} maxParticles - 最大粒子数量，当粒子数量超过此值时将停止发射粒子
     */
    this.maxParticles = 200;

    /**
     * @property {boolean} playOnAwake - 粒子系统激活时是否自动开始发射
     */
    this.playOnAwake = true;

    /**
     * @property {boolean} enableColorCurve - 是否开启颜色控制曲线
     */
    this.enableColorCurve = false;

    /**
     * @property {qc.BezierCurve} colorCurve - 粒子颜色控制曲线，若将此项关闭则粒子颜色将在起始颜色和目标颜色之间线性变化
     */
    this.colorCurve = new qc.BezierCurve(new qc.Keyframe(0, 0, 0, 0), new qc.Keyframe(1, 1, 0, 0));

    /**
     * @property {boolean} enableAlphaCurve - 是否开启透明度控制曲线
     */
    this.enableAlphaCurve = false;

    /**
     * @property {qc.BezierCurve} alphaCurve - 粒子透明度控制曲线
     */
    this.alphaCurve = new qc.BezierCurve(new qc.Keyframe(0, 1, 0, 0), new qc.Keyframe(1, 1, 0, 0));

    /**
     * @property {boolean} enableScaleCurve - 是否开启缩放控制曲线
     */
    this.enableScaleCurve = false;

    /**
     * @property {qc.BezierCurve} scaleCurve - 粒子缩放控制曲线
     */
    this.scaleCurve = new qc.BezierCurve(new qc.Keyframe(0, 1, 0, 0), new qc.Keyframe(1, 1, 0, 0));

    /**
     * @property {boolean} enableVelocityCurve - 是否开启速度控制曲线
     */
    this.enableVelocityCurve = false;

    /**
     * @property {qc.BezierCurve} velocityCurve - 粒子速度控制曲线
     */
    this.velocityCurve = new qc.BezierCurve(new qc.Keyframe(0, 1, 0, 0), new qc.Keyframe(1, 1, 0, 0));

    /**
     * @property {boolean} enableAngularVelocityCurve - 是否开启角速度控制曲线
     */
    this.enableAngularVelocityCurve = false;

    /**
     * @property {qc.BezierCurve} angularVelocityCurve - 粒子角速度控制曲线
     */
    this.angularVelocityCurve = new qc.BezierCurve(new qc.Keyframe(0, 1, 0, 0), new qc.Keyframe(1, 1, 0, 0));

    var restore = uuid !== undefined;
    if (!restore) {
        this.initEmitter();
    }
}
ParticleSystem.prototype = Object.create(qc.Node.prototype);
ParticleSystem.prototype.constructor = ParticleSystem;

// 定义命名空间
qc.ParticleSystem.Transitions = {};
qc.ParticleSystem.Zones = {};
qc.ParticleSystem.Renderer = {};

qc.ParticleSystem.Renderer.SPRITE = 1;

Object.defineProperties(ParticleSystem.prototype, {
    /**
     * @property {string} class - 类名字
     * @readonly
     * @internal
     */
    'class': {
        get: function() { return 'qc.ParticleSystem'; }
    }
});

/**
 * 帧调度，更新粒子发射器
 */
ParticleSystem.prototype.update = function() {
    if (this.paused)
        return;

    var elapsed = this.game.time.deltaTime * 0.001;
    this.emitter.update(elapsed);
}

/**
 * 初始化发射器
 */
ParticleSystem.prototype.initEmitter = function() {
    var emitter = new qc.ParticleSystem.Emitter(this);
    this.emitter = emitter;

    emitter.init();

    if (!this.isWorldVisible() || !this.playOnAwake)
        this.pause();
    else
        this.start();
}

/**
 * 开始发射粒子
 */
ParticleSystem.prototype.start = function() {
    if (!this.isWorldVisible())
        return;

    this.paused = false;
    this.emitter.start();
}

/**
 * 暂停发射粒子
 */
ParticleSystem.prototype.pause = function() {
    this.paused = true;

    this.emitter.pause();
}

/**
 * 清除所有已发射的粒子
 */
ParticleSystem.prototype.clear = function() {
    this.emitter.clear();
}

/**
 * 重置粒子发射
 */
ParticleSystem.prototype.reset = function() {
    this.emitter.reset();
}

/**
 * 反序列化完成，创建粒子发射器并尝试开始发射
 */
ParticleSystem.prototype.onDeserialized = function() {
    this.initEmitter();
}

/**
 * 销毁粒子系统
 */
ParticleSystem.prototype.onDestroy = function() {
    this.emitter.destroy();
    this.emitter = null;

    // 调用父类的析构
    qc.Node.prototype.onDestroy.call(this);
}

/**
 * 父亲或自身的可见属性发生变化了
 */
ParticleSystem.prototype.onVisibleChange = function() {
    if (this.emitter === null)
        return;

    // 派发事件
    this.onVisibleChanged.dispatch();

    if (this.isWorldVisible())
        this.start();
    else {
        this.clear();
        this.pause();
    }
};

/**
 * 获取需要被序列化的信息描述
 * @overide
 * @internal
 */
ParticleSystem.prototype.getMeta = function() {
    var self = this;

    var s = qc.Serializer;
    var json = qc.Node.prototype.getMeta.call(this);

    json.rendererType           = s.NUMBER;
    json.textures               = s.TEXTURES;
    json.zoneType               = s.NUMBER;
    json.zoneLength             = s.NUMBER;
    json.zoneRotation           = s.NUMBER;
    json.zoneRadius             = s.NUMBER;
    json.zoneWidth              = s.NUMBER;
    json.zoneHeight             = s.NUMBER;
    json.frequency              = s.NUMBER;
    json.quantity               = s.NUMBER;
    json.repeat                 = s.NUMBER;
    json.delay                  = s.NUMBER;
    json.lifespan               = s.NUMBERS;
    json.angle                  = s.NUMBERS;
    json.blendMode              = s.NUMBER;
    json.srcColorTint           = s.COLOR;
    json.dstColorTint           = s.COLOR;
    json.startAlpha             = s.NUMBERS;
    json.startScale             = s.NUMBERS;
    json.startRotation          = s.NUMBERS;
    json.startVelocity          = s.NUMBERS;
    json.angularVelocity        = s.NUMBERS;
    json.gravity                = s.POINT;
    json.maxParticles           = s.NUMBER;
    json.playOnAwake            = s.BOOLEAN;
    json.enableColorCurve       = s.BOOLEAN;
    json.colorCurve             = s.GEOM;
    json.enableAlphaCurve       = s.BOOLEAN;
    json.alphaCurve             = s.GEOM;
    json.enableScaleCurve       = s.BOOLEAN;
    json.scaleCurve             = s.GEOM;
    json.enableVelocityCurve    = s.BOOLEAN;
    json.velocityCurve          = s.GEOM;
    json.enableAngularVelocityCurve = s.BOOLEAN;
    json.angularVelocityCurve   = s.GEOM;

    return json;
};


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 粒子Transform控制器
 */
var Transform = qc.ParticleSystem.Transitions.Transform = function(particle) {
    this.particle = particle;
    this.particleSystem = particle.emitter.owner;
    this.time = particle.emitter.game.time;
    this.gravity = new Phaser.Point();
    this.x = 0;
    this.y = 0;
    this.anchor = {
        x: 0.5,
        y: 0.5
    }

    this.velocity = {
        x: 0,
        y: 0
    };
    this.originVelocity = {
        x: 0,
        y: 0
    };

    this.scale = this.originScale = 1;
    this.rotation = 0;
    this.originAngularVelocity = 0;
};
Transform.prototype.constructor = Transform;

/**
 * 初始化方法
 */
Transform.prototype.init = function(x, y) {
    this.x = x;
    this.y = y;
    this.gravity = this.particleSystem.gravity;

    var angle = qc.ParticleSystem.Util.getRandom(this.particleSystem.angle);
    var magnitude = qc.ParticleSystem.Util.getRandom(this.particleSystem.startVelocity);
    var radian = angle * Math.PI / 180;
    this.velocity.x = this.originVelocity.x = magnitude * Math.cos(radian);
    this.velocity.y = this.originVelocity.y = magnitude * Math.sin(radian);

    this.scale = this.originScale = qc.ParticleSystem.Util.getRandom(this.particleSystem.startScale);
    this.rotation = qc.ParticleSystem.Util.getRandom(this.particleSystem.startRotation) * Math.PI / 180;
    this.originAngularVelocity = qc.ParticleSystem.Util.getRandom(this.particleSystem.angularVelocity) * Math.PI / 180;
}

/**
 * 帧调度
 */
Transform.prototype.update = function(elapsed, clampLife) {
    var t = clampLife;

    // 重力改变速度
    this.originVelocity.x += this.gravity.x * elapsed;
    this.originVelocity.y += this.gravity.y * elapsed;

    // 通过曲线控制粒子速度
    if (this.particleSystem.enableVelocityCurve) {
        var velocityFactor = this.particleSystem.velocityCurve.evaluate(t);
        this.velocity.x = this.originVelocity.x * velocityFactor;
        this.velocity.y = this.originVelocity.y * velocityFactor;
    }
    else {
        this.velocity.x = this.originVelocity.x;
        this.velocity.y = this.originVelocity.y;
    }

    this.x += this.velocity.x * elapsed;
    this.y += this.velocity.y * elapsed;

    // 通过曲线控制粒子的缩放
    if (this.particleSystem.enableScaleCurve) {
        var scaleFactor = this.particleSystem.scaleCurve.evaluate(t);
        this.scale = this.originScale * scaleFactor;
    }

    // 通过曲线控制粒子的旋转
    if (this.originAngularVelocity !== 0) {
        var angularVelocity = this.originAngularVelocity;
        if (this.particleSystem.enableAngularVelocityCurve) {
            angularVelocity *= this.particleSystem.angularVelocityCurve.evaluate(t);
        }

        this.rotation += angularVelocity * elapsed;
    }
}

/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 发射区域
 */
var Zone = qc.ParticleSystem.Zones.Zone = function() {
    // 发射的几何形状，可能是Point、Line、Rectangle、Circle等等
    this.geometry = null;

    // 缓存位置
    this._random = new qc.Point();
};
Zone.prototype.constructor = Zone;

// 发射区域类型
Zone.POINT      = 1;    // 点
Zone.LINE       = 2;    // 线段
Zone.RECTANGLE  = 3;    // 矩形
Zone.CIRCLE     = 4;    // 圆

/**
 * 生成一个随机发射位置
 */
Zone.prototype.getRandom = function() {
    return this._random;
}

/**
 * 发射粒子
 */
Zone.prototype.emit = function(emitter, quantity) {
    for (var i = 0; i < quantity; i++) {
        this.getRandom();
        emitter.emitParticle(this._random.x, this._random.y, emitter);
    }
}

/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 粒子对象
 */
var Particle = qc.ParticleSystem.Particle = function(emitter) {
    this.emitter        = emitter;
    this.particleSystem = emitter.owner;
    this.renderer       = emitter.renderer;
    this.game           = this.emitter.owner.game;

    // 是否需要手动调用 displayChanged
    this.manualDisplayChanged = this.game.phaser.renderType === Phaser.CANVAS && this.game.dirtyRectangle.enable;

    // 是否存活
    this.alive = true;

    this.life = 0;

    // 粒子对应的Phaser.Sprite对象
    this.sprite = null;

    // 粒子位置变化控制器
    this.transform = new qc.ParticleSystem.Transitions.Transform(this);

    // 粒子颜色变化控制器
    this.color = new qc.ParticleSystem.Transitions.Color(this);
};
Particle.prototype.constructor = Particle;

/**
 * 粒子初始化
 */
Particle.prototype.init = function(x, y) {
    this.life = 0;
    this.alive = true;
    this.lifespan = qc.ParticleSystem.Util.getRandom(this.particleSystem.lifespan);

    this.create(x, y);

    // 缓存生成粒子时发射器的位置，并重载粒子的updateTransform方法，以使粒子位置不受父节点的影响
    this.cacheParentWorldTransform();
    this.sprite.updateTransform = Particle.updateTransform;
}

/**
 * 根据粒子配置创建粒子
 */
Particle.prototype.create = function(x, y) {
    var textures = this.particleSystem.textures;

    this.transform.init(x, y);
    this.color.init();

    if (this.alive) {
        var sprite = this.renderer.add(this, textures);
        this.renderer.update(this);
    }

    // 马上更新一帧，让控制曲线做一次采样
    this.transform.update(0, 0);
    this.color.update(0, 0);

    // canvas模式且开启了脏矩形，需要手动调用displayChanged
    if (this.manualDisplayChanged)
        this.sprite.displayChanged(qc.DisplayChangeStatus.SHOW);
}

/**
 * 帧调度
 */
Particle.prototype.update = function(elapsed) {
    this.life += elapsed;

    if (this.life < this.delay)
        this.sprite.visible = false;
    else
        this.sprite.visible = true;

    this.renderer.update(this);

    var clampLife = Phaser.Math.clamp(this.life / this.lifespan, 0 , 1);
    this.transform.update(elapsed, clampLife);
    this.color.update(elapsed, clampLife);

    if (this.life >= this.lifespan) {
        this.terminate();
        return;
    }
}

/**
 * 粒子消亡
 */
Particle.prototype.terminate = function() {
    this.alive = false;

    this.sprite.kill();

    // canvas模式且开启了脏矩形，需要手动调用displayChanged
    if (this.manualDisplayChanged)
        this.sprite.displayChanged(qc.DisplayChangeStatus.HIDE);
}

/**
 * 缓存生成粒子时发射器的位置
 */
Particle.prototype.cacheParentWorldTransform = function() {
    if (!this.sprite)
        return;

    var wt = this.emitter.owner.phaser.worldTransform;
    var wt2 = this.sprite._parentWorldTransform = new qc.Matrix()
    wt2.a = wt.a;
    wt2.b = wt.b;
    wt2.c = wt.c;
    wt2.d = wt.d;
    wt2.tx = wt.tx;
    wt2.ty = wt.ty;
}

/**
 * 重载粒子的updateTransform方法，保证粒子对象不收其父亲的移动影响
 */
Particle.updateTransform = function() {
    if (!this.parent || !this.visible) return;

    // create some matrix refs for easy access
    var pt = this._parentWorldTransform;
    if (!pt) return;
    var wt = this.worldTransform;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    // so if rotation is between 0 then we can simplify the multiplication process..
    if (this.rotation % PIXI.PI_2)
    {
        // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
        if (this.rotation !== this.rotationCache)
        {
            this.rotationCache = this.rotation;
            this._sr = Math.sin(this.rotation);
            this._cr = Math.cos(this.rotation);
        }

        // get the matrix values of the displayobject based on its transform properties..
        a  =  this._cr * this.scale.x;
        b  =  this._sr * this.scale.x;
        c  = -this._sr * this.scale.y;
        d  =  this._cr * this.scale.y;
        tx =  this.position.x;
        ty =  this.position.y;

        // check for pivot.. not often used so geared towards that fact!
        if (this.pivot.x || this.pivot.y)
        {
            tx -= this.pivot.x * a + this.pivot.y * c;
            ty -= this.pivot.x * b + this.pivot.y * d;
        }

        // concat the parent matrix with the objects transform.
        wt.a  = a  * pt.a + b  * pt.c;
        wt.b  = a  * pt.b + b  * pt.d;
        wt.c  = c  * pt.a + d  * pt.c;
        wt.d  = c  * pt.b + d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }
    else
    {
        // lets do the fast version as we know there is no rotation..
        a  = this.scale.x;
        d  = this.scale.y;

        tx = this.position.x - this.pivot.x * a;
        ty = this.position.y - this.pivot.y * d;

        wt.a  = a  * pt.a;
        wt.b  = a  * pt.b;
        wt.c  = d  * pt.c;
        wt.d  = d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }

    // multiply the alphas..
    this.worldAlpha = this.alpha;

    //  Custom callback?
    if (this.transformCallback)
    {
        this.transformCallback.call(this.transformCallbackContext, wt, pt);
    }
};


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

var Sprite = qc.ParticleSystem.Renderer.Sprite = function(emitter) {
    this.emitter = emitter;
    this.display = emitter.owner.phaser;
};
Sprite.prototype.constructor = Sprite;

// 创建一个Phaser.Sprite用于呈现粒子
Sprite.prototype.add = function(particle, textures) {
    var texture = this.emitter.game.rnd.pick(textures);
    var url   = texture.atlas.url;
    var frame = texture.frame;

    var sprite = particle.sprite;
    if (sprite) {
        sprite.reset(particle.transform.x, particle.transform.y);
        if (sprite.key !== url) {
            sprite.loadTexture(url, frame);
        }
        else {
            sprite.frameName = frame;
        }
    }
    else {
        sprite = this.display.create(particle.transform.x, particle.transform.y, url, frame);
    }

    // 初始化粒子属性
    sprite.anchor.set(particle.transform.anchor.x, particle.transform.anchor.y);
    sprite.blendMode = particle.color.blendMode;

    particle.sprite = sprite;

    return sprite;
}

/**
 * 帧调度，更新 Sprite 的位置、缩放、颜色等信息
 */
Sprite.prototype.update = function(particle) {
    var displayChangeStatus = 0x0;

    var sprite = particle.sprite;
    if (sprite.x !== particle.transform.x || sprite.y !== particle.transform.y) {
        displayChangeStatus |= qc.DisplayChangeStatus.OFFSET;

        sprite.x = particle.transform.x;
        sprite.y = particle.transform.y;
    }

    if (sprite.scale.x !== particle.transform.scale) {
        displayChangeStatus |= qc.DisplayChangeStatus.SCALE;

        sprite.scale.x = particle.transform.scale;
        sprite.scale.y = particle.transform.scale;
    }

    if (sprite.rotation !== particle.transform.rotation) {
        displayChangeStatus |= qc.DisplayChangeStatus.ROTATION;

        sprite.rotation = particle.transform.rotation;
    }

    if (sprite.tint !== particle.color.hexColor) {
        displayChangeStatus |= qc.DisplayChangeStatus.TINT;

        sprite.tint = particle.color.hexColor;
    }

    if (sprite.alpha !== particle.color.alpha) {
        displayChangeStatus |= qc.DisplayChangeStatus.ALPHA;

        sprite.alpha = particle.color.alpha;
    }

    // canvas模式且开启了脏矩形，需要手动调用displayChanged
    if (particle.manualDisplayChanged)
        sprite.displayChanged(displayChangeStatus);
}


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 粒子颜色控制器
 */
var Color = qc.ParticleSystem.Transitions.Color = function(particle) {
    this.particle = particle;
    this.particleSystem = particle.emitter.owner;
    this.time = particle.emitter.game.time;

    // 混合模式
    this.blendMode = Phaser.blendModes.NORMAL;

    // 粒子混合颜色
    this.colorTint = new qc.Color(0xFFFFFF);
    this.hexColor = this.colorTint.toNumber();

    // 粒子透明度
    this.alpha = this.originAlpha = 1;
};
Color.prototype.constructor = Color;

/**
 * 初始化方法
 */
Color.prototype.init = function() {
    this.alpha = this.originAlpha = qc.ParticleSystem.Util.getRandom(this.particleSystem.startAlpha);
    this.colorTint = new qc.Color(this.particleSystem.srcColorTint.toNumber());
    this.hexColor = this.colorTint.toNumber();
    this.blendMode = this.particleSystem.blendMode;
}

/**
 * 帧调度
 */
Color.prototype.update = function(elapsed, clampLife) {
    // 通过曲线刷新粒子颜色和透明度
    var t = clampLife;

    var from = this.particleSystem.srcColorTint.rgb;
    var to   = this.particleSystem.dstColorTint.rgb;
    if (from[0] !== to[0] || from[1] !== to[1] || from[2] !== to[2]) {
        var factor;
        if (this.particleSystem.enableColorCurve) {
            factor = this.particleSystem.colorCurve.evaluate(t);
        }
        else {
            factor = t;
        }

        if (from[0] !== to[0])
            this.colorTint.r = Phaser.Math.clamp(Math.round(from[0] + factor * (to[0] - from[0])), 0, 255);

        if (from[1] !== to[1])
            this.colorTint.g = Phaser.Math.clamp(Math.round(from[1] + factor * (to[1] - from[1])), 0, 255);

        if (from[2] !== to[2])
            this.colorTint.b = Phaser.Math.clamp(Math.round(from[2] + factor * (to[2] - from[2])), 0, 255);

        this.hexColor = this.colorTint.toNumber();
    }

    if (this.particleSystem.enableAlphaCurve) {
        var alphaFactor = this.particleSystem.alphaCurve.evaluate(t);
        this.alpha = this.originAlpha * alphaFactor;
    }
}

/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 粒子信息查看器
 * @class qc.EmitterViewer
 */
var EmitterViewer = qc.defineBehaviour('qc.EmitterViewer', qc.Behaviour, function() {
        var self = this;

        self.now = self.game.time.now;
        self.runInEditor = true;
        self.debugOn = true;

        // 多久统计1次，单位为秒
        self.duration = 1;
    },
    {
        debugOn: qc.Serializer.BOOLEAN,
        particleSystem: qc.Serializer.NODE
    }
);

// 菜单上的显示
EmitterViewer.__menu = 'Debug/EmitterViewer';

Object.defineProperties(EmitterViewer.prototype, {
    /**
     * @property {boolean} debugOn - 调试开关是否开启
     */
    debugOn: {
        get: function()  { return this._debugOn; },
        set: function(v) { this._debugOn = v;    }
    },

    /**
     * @property {qc.Node} particleSystem - 关联的粒子系统节点
     */
    particleSystem: {
        get: function()  { return this._particleSystem; },
        set: function(v) { this._particleSystem = v;    }
    }
});

EmitterViewer.prototype.postUpdate = function() {
    if (!this.particleSystem)
        return;

    if (!this.debugOn)
        return;

    var now = this.game.time.now;
    if (now - this.now >= this.duration * 1000) {
        var emitter = this.particleSystem.emitter;
        if (emitter === null)
            return;

        var text = qc.Util.formatString('\n\n({0})\nAlive:{1}\nDead:{2}\nTotal:{3}',
            this.particleSystem.name,
            emitter.list.length,
            emitter.pool.length,
            emitter.list.length + emitter.pool.length);

        if (this.gameObject instanceof qc.UIText)
            this.gameObject.text = text;
        else if (this.gameObject instanceof qc.Dom) {
            text = text.replace(/\n/g, '<br/>');
            this.gameObject.innerHTML = text;
        }
    }
};


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 粒子系统工具库
 */
qc.ParticleSystem.Util = {
    /**
     * 从指定的最小最大值范围内取一个随机值
     */
    getRandom: function(data) {
        if (!Array.isArray(data) || data.length < 2) {
            return 0;
        }

        var min = data[0] || 0;
        var max = data[1] || 0;

        var t = Math.random();
        var rnd = min + t * (max - min);
        return rnd;
    }
};

/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 圆形发射区域
 */
var Circle = qc.ParticleSystem.Zones.Circle = function(radius) {
    qc.ParticleSystem.Zones.Zone.call(this);

    this.geometry = new qc.Circle(0, 0, radius * 2);
};
Circle.prototype = Object.create(qc.ParticleSystem.Zones.Zone.prototype);
Circle.prototype.constructor = Circle;

/**
 * 生成一个随机发射位置
 */
Circle.prototype.getRandom = function() {
    var t = 2 * Math.PI * Math.random();

    this._random.x = this.geometry.x + this.geometry.radius * Math.random() * Math.cos(t);
    this._random.y = this.geometry.y + this.geometry.radius * Math.random() * Math.sin(t);
}


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 直线发射区域
 */
var Line = qc.ParticleSystem.Zones.Line = function(length, rotation) {
    qc.ParticleSystem.Zones.Zone.call(this);

    var radian = rotation * Math.PI / 180;
    var x1 = length / 2 * Math.cos(radian);
    var y1 = length / 2 * Math.sin(radian);
    var x2 = -x1;
    var y2 = -y1;
    this.geometry = new qc.Line(x1, y1, x2, y2);
};
Line.prototype = Object.create(qc.ParticleSystem.Zones.Zone.prototype);
Line.prototype.constructor = Line;

/**
 * 生成一个随机发射位置
 */
Line.prototype.getRandom = function() {
    var t = Math.random();

    this._random.x = this.geometry.start.x + t * (this.geometry.end.x - this.geometry.start.x);
    this._random.y = this.geometry.start.y + t * (this.geometry.end.y - this.geometry.start.y);
}


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 点状发射区域
 */
var Point = qc.ParticleSystem.Zones.Point = function() {
    qc.ParticleSystem.Zones.Zone.call(this);

    this.geometry = new qc.Point();
};
Point.prototype = Object.create(qc.ParticleSystem.Zones.Zone.prototype);
Point.prototype.constructor = Point;

/**
 * 生成一个随机发射位置
 */
Point.prototype.getRandom = function() {
    this._random = this.geometry;
}


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 矩形发射区域
 */
var Rectangle = qc.ParticleSystem.Zones.Rectangle = function(width, height) {
    qc.ParticleSystem.Zones.Zone.call(this);

    var x = -width / 2;
    var y = -height / 2;
    this.geometry = new qc.Rectangle(x, y, width, height);
};
Rectangle.prototype = Object.create(qc.ParticleSystem.Zones.Zone.prototype);
Rectangle.prototype.constructor = Rectangle;

/**
 * 生成一个随机发射位置
 */
Rectangle.prototype.getRandom = function() {
    var t1 = Math.random();
    var t2 = Math.random();

    this._random.x = this.geometry.x + t1 * this.geometry.width;
    this._random.y = this.geometry.y + t2 * this.geometry.height;
}


/**
 * @author lijh
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 粒子发射器
 */
var Emitter = qc.ParticleSystem.Emitter = function(owner) {
    this.game  = owner.game.phaser;

    // 发射器所属的粒子系统
    this.owner = owner;

    // 粒子类型
    this.particleClass = qc.ParticleSystem.Particle;

    // 正在显示的粒子列表
    this.list = [];

    // 被回收的粒子列表
    this.pool = [];

    // 是否处于暂停状态
    this.paused = false;
};
Emitter.prototype.constructor = Emitter;

/**
 * 初始化粒子发射器
 */
Emitter.prototype.init = function() {
    // 创建粒子渲染器
    this.renderer = this.createRenderer(this.owner.rendererType);

    // 初始化粒子发射区域
    this.zone = this.createZone();

    // 创建发射定时器
    this.timer = this.game.time.create(false);
}

/**
 * 开始发射粒子
 */
Emitter.prototype.start = function() {
    this.paused = false;

    if (!this.timer.running) {
        var repeat = this.owner.repeat;

        var frequency = this.owner.frequency * 1000;
        if (repeat === -1) {
            this.timer.loop(frequency, this.emitImp, this);
        }
        else if (repeat > 0) {
            this.timer.repeat(frequency, repeat, this.emitImp, this);
        }
        this.timer.start(this.owner.delay * 1000);
    }
    else {
        this.timer.resume();
    }
}

/**
 * 暂停发射粒子
 */
Emitter.prototype.pause = function() {
    this.paused = true;

    this.timer.pause();
}

/**
 * 帧调度，更新所有粒子
 */
Emitter.prototype.update = function(elapsed) {
    // 反向遍历，以便在循环中删除元素
    for (var i = this.list.length - 1; i >= 0; i--) {
        var particle = this.list[i];

        particle.update(elapsed);

        // 粒子已死亡，从显示队列中移除，并放入回收队列
        if (!particle.alive) {
            this.pool.push(particle);
            this.list.splice(i, 1);
        }
    }
}

/**
 * 清除所的粒子
 */
Emitter.prototype.clear = function() {
    for (var i = 0; i < this.list.length; i++) {
        var particle = this.list[i];
        particle.terminate();
    }

    this.list = [];
    this.pool = [];
}

/**
 * 重置粒子发射器，通常用于编辑器调用
 */
Emitter.prototype.reset = function() {
    this.clear();

    this.renderer = null;
    this.zone = null;
    this.timer.destroy();

    this.init();
}

/**
 * 销毁发射器
 */
Emitter.prototype.destroy = function() {
    this.clear();

    this.renderer = null;
    this.zone = null;
    this.timer.destroy();
    this.timer = null;
}

/**
 * 生成一个粒子
 */
Emitter.prototype.emitParticle = function(x, y, emitter) {
    // 超过粒子数量上限，不再发射
    if (this.list.length >= this.owner.maxParticles)
        return;

    var particle = this.pool.pop();
    if (!particle)
        particle = new this.particleClass(this);

    // 初始化粒子
    particle.init(x, y);

    if (particle.alive) {
        this.list.push(particle);
    }
    else {
        this.pool.push(particle);
    }
}

Emitter.prototype.emitImp = function() {
    var quantity = this.owner.quantity;

    if (this.zone) {
        this.zone.emit(this, quantity);
    }
}

/**
 * 创建粒子渲染器
 * @private
 */
Emitter.prototype.createRenderer = function(rendererType) {
    rendererType = rendererType || qc.ParticleSystem.RENDER_TYPE_SPRITE;

    var renderer;
    switch (rendererType) {
        case qc.ParticleSystem.Renderer.SPRITE:
            renderer = new qc.ParticleSystem.Renderer.Sprite(this);
            break;

        default:
            console.error("Invalid renderer type " + rendererType);
    }

    return renderer;
}

/**
 * 创建粒子发射区域
 * @private
 */
Emitter.prototype.createZone = function() {
    var type = this.owner.zoneType;

    var zone;
    switch (type) {
        case qc.ParticleSystem.Zones.Zone.POINT:
            zone = new qc.ParticleSystem.Zones.Point();
            break;

        case qc.ParticleSystem.Zones.Zone.LINE:
            var length = this.owner.zoneLength;
            var rotation = this.owner.zoneRotation;
            zone = new qc.ParticleSystem.Zones.Line(length, rotation);
            break;

        case qc.ParticleSystem.Zones.Zone.CIRCLE:
            var radius = this.owner.zoneRadius;
            zone = new qc.ParticleSystem.Zones.Circle(radius);
            break;

        case qc.ParticleSystem.Zones.Zone.RECTANGLE:
            var width = this.owner.zoneWidth;
            var height = this.owner.zoneHeight;
            zone = new qc.ParticleSystem.Zones.Rectangle(width, height);
            break;

        default:
           console.error("Invalid zone type " + zoneType);
    }

    return zone;
}

/**
 * @author wudm
 * @copyright 2016 Qcplay All Rights Reserved.
 */

/**
 * Box2D 世界对象
 */
qc.Box2D = {};
var Box2DWorld = Phaser.Physics.BOX2D = function(game) {
    this.game = game._qc;

    // 反向记录一个到 qc game 中
    game._qc.box2d = this;

    // 制造一个全局Vec2用于复用
    B2ObjectProxy.init();

    var gravity;

    // 尝试获取配置中关于 Box2D 的配置信息
    var config = this.game.config.customSettings.Box2D || {};
    var parseConfig = function(key, defaultValue) {
        var v = config[key];
        if (v === undefined)
            return defaultValue;
        else
            return v;
    };

    // 重力值，默认是 10
    this._gravity = parseConfig('gravity', 10.0);

    // 速度迭代次数
    this.velocityIterations = parseConfig('velocityIterations', 3);

    // 位置迭代次数
    this.positionIterations = parseConfig('positionIterations', 2);

    // Pixel 像素到 Meter 米之间的转换
    // 游戏使用的是 Pixel 单位，而 Box2D 接受的是米
    this.PTM = parseConfig('PTM', 20);

    // 期望帧率
    this.useElapsedTime = parseConfig('useElapsedTime', false);

    this._rawFrameRate = parseConfig('frameRate', 30);
    if (this._rawFrameRate)
        this.frameRate = this._rawFrameRate;
    else
        this.frameRate = game.desiredFps || 60;

    // 每帧最多模拟的次数
    this.maxSimulatePerFrame = parseConfig('maxSimulatePerFrame', 3);

    // 创建一个 box2d 的世界对象
    this._gravityVec2 = new Box2D.b2Vec2(0.0, 1.0 * this.gravity);
    this.b2World = new Box2D.b2World(this._gravityVec2);

    // 事件监听器
    this.contactListener = new qc.Box2D.ContactListener(this);

    // debug 窗口
    this._debugDrawHandler = new qc.Box2D.DebugDraw(this);
    this.debugDraw = parseConfig('debugDraw', false);
    this.debugFlags = parseConfig('debugFlags',
        DebugDraw.FlagShapeBit |
        DebugDraw.FlagJointBit |
        DebugDraw.FlagAabbBit |
        DebugDraw.FlagPairBit |
        DebugDraw.FlagCenterOfMassBit);

    // 是否允许世界进入睡眠
    this.allowSleeping = parseConfig('allowSleeping', true);

    // 当前是否暂停状态
    this.paused = false;

    // 是否所有物理部件都挂载同一个父亲之下
    // flatten 为 true 的时候，不在计算各种矩阵计算，直接认为 Box2D 世界的
    // 旋转、位置就是 game 世界的旋转位置。
    this.flatten = parseConfig('flatten', false);

    // body之间遍历的时候时候需要排序
    this.bodyStrictOrder = parseConfig('strictOrder', false);

    // 创建一个 Raycast 查询对象
    this.raycastHandler = new qc.Box2D.Raycast(this);

    // 创建一个 QueryAABB 查询对象
    this.queryAABBHandler = new qc.Box2D.QueryAABB(this);

    // 关注game启动完毕
    this.game.onStart.add(this.onGameStart, this);
};
Box2DWorld.prototype = {};
Box2DWorld.prototype.constructor = Box2DWorld;

Object.defineProperties(Box2DWorld.prototype, {
    /**
     * 世界的重力值设定
     */
    gravity : {
        get : function() {
            return this._gravity;
        },
        set : function(v) {
            this._gravity = v;

            // 尝试释放内存
            if (this._gravityVec2) Box2D.destroy(this._gravityVec2);
            this._gravityVec2 = new Box2D.b2Vec2(0.0, 1.0 * this.gravity);
            this.b2World.SetGravity(this._gravityVec2);
        }
    },

    /**
     * 每次世界 step 的时候，速度的迭代次数
     */
    velocityIterations : {
        get : function() {
            return this._velocityIterations;
        },
        set : function(v) {
            this._velocityIterations = v;
        }
    },

    /**
     * 每次世界 step 的时候，位置的迭代次数
     */
    positionIterations : {
        get : function() {
            return this._positionIterations;
        },
        set : function(v) {
            this._positionIterations = v;
        }
    },

    /**
     * 是否允许对象进入 sleep 状态
     */
    allowSleeping : {
        get : function() {
            return this._allowSleeping;
        },
        set : function(v) {
            this._allowSleeping = v;
            this.b2World.SetAllowSleeping(v);
        }
    },

    /**
     * 是否自动清除 force
     */
    autoClearForces : {
        get : function() {
            return this.b2World.GetAutoClearForces();
        },
        set : function() {
            this.b2World.SetAutoClearForces();
        }
    },

    /**
     * 像素到米的转换比率
     */
    PTM : {
        get : function() {
            return this._ptm;
        },
        set : function(v) {
            this._ptm = v;
            this._mtp = 1 / v;
        }
    },

    /**
     * 期望物理的调度帧率
     */
    frameRate : {
        get : function() {
            return this._frameRate;
        },
        set : function(v) {
            v = v || 1;
            this._stepFrameMS = 1 / v;
            this._frameRate = v;
        }
    },

    /**
     * 使用实际delta的时间调度，还是使用固定的帧时间
     */
    useElapsedTime : {
        get : function() {
            return this._useElapsedTime;
        },
        set : function(v) {
            this._useElapsedTime = v;
        }
    },

    /**
     * 是否开启 debug 绘制
     */
    debugDraw : {
        get : function() {
            return this._debugDrawHandler.enabled;
        },
        set : function(v) {
            this._debugDrawHandler.enabled = v;
        }
    },

    /**
     * debug draw 绘制掩码
     */
    debugFlags : {
        get : function() {
            return this._debugDrawHandler.flags;
        },
        set : function(v) {
            this._debugDrawHandler.flags = v;
        }
    }
});

/**
 * preUpdate 调度
 */
Box2DWorld.prototype.preUpdate = function() {
    // 物理世界是否暂停
    if (this.paused) {
        return;
    }
    if (!this.game.time) {
        return;
    }

    var b2World = this.b2World;
    var b2Body;
    var i, len;

    var useElapsedTime = this._useElapsedTime;

    if (useElapsedTime) {
        // 使用具体流逝时间进行调度
        var lastElapseRest = this._lastElapseRest || 0;
        var elapseTime = 0.001 * this.game.time.deltaTime + lastElapseRest;
        var stepMS = this._stepFrameMS;

        this._lastElapseRest = elapseTime % stepMS;

        var simulateTimes = Math.floor(elapseTime / stepMS);
        if (simulateTimes > this.maxSimulatePerFrame) {
            // this.game.log.trace('too many box2d world simulate times({0}) in this frame, downto {1}',
            //    simulateTimes, this.maxSimulatePerFrame);
            simulateTimes = this.maxSimulatePerFrame;
        }

        // 不需要进行任何调度
        if (simulateTimes < 1) {
            return;
        }
    }
    else {
        // 按帧固定调度，次数固定是 1
        simulateTimes = 1;
    }

    var t, n = Date.now();

    // 驱动 b2Body 进行 preUpdate
    var bodies = this.getBodyList();
    for (i = 0, len = bodies.length; i <  len; i++) {
        b2Body = bodies[i];
        b2Body.behaviour.bodyPreUpdate();
    }

    t = Date.now();
    this.game.debug.a += t - n;
    n = t;


    // 驱动 box2d 世界
    for (i = 0; i < simulateTimes; i++)
        this.step();

    t = Date.now();
    this.game.debug.b += t - n;
    n = t;

    // 驱动 body 进行 postUpdate
    bodies = this.getBodyList();
    for (i = 0, len = bodies.length; i <  len; i++) {
        b2Body = bodies[i];
        b2Body.behaviour.bodyPostUpdate();
    }

    t = Date.now();
    this.game.debug.c += t - n;

    // 尝试进行 debug draw
    this._debugDrawHandler.render();
};

/**
 * update 调度
 */
Box2DWorld.prototype.update = function() {
    // update 阶段不进行操作
};

/**
 * pixel 到 meter 的换算公式
 */
Box2DWorld.prototype.pixelToMeter = function(v) {
    // v / this._ptm
    return v * this._mtp;
};

/**
 * meter 到 pixel 的换算公式
 */
Box2DWorld.prototype.meterToPixel = function(v) {
    // v / this._mtp
    return v  * this._ptm;
};

Box2DWorld.prototype.setBoundsToWorld = function() {

};

Box2DWorld.prototype.clear = function() {

};

Box2DWorld.prototype.reset = function() {

};

Box2DWorld.prototype.destroy = function() {

};

/**
 * 游戏 frameRate 发生变化的时候，重置物理的 frameRate
 */
Box2DWorld.prototype.onFrameRateChanged = function() {
    if (!this._rawFrameRate)
        this.frameRate = this.game.time.frameRate;
};

/**
 * qc game Started
 */
Box2DWorld.prototype.onGameStart = function() {
    if (!this._rawFrameRate)
        this.frameRate = this.game.time.frameRate;

    // 关注 frameRate 变化
    this.game.time.onFrameRateChanged.add(this.onFrameRateChanged, this);
};

/**
 * 驱动 box2d 世界向前进行 elapseTime 毫秒
 */
Box2DWorld.prototype.step = function() {
    // 直接使用固定的帧时间进行调度
    this.b2World.Step(this._stepFrameMS,
        this._velocityIterations,
        this._positionIterations);
};

/**
 * 驱动 box2d 世界开始绘制 debug 形状
 */
Box2DWorld.prototype.drawDebugData = function() {
    this.b2World.DrawDebugData();
};

/**
 * 注册contact 事件监听
 */
Box2DWorld.prototype.setContactListener = function(handler) {
    this.b2World.SetContactListener(handler);
};

/**
 * 注册为 Debug Draw 响应
 */
Box2DWorld.prototype.setDebugDraw = function(handler) {
    this.b2World.SetDebugDraw(handler);
};

/**
 * 设置暂停
 */
Box2DWorld.prototype.pause = function() {
    this.paused = true;
};

/**
 * 设置恢复 box2d 世界的运作
 */
Box2DWorld.prototype.resume = function() {
    this.paused = false;
};

/**
 * 创建一个 body 对象
 */
Box2DWorld.prototype.createBody = function(bodyDef) {
    // 清空缓存
    this.bodyList = null;

    return this.b2World.CreateBody(bodyDef);
};

/**
 * 干掉 node 身上附着的 body 对象
 */
Box2DWorld.prototype.destroyBody = function(node) {
    // 清空缓存
    this.bodyList = null;

    var b2Body = node.b2Body;
    if (!b2Body) return;

    return this.b2World.DestroyBody(b2Body);
};

/**
 * 从游戏世界的某个节点开始，获取旗下所有 Body 对象
 */
Box2DWorld.prototype.getBodyByGameWorld = function(node, ret) {
    var b2Body = node.b2Body;
    if (b2Body) ret.push(b2Body);

    // 递归遍历，子节点依次入队列
    var children = node.children;
    for (var i = 0, len = children.length; i < len; i++) {
        this.getBodyByGameWorld(children[i], ret);
    }
};

/**
 * 获取当前世界所有的 Body 对象
 */
Box2DWorld.prototype.getBodyList = function() {
    var ret;

    // 有明确的顺序依赖，需要根据树进行查找
    if (this.bodyStrictOrder) {
        ret = [];
        this.getBodyByGameWorld(this.game.world, ret);
        return ret;
    }

    // 有缓存，且没有变脏（现在只有 create destroy 会置脏）
    if (this.bodyList) {
        return this.bodyList;
    }

    var world = this.b2World;
    var count = world.GetBodyCount();
    if (!count) return count;

    ret = new Array(count);
    var i = 0;
    var body;

    for (body = world.GetBodyList(); body.e; body = body.GetNext()) {
        ret[i++] = body;
    }

    this.bodyList = ret;
    return ret;
};

/**
 * 获取一条射线上的目标
 */
Box2DWorld.prototype.raycast = function(x1, y1, x2, y2, closest, filter) {
    if (Math.abs(x1 - x2) + Math.abs(y1 - y2) < 0.01) return [];
    return this.raycastHandler.check(x1, y1, x2, y2, closest, filter);
};

/**
 * 查询区域内的所有目标
 */
Box2DWorld.prototype.queryAABB = function(x, y, width, height, findAll, filter) {
    return this.queryAABBHandler.check(x, y, width, height, findAll, filter);
};

/**
 * 查询一个点选中的所有 Fixtures
 */
Box2DWorld.prototype.queryFixtureAtPoint = function(x, y, findAll, filter) {
    var sensitivity = 0.1;
    var point = new Box2D.b2Vec2(this.pixelToMeter(x), this.pixelToMeter(y));

    var queryFilter = function(gameObject, fixture) {
        // 由于queryAABB 得到的是 AABB overlap，对于点还需要精确知道点是否在内部
        if (!fixture.TestPoint(point)) {
            return false;
        }

        // 回调判定失败
        if (filter) {
            if (!filter.call(this, gameObject, fixture))
                return false;
        }

        // 判定成功
        return true;
    };

    var result = this.queryAABBHandler.check(
        x - sensitivity, y - sensitivity,
        sensitivity * 2, sensitivity * 2,
        findAll,
        queryFilter);

    // 释放内存
    Box2D.destroy(point);

    return result;
};

/**
 * 将 qc.Point 转为 Box2D 格式的 vector
 */
Box2DWorld.prototype._parseVector2 = function(p) {
    if (!p) return new Box2D.b2Vec2(0, 0);
    return new Box2D.b2Vec2(p.x || 0, p.y || 0);
};

/**
 * 初始化默认的 joint 长度
 */
Box2DWorld.prototype._initJoinLength = function(length, bodyA, bodyB, anchorA, anchorB) {
    if (typeof length === 'number')
        return this.pixelToMeter(length);

    var vec1 = bodyA.GetWorldPoint(anchorA);
    var x1 = vec1.get_x();
    var y1 = vec1.get_y();

    var vec2 = bodyB.GetWorldPoint(anchorB);
    var x2 = vec2.get_x();
    var y2 = vec2.get_y();

    var disX = x2 - x1;
    var disY = y2 - y1;

    return Math.sqrt(disX * disX + disY * disY);
};

/**
 * 创建个 distance joint（距离关节）
 */
Box2DWorld.prototype.createDistanceJoint = function(obA, obB, anchorA, anchorB, length, dampingRatio, frequency, collideConnected) {
    if (!obA.b2Body || !obB.b2Body) return null;

    // parse 数据
    anchorA = this._parseVector2(anchorA);
    anchorB = this._parseVector2(anchorB);

    if (typeof dampingRatio !== 'number') dampingRatio = 0;
    if (typeof frequency !== 'number') frequency = 0;
    if (typeof collideConnected !== 'boolean') collideConnected = false;

    length = this._initJoinLength(length, obA.b2Body, obB.b2Body, anchorA, anchorB);

    var jointDef = new Box2D.b2DistanceJointDef();
    jointDef.set_bodyA(obA.b2Body);
    jointDef.set_bodyB(obB.b2Body);
    jointDef.set_collideConnected(collideConnected);
    jointDef.set_localAnchorA(anchorA);
    jointDef.set_localAnchorB(anchorB);
    jointDef.set_dampingRatio(dampingRatio);
    jointDef.set_frequencyHz(frequency);
    jointDef.set_length(length);

    var joint = this.b2World.CreateJoint(jointDef);

    // 释放内存
    Box2D.destroy(anchorA);
    Box2D.destroy(anchorB);

    return joint;
};

/**
 * 创建个 Revolute joint（旋转关节）
 */
Box2DWorld.prototype.createRevoluteJoint = function(obA, obB, anchorA, anchorB, enableLimit, lowerAngle, upperAngle, enableMotor, maxMotorTorque, motorSpeed, collideConnected) {
    if (!obA.b2Body || !obB.b2Body) return null;

    // parse 数据
    anchorA = this._parseVector2(anchorA);
    anchorB = this._parseVector2(anchorB);
    if (typeof collideConnected !== 'boolean') collideConnected = false;

    if (typeof enableLimit !== 'boolean') enableLimit = false;
    if (typeof enableMotor !== 'boolean') enableMotor = false;

    var jointDef = new Box2D.b2RevoluteJointDef();
    jointDef.set_bodyA(obA.b2Body);
    jointDef.set_bodyB(obB.b2Body);
    jointDef.set_collideConnected(collideConnected);
    jointDef.set_localAnchorA(anchorA);
    jointDef.set_localAnchorB(anchorB);
    jointDef.set_enableLimit(enableLimit);
    jointDef.set_enableMotor(enableMotor);
    jointDef.set_lowerAngle(lowerAngle || 0);
    jointDef.set_upperAngle(upperAngle || 0);
    jointDef.set_maxMotorTorque(maxMotorTorque || 0);
    jointDef.set_motorSpeed(motorSpeed || 0);

    var joint = this.b2World.CreateJoint(jointDef);

    // 释放内存
    Box2D.destroy(anchorA);
    Box2D.destroy(anchorB);

    return joint;
};

/**
 *  创建一个 Rope joint（绳索关节）
 */
Box2DWorld.prototype.createRopeJoint = function(obA, obB, anchorA, anchorB, length, collideConnected) {
    if (!obA.b2Body || !obB.b2Body) return null;

    // parse 数据
    anchorA = this._parseVector2(anchorA);
    anchorB = this._parseVector2(anchorB);
    length = this._initJoinLength(length, obA.b2Body, obB.b2Body, anchorA, anchorB);

    var jointDef = new Box2D.b2RopeJointDef();

    jointDef.set_bodyA(obA.b2Body);
    jointDef.set_bodyB(obB.b2Body);
    jointDef.set_collideConnected(!!collideConnected);
    jointDef.set_localAnchorA(anchorA);
    jointDef.set_localAnchorB(anchorB);
    jointDef.set_maxLength(length);

    var joint = this.b2World.CreateJoint(jointDef);

    // 释放内存
    Box2D.destroy(anchorA);
    Box2D.destroy(anchorB);

    return joint;
};

/**
 * 创建一个Prismatic Joint（移动关节）
 */
Box2DWorld.prototype.createPrismaticJoint = function(obA, obB, anchorA, anchorB, enableLimit, localAxisA, lowerLimit, upperLimit, refAngle, enableMotor, motorSpeed, maxMotorTorque, collideConnected) {
    if (!obA.b2Body || !obB.b2Body) return null;

    // parse 数据
    anchorA = this._parseVector2(anchorA);
    anchorB = this._parseVector2(anchorB);
    localAxisA = this._parseVector2(localAxisA);

    var jointDef = new Box2D.b2PrismaticJointDef();
    jointDef.set_bodyA(obA.b2Body);
    jointDef.set_bodyB(obB.b2Body);
    jointDef.set_collideConnected(!!collideConnected);
    jointDef.set_localAnchorA(anchorA);
    jointDef.set_localAnchorB(anchorB);
    jointDef.set_enableLimit(enableLimit);
    jointDef.set_enableMotor(enableMotor);
    jointDef.set_localAxisA(localAxisA);
    jointDef.set_lowerTranslation(lowerLimit || 0);
    jointDef.set_maxMotorForce(maxMotorForce || 0);
    jointDef.set_motorSpeed(motorSpeed || 0);
    jointDef.set_referenceAngle(refAngle || 0);
    jointDef.set_upperTranslation(upperLimit || 0);

    var joint = this.b2World.CreateJoint(jointDef);

    // 释放内存
    Box2D.destroy(anchorA);
    Box2D.destroy(anchorB);
    Box2D.destroy(localAxisA);

    return joint;
};

/**
 * 创建一个 Wheel joint（齿轮关节）
 */
Box2DWorld.prototype.createWheelJoint = function(obA, obB, offsetX, offsetY, enableMotor, localAxisA, maxMotorTorque, motorSpeed, dampingRatio, frequency, collideConnected) {
    if (!obA.b2Body || !obB.b2Body) return null;

    // parse 数据
    anchorA = this._parseVector2(anchorA);
    anchorB = this._parseVector2(anchorB);
    localAxisA = this._parseVector2(localAxisA);

    var jointDef = new Box2D.b2WheelJointDef();

    jointDef.set_bodyA(obA.b2Body);
    jointDef.set_bodyB(obB.b2Body);
    jointDef.set_collideConnected(!!collideConnected);
    jointDef.set_localAnchorA(anchorA);
    jointDef.set_localAnchorB(anchorB);

    jointDef.set_enableMotor(enableMotor || false);
    jointDef.set_localAxisA(localAxisA);
    jointDef.set_maxMotorTorque(maxMotorTorque || 0);
    jointDef.set_motorSpeed(motorSpeed || 0);
    jointDef.set_dampingRatio(dampingRatio || 0);
    jointDef.set_frequencyHz(frequency || 0);

    var joint = this.b2World.CreateJoint(jointDef);

    // 释放内存
    Box2D.destroy(anchorA);
    Box2D.destroy(anchorB);
    Box2D.destroy(localAxisA);

    return joint;
};

/**
 * 创建一个 Motor joint（马达关节）
 */
Box2DWorld.prototype.createMotorJoint = function(obA, obB, offsetX, offsetY, angularOffset, maxForce, maxTorque, correctionFactor, collideConnected) {
    if (!obA.b2Body || !obB.b2Body) return null;

    var jointDef = new Box2D.b2MotorJointDef();

    jointDef.set_bodyA(obA.b2Body);
    jointDef.set_bodyB(obB.b2Body);
    jointDef.set_collideConnected(!!collideConnected);

    var linearOffset = new Box2D.b2Vec2(
        this.pixelToMeter(offsetX || 0),
        this.pixelToMeter(offsetY || 0));
    jointDef.set_linearOffset(linearOffset);
    jointDef.set_angularOffset(angularOffset || 0);
    jointDef.set_maxForce(maxForce || 0);
    jointDef.set_maxTorque(maxTorque || 0);
    jointDef.set_correctionFactor(correctionFactor || 0);

    var joint = this.b2World.CreateJoint(jointDef);

    Box2D.destory(linearOffset);
    return joint;
};

/**
 * 创建一个 Friction joint（摩擦关节）
 */
Box2DWorld.prototype.createFrictionJoint = function(obA, obB, anchorA, anchorB, maxForce, maxTorque, collideConnected) {
    if (!obA.b2Body || !obB.b2Body) return null;

    // parse 数据
    anchorA = this._parseVector2(anchorA);
    anchorB = this._parseVector2(anchorB);

    var jointDef = new Box2D.b2FrictionJointDef();

    jointDef.set_bodyA(obA.b2Body);
    jointDef.set_bodyB(obB.b2Body);
    jointDef.set_collideConnected(!!collideConnected);
    jointDef.set_localAnchorA(anchorA);
    jointDef.set_localAnchorB(anchorB);

    jointDef.set_maxForce(maxForce || 0);
    jointDef.set_maxTorque(maxTorque || 0);

    var joint = this.b2World.CreateJoint(jointDef);

    // 释放内存
    Box2D.destroy(anchorA);
    Box2D.destroy(anchorB);

    return joint;
};

/**
 * 创建一个 Weld joint（焊接关节）
 */
Box2DWorld.prototype.createWeldJoint = function(obA, obB, anchorA, anchorB, refAngle, dampingRatio, frequency, collideConnected) {
    if (!obA.b2Body || !obB.b2Body) return null;

    // parse 数据
    anchorA = this._parseVector2(anchorA);
    anchorB = this._parseVector2(anchorB);

    var jointDef = new Box2D.b2WeldJointDef();

    jointDef.set_bodyA(obA.b2Body);
    jointDef.set_bodyB(obB.b2Body);
    jointDef.set_collideConnected(!!collideConnected);
    jointDef.set_localAnchorA(anchorA);
    jointDef.set_localAnchorB(anchorB);

    jointDef.set_referenceAngle(refAngle || 0);
    jointDef.set_dampingRatio(dampingRatio || 0);
    jointDef.set_frequencyHz(frequency || 0);

    var joint = this.b2World.CreateJoint(jointDef);

    // 释放内存
    Box2D.destroy(anchorA);
    Box2D.destroy(anchorB);

    return joint;
};

/**
 * 调试输出当前的世界信息
 */
Box2DWorld.prototype.debugInfo = function() {
    var b2World = this.b2World;
    var bodies = this.getBodyList();
    var output = [];

    // 先输出世界信息
    output.push('Box2D world Info:');
    output.push('    gravity : ' + this.gravity);
    output.push('    allowSleeping : ' + b2World.GetAllowSleeping());
    output.push('    autoClearForces : ' + b2World.GetAutoClearForces());
    output.push('    bodyCount : ' + b2World.GetBodyCount());
    output.push('    contactCount : ' + b2World.GetContactCount());
    output.push('    jointCount : ' + b2World.GetJointCount());

    var gameWorld = this.game.world;
    var getFullName = function(node) {
        var name = node.name;
        var pNode;

        while ((pNode = node.parent) && pNode !== gameWorld) {
            node = pNode;
            name = node.name + '/' + name;
        }
        return name;
    };

    for (var i = 0, len = bodies.length; i < len; i++) {
        var b2Body = bodies[i];
        var body = b2Body.behaviour;
        output.push('  Body ' + (i + 1));
        output.push('    name : ' + getFullName(b2Body.gameObject));

        var typeDesc;
        switch (body.type) {
        case qc.Box2D.Body.TYPE.DYNAMIC : typeDesc = 'dynamic'; break;
        case qc.Box2D.Body.TYPE.KINEMATIC : typeDesc = 'kinematic'; break;
        default : typeDesc = 'static';
        }
        output.push('    type : ' + typeDesc);

        output.push('    awake : ' + body.isAwake);
        output.push('    bullet : ' + body.bullet);
        output.push('    fixedRotation : ' + body.fixedRotation);
        output.push('    gravityScale : ' + body.gravityScale);
        output.push('    linearVelocity : (' + body.linearVelocity.x + ',' + body.linearVelocity.y + ')');
        output.push('    linearDamping : ' + body.linearDamping);
        output.push('    angularVelocity : ' + body.angularVelocity);
        output.push('    angularDamping : ' + body.angularDamping);

        var fixtureTypeDesc;
        switch (body.fixtureType) {
        case qc.Box2D.Body.FIXTURE_TYPE.CIRCLE : fixtureTypeDesc = 'circle'; break;
        case qc.Box2D.Body.FIXTURE_TYPE.CHAIN  : fixtureTypeDesc = 'chain'; break;
        default : fixtureTypeDesc = 'polygon';
        }
        output.push('   *fixture Type : ' + fixtureTypeDesc);
        output.push('    density : ' + body.density);
        output.push('    friction : ' + body.friction);
        output.push('    restitution : ' + body.restitution);
        output.push('    sensor : ' + body.sensor);
    }

    console.log(output.join('\n'));
    /*
    var logM = this.game.log;
    output.forEach(function(msg) {
        logM.trace(msg);
    });*/
};

/**
 * @author wudm
 * @copyright 2016 Qcplay All Rights Reserved.
 */

// 复用对象，避免内存不停开辟
// 注意这里的对象我们都认为已经创建了，后续接口不再判定
B2ObjectProxy = {};

/**
 * 初始化环境
 */
B2ObjectProxy.init = function() {
    B2ObjectProxy.vec2 = new Box2D.b2Vec2(0, 0);
    B2ObjectProxy.fixtureDef = new Box2D.b2FixtureDef();
    B2ObjectProxy.circleShape = new Box2D.b2CircleShape();
    B2ObjectProxy.polygonShape = new Box2D.b2PolygonShape();
    B2ObjectProxy.chainShape = new Box2D.b2ChainShape();

    B2ObjectProxy.verticesBuffer = {
        4 : Box2D.allocate(4 * 8, 'float', Box2D.ALLOC_STACK)
    };
};

/**
 * Box2D Point 对象（复用，避免内存不停开辟）
 */
Box2D.Vec2Proxy = function(x, y) {
    var vec2 = B2ObjectProxy.vec2;
    vec2.set_x(x);
    vec2.set_y(y);
    return vec2;
};

/**
 * Fixture 定义
 */
Box2D.b2FixtureDefProxy = function() {
    return B2ObjectProxy.fixtureDef;
};

/**
 * 形状定义
 */
Box2D.b2CircleShapeProxy = function() {
    return B2ObjectProxy.circleShape;
};
Box2D.b2PolygonShapeProxy = function() {
    return B2ObjectProxy.polygonShape;
};
Box2D.b2ChainShapeProxy = function() {
    return B2ObjectProxy.chainShape;
};

/**
 * 点的定义
 */
Box2D.b2VerticesBufferProxy = function(num) {
    var buffer = B2ObjectProxy.verticesBuffer[num];
    if (buffer)
        return buffer;

    B2ObjectProxy.verticesBuffer[num] = buffer = Box2D.allocate(num * 8, 'float', Box2D.ALLOC_STACK);
    return buffer;
};


/**
 * @author wudm
 * @copyright 2016 Qcplay All Rights Reserved.
 */

/**
 * Box2D body 对象
 */
var Body = qc.defineBehaviour('qc.Box2D.Body', qc.Behaviour, function() {
    // 记录自身对象
    this.gameObject.body = this;

    // 记录世界对象
    this.gameObject.world = this.game.phaser.physics.box2d;

    var body = this.gameObject._body;
    if (!body) body = this.gameObject._body = {};

    // 初始化 fixture 列表为默认
    body.fixture = [ {
        type : qc.Box2D.Body.FIXTURE_TYPE.POLYGON,
        density : 1.0,
        friction : 0.1,
        restitution : 0.2,
        sensor : false,
    } ];

    // 初始化必要的属性
    body.type = qc.Box2D.Body.TYPE.STATIC;

    // 是否进入 awake 状态
    body.isAwake = true;

    // 子弹模式（避免 tunneling）
    body.bullet = false;

    // 转向固定
    body.fixedRotation = false;

    // 角速度
    body.angularVelocity = 0;

    // 角阻抗
    body.angularDamping = 0;

    // 速度
    body.linearVelocity = new qc.Point(0, 0);

    // 线性阻抗
    body.linearDamping = 0;

    // 重力倍数
    body.gravityScale = 1;

    // 碰撞事件
    this.onContact = new qc.Signal();

    // Presolve 事件
    this.onPreSolve = new qc.Signal();

    // Postsolve 事件
    this.onPostSolve = new qc.Signal();

    // 初始化事件
    this.onBodyCreated = new qc.Signal();

    // 形状变化事件
    this.onFixtureChanged = new qc.Signal();
}, {
    // 需要序列化的属性情况
    type : qc.Serializer.INT,
    isAwake : qc.Serializer.BOOLEAN,
    bullet : qc.Serializer.BOOLEAN,
    angularVelocity : qc.Serializer.NUMBER,
    angularDamping : qc.Serializer.NUMBER,
    fixedRotation : qc.Serializer.BOOLEAN,
    linearDamping : qc.Serializer.BOOLEAN,
    linearVelocity : qc.Serializer.POINT,
    gravityScale : qc.Serializer.NUMBER,
    fixture : {
        get : function(ob, context) {
            // 将 fixture 信息序列化下来成数组
            var body = ob.gameObject._body;
            var len = body.fixture.length;
            var v = new Array(len);
            for (var i = 0; i < len; i++) {
                var fixture = body.fixture[i];
                v[i] = {
                    type : fixture.type,
                    density : fixture.density,
                    friction : fixture.friction,
                    restitution : fixture.restitution,
                    sensor : fixture.sensor,
                    // shape : ob.body._serializeFixtureShape(fixture)
                };
            }
            return v;
        },
        set : function(context, v) {
            // 将反序列化出来的数组，在内存中还原出 fixtures
            var body = context.gameObject._body;
            var len = v.length;
            var fixtures = body.fixture = new Array(len);
            for (var i = 0; i < len; i++) {
                var fixture = v[i];
                fixtures[i] = {
                    type : fixture.type,
                    density : fixture.density,
                    friction : fixture.friction,
                    restitution : fixture.restitution,
                    sensor : fixture.sensor,
                };
                // ob.body._restoreFixtureShape(fixtures[i], fixture);
            }
        }
    }
});

// Body 类型定义，分别为静止、运动学物体、动态物体
Body.TYPE = {};
Body.TYPE.STATIC = 0;
Body.TYPE.KINEMATIC = 1;
Body.TYPE.DYNAMIC = 2;

// 形状定义：多边形、圆、链条
Body.FIXTURE_TYPE = {};
Body.FIXTURE_TYPE.POLYGON = 0;
Body.FIXTURE_TYPE.CIRCLE = 1;
Body.FIXTURE_TYPE.CHAIN = 2;

// Called when the script instance is being loaded.
Body.prototype.awake = function() {

};

// Called every frame, if the behaviour is enabled.
Body.prototype.update = function() {
    if (!this.enable) return;

    // 只有可见物体才有 update 方法，确保可见物体存在 body
    if (!this.gameObject.b2Body)
        this.createBody();
};

/**
 * 序列化 fixture 的形状
 */
Body.prototype._serializeFixtureShape = function(fixture) {
    var i, len;
    switch (fixture.type) {
    case qc.Box2D.Body.FIXTURE_TYPE.CIRCLE :
        return [ fixture.radius, fixture.center.x, fixture.center.y ];
    case qc.Box2D.Body.FIXTURE_TYPE.POLYGON :
    case qc.Box2D.Body.FIXTURE_TYPE.CHAIN :
        len = fixture.vertices.length;
        var verts = new Array(len * 2);
        for (i = 0; i < len; i++) {
            verts[i * 2] = fixture.vertices[i].x;
            verts[i * 2 + 1] = fixture.vertices[i].y;
        }
        return verts;
    }
    return [];
};

/**
 * 将 fixture 的形状反序列化出来
 */
Body.prototype._restoreFixtureShape = function(fixture, v) {
    var i, len;
    switch (fixture.type) {
    case qc.Box2D.Body.FIXTURE_TYPE.CIRCLE :
        fixture.radius = v[0];
        fixture.center = new qc.Point(v[1], v[2]);
        break;
    case qc.Box2D.Body.FIXTURE_TYPE.POLYGON :
    case qc.Box2D.Body.FIXTURE_TYPE.CHAIN :
        len = v.length / 2;
        fixture.vertices = new Array(len);
        for (i = 0; i < len; i++) {
            fixture.vertices[i] = new qc.Point(verts[i * 2], verts[i * 2 + 1]);
        }
        break;
    }
};

/**
 * 对象激活的时候处理设置 box2d 世界 body
 */
Body.prototype.onEnable = function() {
    // 延迟到 update 中处理，enable 中经常没有挂好 parent，后续 scale 等
    // 信息会变化，会触发 reset fixture，所以新创建的目标会二次 create fixture
    // this.createBody();
};

/**
 * 对象取消激活的处理
 */
Body.prototype.onDisable = function() {
    this.removeBody();
};

/**
 * 添加自己到物理世界中
 */
Body.prototype.createBody = function() {
    var b2BodyDef = new Box2D.b2BodyDef();

    // 属性逐一设置
    var self = this;
    var gameObject = self.gameObject;
    var body = gameObject._body;
    switch (body.type) {
    case qc.Box2D.Body.TYPE.DYNAMIC : b2BodyDef.set_type(Box2D.b2_dynamicBody); break;
    case qc.Box2D.Body.TYPE.KINEMATIC : b2BodyDef.set_type(Box2D.b2_kinematicBody); break;
    default : b2BodyDef.set_type(Box2D.b2_staticBody); break;
    }
    b2BodyDef.set_awake(body.isAwake);
    b2BodyDef.set_bullet(body.bullet);
    b2BodyDef.set_angularVelocity(body.angularVelocity);
    b2BodyDef.set_angularDamping(body.angularDamping);
    b2BodyDef.set_fixedRotation(body.fixedRotation);
    b2BodyDef.set_linearDamping(body.linearDamping);

    b2BodyDef.set_linearVelocity(Box2D.Vec2Proxy(body.linearVelocity.x, body.linearVelocity.y));
    b2BodyDef.set_gravityScale(body.gravityScale);

    // 设置世界物体的属性给目标对象
    var x, y, rotation;
    if (self.game.box2d.flatten) {
        x = gameObject.x;
        y = gameObject.y;
        rotation = gameObject.rotation;
    }
    else {
        var pos = gameObject.getWorldPosition();
        x = pos.x;
        y = pos.y;
        rotation = gameObject.getWorldRotation();
    }

    // 设置初始位置
    b2BodyDef.set_position(Box2D.Vec2Proxy(
        self.game.box2d.pixelToMeter(pos.x),
        self.game.box2d.pixelToMeter(pos.y)
    ));

    // 设置初始角度
    b2BodyDef.set_angle(rotation);

    // 记录缓存
    body.lastTransform = {
        rotation : rotation,
        x : x,
        y : y
    };

    // 创建出来并记录
    var b2Body = self.game.box2d.createBody(b2BodyDef);
    gameObject.b2Body = b2Body;
    b2Body.behaviour = self;
    b2Body.gameObject = gameObject;

    // 设置默认的 fixture
    self.resetFixtureShape();

    // 给出创建完毕 Body 的事件
    self.onBodyCreated.dispatch(gameObject);
};

/**
 * 删除自己
 */
Body.prototype.removeBody = function() {
    // 取消物理世界中的 body 对象
    this.gameObject.world.destroyBody(this.gameObject);
    this.gameObject.b2Body = null;
};

/**
 * 根据 body.fixture 数据，加载到 box2d 中
 */
Body.prototype.loadFixtures = function() {
    var ob = this.gameObject;
    var b2Body = ob.b2Body;
    if (!b2Body) return;

    var fixtures = ob._body.fixture;
    if (!fixtures || !fixtures.length) return;

    var len = fixtures.length;
    for (var i = 0; i < len; i++) {
        this._loadFixture(ob.world, b2Body, fixtures[i]);
    }

    this.onFixtureChanged.dispatch(ob);
};

/**
 * 人为设置各个点，后续通过工具生成
 */
Body.prototype.setPolygonVertices = function(vertices, isNormalize) {
    var len = vertices.length;
    if (!len) return;

    var customPolygon;
    var i;
    var p = vertices[0];
    if (typeof p.x === 'number' && typeof p.y === 'number') {
        customPolygon = vertices;
    }
    else {
        customPolygon = new Array(len / 2);
        for (i = 0; i < len / 2; i++) {
            customPolygon[i] = {
                x : vertices[i * 2],
                y : vertices[i * 2 + 1]
            };
        }
    }

    // 非归一化后的坐标，传入的是世界的坐标，转换之
    if (!isNormalize) {
        var worldScale = this.gameObject.getWorldScale();
        for (i = 0, len = customPolygon.length; i < len; i++) {
            customPolygon[i].x /= worldScale.x;
            customPolygon[i].y /= worldScale.y;
        }
    }

    this.gameObject.body.customPolygon = customPolygon;
    this.resetFixtureShape();
};

/**
 * 初始化默认的 Fixture Shape
 */
Body.prototype.resetFixtureShape = function() {
    // 先清空之前所有的 fixture
    this.clearFixtures();

    var node = this.gameObject;
    var b2Body = node.b2Body;

    var worldScale = node.getWorldScale();
    var fixture = node._body.fixture[0];

    var customPolygon = node.body.customPolygon;
    var corners, i, len;

    if (customPolygon) {
        len = customPolygon.length;
        corners = new Array(customPolygon.length);
        for (i = 0; i < len; i++) {
            corners[i] = new qc.Point(
                customPolygon[i].x * worldScale.x,
                customPolygon[i].y * worldScale.y);
        }
    }
    else {
        corners = qc.Bounds.getCorners(node, 0, false, 0, node);

        for (i = 0, len = corners.length; i < len; i++) {
            corners[i].x *= worldScale.x;
            corners[i].y *= worldScale.y;
        }
    }

    if (fixture.type === qc.Box2D.Body.FIXTURE_TYPE.POLYGON) {
        fixture.vertices = corners;
    }
    else if (fixture.type === qc.Box2D.Body.FIXTURE_TYPE.CIRCLE) {
        var p1 = corners[0];
        var p2 = corners[2];

        fixture.center = new qc.Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        fixture.radius = Math.max(Math.abs(p1.x - p2.x) / 2, Math.abs(p1.y - p2.y) / 2);
    }

    // 加载新的 fixture 进来
    this.loadFixtures();

    // 记录系数
    node._body.pivotX = node.pivotX;
    node._body.pivotY = node.pivotY;
    node._body.width = node.width;
    node._body.height = node.height;

    if (!node.parent ||
        node.parent === node.game.world ||
        node.game.box2d.flatten) {
        node._body.scaleSqrX = node.scaleX * node.scaleX;
        node._body.scaleSqrY = node.scaleY * node.scaleY;
    }
    else {
        var wt = node.worldTransform;
        node._body.scaleSqrX = (wt.a * wt.a + wt.b * wt.b);
        node._body.scaleSqrY = (wt.c * wt.c + wt.d * wt.d);
    }
};

/**
 * pre update 阶段尝试更新
 */
Body.prototype.bodyPreUpdate = function() {
    var ob = this.gameObject;
    if (!ob.worldVisible) {
        if (this.gameObject.b2Body) {
            this.removeBody();
            return;
        }
    }

    var body = ob._body;
    var bwt = body.lastTransform;
    var x, y, rotation;
    var scaleSqrX, scaleSqrY;

    if (!ob.parent ||
        ob.parent === ob.game.world ||
        ob.game.box2d.flatten) {
        rotation = ob.rotation;
        x = ob.x;
        y = ob.y;
        scaleSqrX = ob.scaleX * ob.scaleX;
        scaleSqrY = ob.scaleY * ob.scaleY;
    }
    else {
        var wt = ob.worldTransform;
        rotation = Math.atan2(wt.b, wt.a);
        x = wt.tx;
        y = wt.ty;
        scaleSqrX = wt.a * wt.a + wt.b * wt.b;
        scaleSqrY = wt.c * wt.c + wt.d * wt.d;
    }

    // 位移是否发生变化
    var offsetChanged = (Math.abs(x - bwt.x) > 0.01 ||
                         Math.abs(y - bwt.y) > 0.01);

    // 旋转是否发生变化
    var rotationChanged = Math.abs(rotation - bwt.rotation) > 0.0001;

    // 缩放是否发生变化
    var scaleChanged = Math.abs(scaleSqrX - body.scaleSqrX) > 0.001 ||
                       Math.abs(scaleSqrY - body.scaleSqrY) > 0.001;

    // pivot/width/height是否发生变化
    var anchor = ob.phaser.anchor || {};
    var pivotChanged = (anchor.x !== body.pivotX || anchor.y !== body.pivotY);
    var sizeChanged = (ob._width !== body.width || ob._height !== body.height);

    if (scaleChanged || pivotChanged || sizeChanged) {
        this.resetFixtureShape();
    }

    if (offsetChanged || rotationChanged) {
        // 设置世界物体的属性给目标对象

        // 设置初始位置
        ob._body.lastTransform = {
            rotation : rotation,
            x : x,
            y : y
        };
        ob.b2Body.SetTransform(Box2D.Vec2Proxy(
            ob.game.box2d.pixelToMeter(x),
            ob.game.box2d.pixelToMeter(y)
        ), rotation);
    }
};

/**
 * post update 阶段同步 box2d 世界的信息到普通世界
 */
Body.prototype.bodyPostUpdate = function() {
    // 同步角度，位置
    var b2Body = this.gameObject.b2Body;
    if (!b2Body) return;

    // static 物体不同步给世界
    if (this.gameObject._body.type === qc.Box2D.Body.TYPE.STATIC)
        return;

    var b2Pos = b2Body.GetPosition();

    var b2x = b2Pos.get_x();
    var b2y = b2Pos.get_y();
    if (isNaN(b2x) || isNaN(b2y))
        return;

    // 设置属性到对象身上
    var ob = this.gameObject;
    var world = ob.world;

    var tx = world.meterToPixel(b2x);
    var ty = world.meterToPixel(b2y);
    var rotation = b2Body.GetAngle();

    ob._body.lastTransform = {
        rotation : rotation,
        x : tx,
        y : ty
    };

    // 如果没有父亲，或者是 flatten 世界，rotation/tx/ty 就是最终信息，直接设置
    var parent = ob.parent;
    if (!parent ||
        parent === ob.game.world ||
        world.flatten) {
        ob.x = tx;
        ob.y = ty;
        ob.rotation = rotation;
        return;
    }

    var wt = ob.phaser.worldTransform;
    var cosRot = Math.cos(rotation);
    var sinRot = Math.sin(rotation);
    var parentTrans = ob.parent.worldTransform;
    var parentMatrix, out;

    if (Math.abs(wt.b / wt.a - sinRot / cosRot) < 0.0001) {
        // 旋转没有发生变化
        parentMatrix = parentTrans.toArray(true);
        out = [];

        // 计算出相对父节点的偏移
        this.game.math.invert(out, parentMatrix);
        this.game.math.multiply(out, out,
            [wt.a, wt.b, 0, wt.c, wt.d, 0, tx, ty, 1]);

        // 设置给物体
        ob.x = out[6];
        ob.y = out[7];
    }
    else {
        // 旋转发生变化了
        var worldScale = ob.getWorldScale();
        var scaleX = worldScale.x;
        var scaleY = worldScale.y;

        parentMatrix = parentTrans.toArray(true);
        out = [];

        // 计算出相对父节点的偏移
        this.game.math.invert(out, parentMatrix);
        this.game.math.multiply(out, out,
            [ cosRot * scaleX,
              sinRot * scaleX,
              0,
              -sinRot * scaleY,
              cosRot * scaleY,
              0,
              tx,
              ty,
              1 ]);

        ob.rotation = Math.atan2(out[1], out[0]);
        ob.x = out[6];
        ob.y = out[7];
    }
};

/**
 * 加上一道外力作用在 body 上
 */
Body.prototype.applyForce = function(x, y) {
    var b2Body = this.gameObject.b2Body;
    b2Body.ApplyForce(Box2D.Vec2Proxy(-x, -y),
        b2Body.GetWorldCenter(), true);
};

/**
 * 是否包含一个点
 */
Body.prototype.contains = function(x, y) {
    var point = Box2D.Vec2Proxy(this.gameObject.world.pixelToMeter(x),
                                 this.gameObject.world.pixelToMeter(y));

    // 先收集所有的 Fixtures
    var b2Body = this.gameObject.b2Body;
    for (var fixture = b2Body.GetFixtureList(); fixture.e; fixture = fixture.GetNext()) {
        if (fixture.TestPoint(point))
            return true;
    }

    // 没有找到任何 Fixtuer 包含之
    return false;
};

/**
 * 加载单个 fixture 对象
 */
Body.prototype._loadFixture = function(world, body, fixtureDef) {
    var fixture = Box2D.b2FixtureDefProxy();
    
    fixture.set_density(1.0 * fixtureDef.density || 0);
    fixture.set_friction(fixtureDef.friction || 0);
    fixture.set_restitution(fixtureDef.restitution || 0);
    fixture.set_isSensor(fixtureDef.sensor || false);

    var shape;
    switch (fixtureDef.type) {
    case qc.Box2D.Body.FIXTURE_TYPE.CIRCLE :
        shape = Box2D.b2CircleShapeProxy();
        shape.set_m_radius(world.pixelToMeter(fixtureDef.radius || 0));
        if (fixtureDef.center)
            shape.set_m_p(Box2D.Vec2Proxy(
                world.pixelToMeter(fixtureDef.center.x),
                world.pixelToMeter(fixtureDef.center.y)));
        else
            shape.set_m_p(Box2D.Vec2Proxy(0, 0));
        break;

    case qc.Box2D.Body.FIXTURE_TYPE.POLYGON :
    case qc.Box2D.Body.FIXTURE_TYPE.CHAIN :
        // 生成形状
        if (fixtureDef.type === qc.Box2D.Body.FIXTURE_TYPE.POLYGON)
            shape = Box2D.b2PolygonShapeProxy();
        else
            shape = Box2D.b2ChainShapeProxy();

        var vertices = fixtureDef.vertices;
        var buffer = Box2D.b2VerticesBufferProxy(vertices.length);
        var offset = 0;

        for (var i = 0, len = vertices.length; i < len; i++) {
            Box2D.setValue(buffer + (offset),
                world.pixelToMeter(vertices[i].x), 'float');
            Box2D.setValue(buffer + (offset + 4),
                world.pixelToMeter(vertices[i].y), 'float');
            offset += 8;
        }

        var ptr_wrapped = Box2D.wrapPointer(buffer, Box2D.b2Vec2);

        if (fixtureDef.type === qc.Box2D.Body.FIXTURE_TYPE.POLYGON)
            shape.Set(ptr_wrapped, vertices.length);
        else
            shape.CreateChain(ptr_wrapped, vertices.length);
        break;
    }

    fixture.set_shape(shape);
    body.CreateFixture(fixture);
};

/**
 * 清除所有的 Fixture
 */
Body.prototype.clearFixtures = function() {
    var fixtures = [];
    var fixture;
    var b2Body = this.gameObject.b2Body;

    // 先收集所有的 Fixtures
    for (fixture = b2Body.GetFixtureList(); fixture.e; fixture = fixture.GetNext()) {
        fixtures.push(fixture);
    }

    // 逐一析构掉
    var i, len = fixtures.length;
    for (i = 0; i < len; i++) {
        b2Body.DestroyFixture(fixtures[i]);
    }
};

/**
 * 获取一个 filter 对象
 */
Body.prototype._getBox2DFilter = function() {
    var b2Body = this.gameObject.b2Body;
    if (!b2Body) return null;

    var fixture = b2Body.GetFixtureList();
    if (!fixture) return null;

    return fixture.GetFilterData();
};

/**
 * 获取所有的 filter 对象
 */
Body.prototype._getBox2DFilters = function() {
    var b2Body = this.gameObject.b2Body;
    if (!b2Body) return null;

    var filters = [];
    var fixture;

    for (fixture = b2Body.GetFixtureList(); fixture.e; fixture = fixture.GetNext()) {
        filters.push(fixture.GetFilterData());
    }
    return filters;
};

/**
 * 清除具体某个Fixture
 */
Body.prototype.removeFixture = function(fixture) {
    var b2Body = this.gameObject.b2Body;
    if (fixture.GetBody() !== b2Body)
        return false;

    b2Body.DestroyFixture(fixture);
    return true;
};

Object.defineProperties(Body.prototype, {
    /**
     * body的类型，目前包括动态类型、静态类型、运动学物体
     */
    type : {
        get : function() { return this.gameObject._body.type; },
        set : function(v) {
            this.gameObject._body.type = v;
            var b2Body = this.gameObject.b2Body;
            if (!b2Body) return;
            switch (v) {
            case qc.Box2D.Body.TYPE.DYNAMIC : b2Body.SetType(Box2D.b2_dynamicBody); break;
            case qc.Box2D.Body.TYPE.KINEMATIC : b2Body.SetType(Box2D.b2_kinematicBody); break;
            default : b2Body.SetType(Box2D.b2_staticBody); break;
            }
        }
    },

    /**
     * 是否激活中（非激活中的物体会以很低的开销存活，直到被碰撞之后重新 awake）
     */
    isAwake : {
        get : function() { return this.gameObject._body.isAwake; },
        set : function(v) {
            this.gameObject._body.isAwake = v;
            var b2Body = this.gameObject.b2Body;
            if (b2Body) b2Body.SetAwake(v);
        }
    },

    /**
     * 是否是子弹类型，子弹类型是用于高速运动的物体，设置该属性可以避免部分穿墙
     */
    bullet : {
        get : function() { return this.gameObject._body.bullet; },
        set : function(v) {
            this.gameObject._body.bullet = v;
            var b2Body = this.gameObject.b2Body;
            if (b2Body) b2Body.SetBullet(v);
        }
    },

    /**
     * 角速度
     */
    angularVelocity : {
        get : function() {
            if (this.gameObject.b2Body)
                return this.gameObject.b2Body.GetAngularVelocity();
            return this.gameObject._body.angularVelocity;
        },
        set : function(v) {
            this.gameObject._body.angularVelocity = v;
            var b2Body = this.gameObject.b2Body;
            if (b2Body) b2Body.SetAngularVelocity(v);
        }
    },

    /**
     * 旋转阻尼
     */
    angularDamping : {
        get : function() { return this.gameObject._body.angularDamping; },
        set : function(v) {
            this.gameObject._body.angularDamping = v;
            var b2Body = this.gameObject.b2Body;
            if (b2Body) b2Body.SetAngularDamping(v);
        }
    },

    /**
     * 是否固定旋转
     */
    fixedRotation : {
        get : function() { return this.gameObject._body.fixedRotation; },
        set : function(v) {
            this.gameObject._body.fixedRotation = v;
            var b2Body = this.gameObject.b2Body;
            if (b2Body) b2Body.SetFixedRotation(v);
        }
    },

    /**
     * 线性阻尼
     */
    linearDamping : {
        get : function() { return this.gameObject._body.linearDamping; },
        set : function(v) {
            this.gameObject._body.linearDamping = v;
            var b2Body = this.gameObject.b2Body;
            if (b2Body) b2Body.SetLinearDamping(v);
        }
    },

    /**
     * 线速度
     */
    linearVelocity : {
        get : function() {
            var b2Body = this.gameObject.b2Body;
            if (b2Body) {
                var b2Pos = b2Body.GetLinearVelocity();
                return new qc.Point(b2Pos.get_x(), b2Pos.get_y());
            }
            return this.gameObject._body.linearVelocity;
        },
        set : function(v) {
            this.gameObject._body.linearVelocity = v;
            var b2Body = this.gameObject.b2Body;
            if (b2Body) b2Body.SetLinearVelocity(Box2D.Vec2Proxy(v.x, v.y));
        }
    },

    /**
     * 响应重力的倍率
     */
    gravityScale : {
        get : function() { return this.gameObject._body.gravityScale; },
        set : function(v) {
            this.gameObject._body.gravityScale = v;
            var b2Body = this.gameObject.b2Body;
            if (b2Body) b2Body.SetGravityScale(v);
        }
    },

    /**
     * 质量系数
     */
    density : {
        get : function() {
            var fixtures = this.gameObject._body.fixture;
            if (!fixtures || !fixtures.length) return 0;
            return fixtures[0].density;
        },
        set : function(v) {
            var fixtures = this.gameObject._body.fixture;
            var i, len = fixtures.length;
            for (i = 0; i < len; i++)
                fixtures[i].density = v;

            // 设置到世界中
            var fixture, b2Body = this.gameObject.b2Body;
            for (fixture = b2Body.GetFixtureList(); fixture.e; fixture = fixture.GetNext())
                fixture.SetDensity(v);
            b2Body.ResetMassData();
        }
    },

    /**
     * 摩擦力
     */
    friction : {
        get : function() {
            var fixtures = this.gameObject._body.fixture;
            if (!fixtures || !fixtures.length) return 0;
            return fixtures[0].friction;
        },
        set : function(v) {
            var fixtures = this.gameObject._body.fixture;
            var i, len = fixtures.length;
            for (i = 0; i < len; i++)
                fixtures[i].friction = v;

            // 设置到世界中
            var fixture, b2Body = this.gameObject.b2Body;
            for (fixture = b2Body.GetFixtureList(); fixture.e; fixture = fixture.GetNext()) {
                fixture.SetFriction(v);
                fixture.Refilter();
            }
        }
    },

    /**
     * 恢复系数
     */
    restitution : {
        get : function() {
            var fixtures = this.gameObject._body.fixture;
            if (!fixtures || !fixtures.length) return 0;
            return fixtures[0].restitution;
        },
        set : function(v) {
            var fixtures = this.gameObject._body.fixture;
            var i, len = fixtures.length;
            for (i = 0; i < len; i++)
                fixtures[i].restitution = v;

            // 设置到世界中
            var fixture, b2Body = this.gameObject.b2Body;
            for (fixture = b2Body.GetFixtureList(); fixture.e; fixture = fixture.GetNext()) {
                fixture.SetRestitution(v);
                fixture.Refilter();
            }
        }
    },

    /**
     * 是否传感器
     */
    sensor : {
        get : function() {
            var fixtures = this.gameObject._body.fixture;
            if (!fixtures || !fixtures.length) return 0;
            return fixtures[0].sensor;
        },
        set : function(v) {
            var fixtures = this.gameObject._body.fixture;
            var i, len = fixtures.length;
            for (i = 0; i < len; i++)
                fixtures[i].sensor = v;

            // 设置到世界中
            var fixture, b2Body = this.gameObject.b2Body;
            for (fixture = b2Body.GetFixtureList(); fixture.e; fixture = fixture.GetNext()) {
                fixture.SetSensor(v);
                fixture.Refilter();
            }
        }
    },

    /**
     * fixture类型
     */
    fixtureType : {
        get : function() {
            var fixtures = this.gameObject._body.fixture;
            if (!fixtures || !fixtures.length) return 0;
            return fixtures[0].type;
        },
        set : function(v) {
            var fixtures = this.gameObject._body.fixture;
            var i, len = fixtures.length;
            for (i = 0; i < len; i++)
                fixtures[i].type = v;

            // 重置所有 fixture
            this.resetFixtureShape();
        }
    },

    /**
     *  category bits
     */
    categoryBits : {
        get : function() {
            var filterData = this._getBox2DFilter();
            if (filterData)
                filterData.get_categoryBits();
            else
                return 0x0001;
        },
        set : function(v) {
            var filters = this._getBox2DFilters();
            for (var i = 0, len = filters.length; i < len; i++) {
                var filter = filters[i];
                filter.set_categoryBits(v);
            }
        }
    },

    /**
     * mask bits
     */
    maskBits : {
        get : function() {
            var filterData = this._getBox2DFilter();
            if (filterData)
                filterData.get_maskBits();
            else
                return -1;
        },
        set : function(v) {
            var filters = this._getBox2DFilters();
            for (var i = 0, len = filters.length; i < len; i++) {
                var filter = filters[i];
                filter.set_maskBits(v);
            }
        }
    },

    /**
     * group index
     */
    groupIndex : {
        get : function() {
            var filterData = this._getBox2DFilter();
            if (filterData)
                filterData.get_groupIndex();
            else
                return 0;
        },
        set : function(v) {
            var filters = this._getBox2DFilters();
            for (var i = 0, len = filters.length; i < len; i++) {
                var filter = filters[i];
                filter.set_groupIndex(v);
            }
        }
    }
});

/**
 * @author wudm
 * @copyright 2016 Qcplay All Rights Reserved.
 */

/**
 * Box2D contact 对象，响应碰撞事件，并分发给对应的 body 进行处理
 */
var ContactListener = qc.Box2D.ContactListener = function(world) {
    var self = this;
    self.b2Listener = new Box2D.JSContactListener();

    // 为 b2Listener 赋事件
    this.b2Listener.BeginContact = function(contact) {
        self.handleContact(contact, true);
    };
    this.b2Listener.EndContact = function(contact) {
        self.handleContact(contact, false);
    };
    this.b2Listener.PreSolve = function(contact, oldManifold) {
        self.preSolve(contact, oldManifold);
    };
    this.b2Listener.PostSolve = function(contact, impulse) {
        self.postSolve(contact, impulse);
    };

    // 注册作为 Box2D 世界的接听
    world.setContactListener(this.b2Listener);
};
ContactListener.prototype = {};
ContactListener.prototype.constructor = ContactListener;

/**
 * 两个Fixture接触的接触事件，无论是否传感器都会触发这个回调
 * isBeginning 标记是开始事件还是结束事件
 */
ContactListener.prototype.handleContact = function(contact, isBeginning) {
    // 转换 contact
    contact = Box2D.wrapPointer(contact, Box2D.b2Contact);

    var fixtureA = contact.GetFixtureA();
    var fixtureB = contact.GetFixtureB();
    var bodyA = fixtureA.GetBody();
    var bodyB = fixtureB.GetBody();

    // 获取对应在世界中的对象
    var gameObjectA = bodyA.gameObject;
    var gameObjectB = bodyB.gameObject;
    if (!gameObjectA || !gameObjectB) return;

    // 分发事件
    var eventPara = {
        fixtureA : fixtureA,
        fixtureB : fixtureB,
        gameObjectA : gameObjectA,
        gameObjectB : gameObjectB,
        contact : contact,
        isBeginning : isBeginning
    };
    gameObjectA.body.onContact.dispatch(eventPara);
    gameObjectB.body.onContact.dispatch(eventPara);
};

/**
 * Pre-Solve事件
 * 这个事件发生在冲突检测到之后，但是冲突解决（被执行）之前
 * 它可以给你个机会取消contact，或者判定碰撞点的状态、速度
 */
ContactListener.prototype.preSolve = function(contact, oldManifold) {
    // 转换 contact
    contact = Box2D.wrapPointer(contact, Box2D.b2Contact);

    var fixtureA = contact.GetFixtureA();
    var fixtureB = contact.GetFixtureB();
    var bodyA = fixtureA.GetBody();
    var bodyB = fixtureB.GetBody();

    // 获取对应在世界中的对象
    var gameObjectA = bodyA.gameObject;
    var gameObjectB = bodyB.gameObject;
    if (!gameObjectA || !gameObjectB) return;

    // 分发事件
    var eventPara = {
        fixtureA : fixtureA,
        fixtureB : fixtureB,
        gameObjectA : gameObjectA,
        gameObjectB : gameObjectB,
        contact : contact,
        oldManifold : oldManifold
    };
    gameObjectA.body.onPreSolve.dispatch(eventPara);
    gameObjectB.body.onPreSolve.dispatch(eventPara);
};

/**
 * Post-Solve事件
 * 这个事件里两个形状已经发生碰撞被已处理，此时可以获取到碰撞冲力或动能
 */
ContactListener.prototype.postSolve = function(contact, impulse) {
    // 转换 contact
    contact = Box2D.wrapPointer(contact, Box2D.b2Contact);

    var fixtureA = contact.GetFixtureA();
    var fixtureB = contact.GetFixtureB();
    var bodyA = fixtureA.GetBody();
    var bodyB = fixtureB.GetBody();

    // 获取对应在世界中的对象
    var gameObjectA = bodyA.gameObject;
    var gameObjectB = bodyB.gameObject;
    if (!gameObjectA || !gameObjectB) return;

    // 分发事件
    var eventPara = {
        fixtureA : fixtureA,
        fixtureB : fixtureB,
        gameObjectA : gameObjectA,
        gameObjectB : gameObjectB,
        contact : contact,
        impulse : impulse
    };
    gameObjectA.body.onPostSolve.dispatch(eventPara);
    gameObjectB.body.onPostSolve.dispatch(eventPara);
};

/**
 * @author wudm
 * @copyright 2016 Qcplay All Rights Reserved.
 */

/**
 * Box2D debug 绘制对象，用于绘制 Box2D 世界的物体的形状
 */
var DebugDraw = qc.Box2D.DebugDraw = function(world) {

    var self = this;
    self.b2Draw = new Box2D.JSDraw();
    self.world = world;

    self.enabled = false;

    // 默认所有都绘制
    self.flags =
        DebugDraw.FlagShapeBit |
        DebugDraw.FlagJointBit |
        DebugDraw.FlagAabbBit |
        DebugDraw.FlagPairBit |
        DebugDraw.FlagCenterOfMassBit;

    // 实现具体绑定逻辑
    self.implementDraw();

    // 注册作为 Box2D 世界的接听
    world.setDebugDraw(self.b2Draw);
};
DebugDraw.prototype = {};
DebugDraw.prototype.constructor = DebugDraw;

DebugDraw.FlagShapeBit = 0x0001;
DebugDraw.FlagJointBit = 0x0002;
DebugDraw.FlagAabbBit = 0x0004;
DebugDraw.FlagPairBit = 0x0008;
DebugDraw.FlagCenterOfMassBit = 0x0010;

Object.defineProperties(DebugDraw.prototype, {
    /**
     * 是否开启
     */
    enabled : {
        get : function() {
            return this._enabled;
        },
        set : function(v) {
            if (this._enabled === v) return;

            this._enabled = v;
            if (!v) {
                this._releaseCanvas();
            }
        }
    },

    /**
     * 绘制类型掩码
     */
    flags : {
        get : function() {
            return this.b2Draw.GetFlags();
        },
        set : function(v) {
            this.b2Draw.SetFlags(v);
        }
    }
});

/**
 * 绘制 debug 信息
 */
DebugDraw.prototype.render = function() {
    var self = this;
    if (!self._enabled) return;

    if (!self._initCanvas()) return;

    var context = self._context;
    var canvas = self._canvas;

    // 清空之前的 debug draw 信息
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 开始绘制工作
    context.save();

    var PTM = this.world.PTM;
    var ratio = PTM * self.world.game.resolution;
    context.scale(ratio, ratio);
    context.lineWidth /= ratio;
    context.fillStyle  = 'rgb(255, 255, 0)';

    // 驱动绘制
    self.world.drawDebugData();

    // 结束绘制工作
    context.restore();
};

/**
 * 创建 debug 用的 canvas
 */
DebugDraw.prototype._initCanvas = function() {
    var self = this;

    // 找到游戏 canvas 对象
    var gameCanvas = self.world.game.canvas;
    if (!gameCanvas)
        return false;

    var canvas = self._canvas;
    if (!canvas) {
        // 尝试创建 canvas
        canvas = self._canvas = document.createElement('canvas');
        self._context = self._canvas.getContext('2d');
        gameCanvas.parentNode.insertBefore(self._canvas, gameCanvas);
        canvas.style.left = canvas.style.top = '0px';
        canvas.style.position = 'absolute';
    }

    // 调整为游戏画布大小
    if (canvas.style.width !== gameCanvas.style.width ||
        canvas.style.height !== gameCanvas.style.height ||
        canvas.width !== gameCanvas.width ||
        canvas.height !== gameCanvas.height) {
        canvas.width = gameCanvas.width;
        canvas.height = gameCanvas.height;
        canvas.style.width = gameCanvas.style.width;
        canvas.style.height = gameCanvas.style.height;
    }
    return true;
};

/**
 * 释放掉 Canvas 资源
 */
DebugDraw.prototype._releaseCanvas = function() {
    var self = this;
    var canvas = self._canvas;

    if (!canvas)
        return;

    self._context = null;
    self._canvas = null;
    if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
    }
};

/**
 * 设置 debug 画笔的颜色
 */
DebugDraw.prototype.setColorFromDebugDrawCallback = function(colorPtr) {
    var color = Box2D.wrapPointer(colorPtr, Box2D.b2Color);
    var red = (color.get_r() * 255) | 0;
    var green = (color.get_g() * 255) | 0;
    var blue = (color.get_b() * 255) | 0;

    var colorStr = red + "," + green + "," + blue;

    // 设置画布的绘制颜色
    var context = this._context;
    context.fillStyle = "rgba(" + colorStr + ",0.5)";
    context.strokeStyle = "rgb(" + colorStr + ")";
};

/**
 * 绘制线条
 */
DebugDraw.prototype.drawSegment = function(vect1Ptr, vect2Ptr) {
    var vert1 = Box2D.wrapPointer(vect1Ptr, Box2D.b2Vec2);
    var vert2 = Box2D.wrapPointer(vect2Ptr, Box2D.b2Vec2);

    var context = this._context;
    context.beginPath();
    context.moveTo(vert1.get_x(), vert1.get_y());
    context.lineTo(vert2.get_x(), vert2.get_y());
    context.stroke();
};

/**
 * 绘制多边形
 */
DebugDraw.prototype.drawPolygon = function(verticesPtr, vertexCount, fill) {
    var context = this._context;
    var i, vert;

    context.beginPath();
    for (i = 0; i < vertexCount; i++) {
        vert = Box2D.wrapPointer(verticesPtr + (i * 8), Box2D.b2Vec2);
        if (i === 0)
            context.moveTo(vert.get_x(), vert.get_y());
        else
            context.lineTo(vert.get_x(), vert.get_y());
    }
    context.closePath();

    if (fill)
        context.fill();

    // 结束绘制
    context.stroke();
};

/**
 * 绘制圆形
 */
DebugDraw.prototype.drawCircle = function(center, radius, axis, fill) {
    var centerV = Box2D.wrapPointer(center, Box2D.b2Vec2);
    var centerX = centerV.get_x();
    var centerY = centerV.get_y();
    var axisV = Box2D.wrapPointer(axis, Box2D.b2Vec2);

    var context = this._context;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

    if (fill)
        context.fill();
    context.stroke();

    if (fill) {
        //render axis marker
        var vert2V = Box2D.Vec2Proxy(centerX, centerY);
        axisV.set_x(axisV.get_x() * radius);
        axisV.set_y(axisV.get_y() * radius);
        vert2V.op_add(axisV);
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(vert2V.get_x(), vert2V.get_y());
        context.stroke();
    }
};

/**
 * 绘制 transform
 */
DebugDraw.prototype.drawTransform = function(transform) {
    var trans = Box2D.wrapPointer(transform, Box2D.b2Transform);
    var pos = trans.get_p();
    var rot = trans.get_q();
    var context = this._context;

    // 绘制两条垂直的线在锚点上
    context.save();
    context.translate(pos.get_x(), pos.get_y());
    context.scale(0.5, 0.5);
    context.rotate(rot.GetAngle());
    context.lineWidth *= 3;
    context.strokeStyle = 'rgb(192,0,0)';
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(2, 0);
    context.stroke();
    context.strokeStyle = 'rgb(0,192,0)';
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 2);
    context.stroke();
    context.restore();
};

/**
 * 实现具体的绘制逻辑
 */
DebugDraw.prototype.implementDraw = function() {
    var self = this;
    var b2Draw = self.b2Draw;

    // 绘制线
    b2Draw.DrawSegment = function(vect1Ptr, vect2Ptr, colorPtr) {
        self.setColorFromDebugDrawCallback(colorPtr);
        self.drawSegment(vect1Ptr, vect2Ptr);
    };

    // 绘制多边形
    b2Draw.DrawPolygon = function(verticesPtr, vertexCount, colorPtr) {
        self.setColorFromDebugDrawCallback(colorPtr);
        self.drawPolygon(verticesPtr, vertexCount, false);
    };
    b2Draw.DrawSolidPolygon = function(verticesPtr, vertexCount, colorPtr) {
        self.setColorFromDebugDrawCallback(colorPtr);
        self.drawPolygon(verticesPtr, vertexCount, true);
    };

    // 绘制圆
    b2Draw.DrawCircle = function(center, radius, colorPtr) {
        self.setColorFromDebugDrawCallback(colorPtr);
        var dummyAxis = Box2D.Vec2Proxy(0,0);
        self.drawCircle(center, radius, dummyAxis, false);
    };
    b2Draw.DrawSolidCircle = function(center, radius, axis, colorPtr) {
        self.setColorFromDebugDrawCallback(colorPtr);
        self.drawCircle(center, radius, axis, true);
    };

    b2Draw.DrawTransform = function(transform) {
        self.drawTransform(transform);
    };
};

/**
 * @author wudm
 * @copyright 2016 Qcplay All Rights Reserved.
 */

/**
 * QueryAABB 处理对象
 */
var QueryAABB = qc.Box2D.QueryAABB = function(world) {
    var self = this;
    self.world = world;

    // 生成一份box2d需要的回调
    self.b2Callback = new Box2D.JSQueryCallback();

    // 初始化 hits 空
    self.hits = [];

    // 关注事件并进行处理
    self.b2Callback.ReportFixture = function(fixturePtr) {
        return self.reportFixture(fixturePtr);
    };
};
QueryAABB.prototype = {};
QueryAABB.prototype.constructor = QueryAABB;

/**
 * 处理 QueryAABB 结果
 */
QueryAABB.prototype.reportFixture = function(fixturePtr) {
    var fixture = Box2D.wrapPointer(fixturePtr, Box2D.b2Fixture);
    var gameObject = fixture.GetBody().gameObject;

    if (this.filter) {
        if (!this.filter.call(this.world, gameObject, fixture))
            // 不记录，继续向下查找
            return true;
    }

    // 需要查找最近的，由于回调中的 fixture 是不定序的。
    // 最近实际是通过 fraction 裁剪 raycast，最终多次裁剪后的仍然保存下来的一定是目标
    var thisFractionInfo = {
        fixture : fixture,
        gameObject : gameObject
    };

    if (this.findAll) {
        this.hits.push(thisFractionInfo);
        return true;
    }
    else {
        // 停止遍历
        this.hits = [ thisFractionInfo ];
        return false;
    }
};

/**
 * 进行一次查询
 */
QueryAABB.prototype.check = function(x, y, width, height, findAll, filter) {
    var self = this;

    if (typeof findAll === 'undefined') findAll = true;
    self.findAll = findAll;
    self.filter = filter;

    // 重置结果
    self.hits = [];

    var world = self.world;

    // 坐标系转换
    x = world.pixelToMeter(x);
    y = world.pixelToMeter(y);
    width = world.pixelToMeter(width);
    height = world.pixelToMeter(height);

    var aabb = new Box2D.b2AABB();
    var pLower = new Box2D.b2Vec2(x, y);
    var pUpper = new Box2D.b2Vec2(x + width, y + height);

    aabb.set_lowerBound(pLower);
    aabb.set_upperBound(pUpper);

    // 进行查询
    world.b2World.QueryAABB(self.b2Callback, aabb);

    // 查询完毕，释放内存
    Box2D.destroy(pUpper);
    Box2D.destroy(pLower);
    Box2D.destroy(aabb);

    return self.hits;
};

/**
 * @author wudm
 * @copyright 2016 Qcplay All Rights Reserved.
 */

/**
 * Raycast 处理对象，用于查询 raycast 的目标
 */
var Raycast = qc.Box2D.Raycast = function(world) {
    var self = this;
    self.world = world;

    // 生成一份box2d需要的回调
    self.b2Callback = new Box2D.JSRayCastCallback();

    // 初始化 hits 空
    self.hits = [];

    // 默认取最近的一个 cast 点
    self.closest = true;

    // 关注事件并进行处理
    self.b2Callback.ReportFixture = function(fixturePtr, pointPtr, normalPtr, fraction) {
        return self.reportFixture(fixturePtr, pointPtr, normalPtr, fraction);
    };
};
Raycast.prototype = {};
Raycast.prototype.constructor = Raycast;

/**
 * 处理 raycast 结果，一次 raycast 会走入多次该函数
 */
Raycast.prototype.reportFixture = function(fixturePtr, pointPtr, normalPtr, fraction) {
    var fixture = Box2D.wrapPointer(fixturePtr, Box2D.b2Fixture);
    var gameObject = fixture.GetBody().gameObject;

    // 计算碰撞点
    var world = this.world;
    var b2Point = Box2D.wrapPointer(pointPtr, Box2D.b2Vec2);
    var point = new qc.Point(world.meterToPixel(b2Point.get_x()),
                             world.meterToPixel(b2Point.get_y()));

    // 计算碰撞法线向量
    var b2Normal = Box2D.wrapPointer(normalPtr, Box2D.b2Vec2);
    var normal = new qc.Point(b2Normal.get_x(), b2Normal.get_y());

    // 是否有过滤函数
    if (this.filter) {
        if (!this.filter.call(world, gameObject, point, normal, fixture)) {
            // 滤过这个目标
            return -1;
        }
    }

    // 需要查找最近的，由于回调中的 fixture 是不定序的。
    // 最近实际是通过 fraction 裁剪 raycast，最终多次裁剪后的仍然保存下来的一定是目标
    var thisFractionInfo = {
        fixture : fixture,
        point : point,
        normal : normal,
        fraction : fraction,
        gameObject : gameObject
    };

    if (this.closest) {
        // 裁剪 raycast
        this.hits = [ thisFractionInfo ];
        return fraction;
    }
    else {
        // 继续遍历
        this.hits.push(thisFractionInfo);
        return 1;
    }
};

/**
 * 进行一次 raycast
 */
Raycast.prototype.check = function(x1, y1, x2, y2, closest, filter) {
    var self = this;

    if (typeof closest === 'undefined') closest = true;
    self.closest = closest;
    self.filter = filter;

    // 重置结果
    self.hits = [];

    var world = self.world;

    // 坐标系转换
    x1 = world.pixelToMeter(x1);
    y1 = world.pixelToMeter(y1);
    x2 = world.pixelToMeter(x2);
    y2 = world.pixelToMeter(y2);

    var pointA = new Box2D.b2Vec2(x1, y1);
    var pointB = new Box2D.b2Vec2(x2, y2);

    // 进行查询
    world.b2World.RayCast(self.b2Callback, pointA, pointB);

    // 释放内存
    Box2D.destroy(pointA);
    Box2D.destroy(pointB);

    return self.hits;
};

/**
 * The Arcade Physics world. Contains Arcade Physics related collision, overlap and motion methods.
 *
 * @class Phaser.Physics.Arcade
 * @constructor
 * @param {Phaser.Game} game - reference to the current game instance.
 */
var Arcade = Phaser.Physics.Arcade = function(game) {
    /**
     * @property {Phaser.Game} game - Local reference to game.
     */
    this.game = game;

    /**
     * @property {Phaser.Point} gravity - The World gravity setting. Defaults to x: 0, y: 0, or no gravity.
     */
    this.gravity = new Phaser.Point();

    /**
     * @property {Phaser.Rectangle} bounds - The bounds inside of which the physics world exists. Defaults to match the world bounds.
     */
    this.bounds = new Phaser.Rectangle(0, 0, game.world.width, game.world.height);

    /**
     * Set the checkCollision properties to control for which bounds collision is processed.
     * For example checkCollision.down = false means Bodies cannot collide with the World.bounds.bottom.
     * @property {object} checkCollision - An object containing allowed collision flags.
     */
    this.checkCollision = { up: true, down: true, left: true, right: true };

    /**
     * @property {number} maxObjects - Used by the QuadTree to set the maximum number of objects per quad.
     */
    this.maxObjects = 10;

    /**
     * @property {number} maxLevels - Used by the QuadTree to set the maximum number of iteration levels.
     */
    this.maxLevels = 4;

    /**
     * @property {number} OVERLAP_BIAS - A value added to the delta values during collision checks.
     */
    this.OVERLAP_BIAS = 10;

    /**
     * @property {boolean} forceX - If true World.separate will always separate on the X axis before Y. Otherwise it will check gravity totals first.
     */
    this.forceX = false;

    /**
     * @property {number} sortDirection - Used when colliding a Sprite vs. a Group, or a Group vs. a Group, this defines the direction the sort is based on. Default is Phaser.Physics.Arcade.LEFT_RIGHT.
     * @default
     */
    this.sortDirection = Phaser.Physics.Arcade.LEFT_RIGHT;

    /**
     * @property {boolean} skipQuadTree - If true the QuadTree will not be used for any collision. QuadTrees are great if objects are well spread out in your game, otherwise they are a performance hit. If you enable this you can disable on a per body basis via `Body.skipQuadTree`.
     */
    this.skipQuadTree = true;

    /**
     * @property {boolean} isPaused - If `true` the `Body.preUpdate` method will be skipped, halting all motion for all bodies. Note that other methods such as `collide` will still work, so be careful not to call them on paused bodies.
     */
    this.isPaused = false;

    /**
     * @property {Phaser.QuadTree} quadTree - The world QuadTree.
     */
    this.quadTree = new Phaser.QuadTree(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels);

    /**
     * @property {number} _total - Internal cache var.
     * @private
     */
    this._total = 0;

    // By default we want the bounds the same size as the world bounds
    this.setBoundsToWorld();
};
Arcade.prototype = {};
Arcade.prototype.constructor = Arcade;

/**
 * A constant used for the sortDirection value.
 * Use this if you don't wish to perform any pre-collision sorting at all, or will manually sort your Groups.
 * @constant
 * @type {number}
 */
Arcade.SORT_NONE = 0;

/**
 * A constant used for the sortDirection value.
 * Use this if your game world is wide but short and scrolls from the left to the right (i.e. Mario)
 * @constant
 * @type {number}
 */
Arcade.LEFT_RIGHT = 1;

/**
 * A constant used for the sortDirection value.
 * Use this if your game world is wide but short and scrolls from the right to the left (i.e. Mario backwards)
 * @constant
 * @type {number}
 */
Arcade.RIGHT_LEFT = 2;

/**
 * A constant used for the sortDirection value.
 * Use this if your game world is narrow but tall and scrolls from the top to the bottom (i.e. Dig Dug)
 * @constant
 * @type {number}
 */
Arcade.TOP_BOTTOM = 3;

/**
 * A constant used for the sortDirection value.
 * Use this if your game world is narrow but tall and scrolls from the bottom to the top (i.e. Commando or a vertically scrolling shoot-em-up)
 * @constant
 * @type {number}
 */
Arcade.BOTTOM_TOP = 4;

/**
 * 收集所有的 body 元素
 */
Arcade.prototype.gatherBody = function(node, bodies) {
    if (node.body) bodies.push(node.body);
    var children = node.children;
    if (children) {
        for (var i = 0, len = children.length; i < len; i++)
            this.gatherBody(children[i], bodies);
    }
};

/**
 * arcade 物理调度
 */
Arcade.prototype.preUpdate = function() {
    var game = this.game;

    // 这里我们认为具有 body 属性的对象相对世界节点而言是少的，所以记录下来
    // 后续就不要再进行遍历
    var bodies = [];
    this.gatherBody(this.game.world, bodies);

    var i, len = bodies.length;
    var controller;
    var qc;

    // 先进行 body 的 preUpdate
    for (i = 0; i < len; i++)
        bodies[i].preUpdate();

    // 再进行 body 的 update（主要检测相交）
    for (i = 0; i < len; i++) {
        qc = bodies[i].qc;
        if (!qc) continue;

        controller = bodies[i].qc.getScript('qc.arcade.RigidBody');
        if (controller)
            controller.updateRigidbody();
    }

    // 最后进行 body 的 postUpdate
    for (i = 0; i < len; i++)
        bodies[i].postUpdate();
};

/**
 * Updates the size of this physics world.
 *
 * @method Phaser.Physics.Arcade#setBounds
 * @param {number} x - Top left most corner of the world.
 * @param {number} y - Top left most corner of the world.
 * @param {number} width - New width of the world. Can never be smaller than the Game.width.
 * @param {number} height - New height of the world. Can never be smaller than the Game.height.
 */
Arcade.prototype.setBounds = function (x, y, width, height) {
    this.bounds.setTo(x, y, width, height);
};

/**
 * Updates the size of this physics world to match the size of the game world.
 *
 * @method Phaser.Physics.Arcade#setBoundsToWorld
 */
Arcade.prototype.setBoundsToWorld = function() {
    this.bounds.setTo(this.game.world.bounds.x, this.game.world.bounds.y,
        this.game.world.bounds.width, this.game.world.bounds.height);
};

/**
 * This will create an Arcade Physics body on the given game object or array of game objects.
 * A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
 *
 * @method Phaser.Physics.Arcade#enable
 * @param {object|array|Phaser.Group} object - The game object to create the physics body on. Can also be an array or Group of objects, a body will be created on every child that has a `body` property.
 * @param {boolean} [children=true] - Should a body be created on all children of this object? If true it will recurse down the display list as far as it can go.
 */
Arcade.prototype.enable = function(object, children) {
    if (typeof children === 'undefined') { children = true; }

    var i = 1;

    if (Array.isArray(object))
    {
        i = object.length;
        while (i--)
        {
            if (object[i] instanceof Phaser.Group)
            {
                //  If it's a Group then we do it on the children regardless
                this.enable(object[i].children, children);
            }
            else
            {
                this.enableBody(object[i]);

                if (children && object[i].hasOwnProperty('children') && object[i].children.length > 0)
                {
                    this.enable(object[i], true);
                }
            }
        }
    }
    else
    {
        if (object instanceof Phaser.Group)
        {
            //  If it's a Group then we do it on the children regardless
            this.enable(object.children, children);
        }
        else
        {
            this.enableBody(object);

            if (children && object.hasOwnProperty('children') && object.children.length > 0)
            {
                this.enable(object.children, true);
            }
        }
    }
};

/**
 * Creates an Arcade Physics body on the given game object.
 * A game object can only have 1 physics body active at any one time, and it can't be changed until the body is nulled.
 *
 * @method Phaser.Physics.Arcade#enableBody
 * @param {object} object - The game object to create the physics body on. A body will only be created if this object has a null `body` property.
 */
Arcade.prototype.enableBody = function (object) {
    if (object.hasOwnProperty('body') && object.body === null)
    {
        object.body = new Phaser.Physics.Arcade.Body(object);
    }
};

/**
 * Called automatically by a Physics body, it updates all motion related values on the Body unless `World.isPaused` is `true`.
 *
 * @method Phaser.Physics.Arcade#updateMotion
 * @param {Phaser.Physics.Arcade.Body} The Body object to be updated.
 */
Arcade.prototype.updateMotion = function(body) {
    var velocityDelta = this.computeVelocity(0, body, body.angularVelocity, body.angularAcceleration, body.angularDrag, body.maxAngular) - body.angularVelocity;
    body.angularVelocity += velocityDelta;
    body.rotation += (body.angularVelocity * this.game.time.physicsElapsed);

    body.velocity.x = this.computeVelocity(1, body, body.velocity.x, body.acceleration.x, body.drag.x, body.maxVelocity.x);
    body.velocity.y = this.computeVelocity(2, body, body.velocity.y, body.acceleration.y, body.drag.y, body.maxVelocity.y);

};

/**
 * A tween-like function that takes a starting velocity and some other factors and returns an altered velocity.
 * Based on a function in Flixel by @ADAMATOMIC
 *
 * @method Phaser.Physics.Arcade#computeVelocity
 * @param {number} axis - 0 for nothing, 1 for horizontal, 2 for vertical.
 * @param {Phaser.Physics.Arcade.Body} body - The Body object to be updated.
 * @param {number} velocity - Any component of velocity (e.g. 20).
 * @param {number} acceleration - Rate at which the velocity is changing.
 * @param {number} drag - Really kind of a deceleration, this is how much the velocity changes if Acceleration is not set.
 * @param {number} [max=10000] - An absolute value cap for the velocity.
 * @return {number} The altered Velocity value.
 */
Arcade.prototype.computeVelocity = function(axis, body, velocity, acceleration, drag, max) {
    if (typeof max === 'undefined') { max = 10000; }

    if (axis === 1 && body.allowGravity)
    {
        velocity += (this.gravity.x + body.gravity.x) * this.game.time.physicsElapsed;
    }
    else if (axis === 2 && body.allowGravity)
    {
        velocity += (this.gravity.y + body.gravity.y) * this.game.time.physicsElapsed;
    }

    if (acceleration)
    {
        velocity += acceleration * this.game.time.physicsElapsed;
    }
    else if (drag)
    {
        // var _drag = drag * this.game.time.physicsElapsed;
        drag *= this.game.time.physicsElapsed;

        if (velocity - drag > 0)
        {
            velocity -= drag;
        }
        else if (velocity + drag < 0)
        {
            velocity += drag;
        }
        else
        {
            velocity = 0;
        }
    }

    if (velocity > max)
    {
        velocity = max;
    }
    else if (velocity < -max)
    {
        velocity = -max;
    }

    return velocity;
};

/**
 * Checks for overlaps between two game objects. The objects can be Sprites, Groups or Emitters.
 * You can perform Sprite vs. Sprite, Sprite vs. Group and Group vs. Group overlap checks.
 * Unlike collide the objects are NOT automatically separated or have any physics applied, they merely test for overlap results.
 * Both the first and second parameter can be arrays of objects, of differing types.
 * If two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.
 * NOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups within Groups).
 *
 * @method Phaser.Physics.Arcade#overlap
 * @param {Phaser.Sprite|Phaser.Group|Phaser.Particles.Emitter|array} object1 - The first object or array of objects to check. Can be Phaser.Sprite, Phaser.Group or Phaser.Particles.Emitter.
 * @param {Phaser.Sprite|Phaser.Group|Phaser.Particles.Emitter|array} object2 - The second object or array of objects to check. Can be Phaser.Sprite, Phaser.Group or Phaser.Particles.Emitter.
 * @param {function} [overlapCallback=null] - An optional callback function that is called if the objects overlap. The two objects will be passed to this function in the same order in which you specified them.  The two objects will be passed to this function in the same order in which you specified them, unless you are checking Group vs. Sprite, in which case Sprite will always be the first parameter.
 * @param {function} [processCallback=null] - A callback function that lets you perform additional checks against the two objects if they overlap. If this is set then overlapCallback will only be called if processCallback returns true.
 * @param {object} [callbackContext] - The context in which to run the callbacks.
 * @return {boolean} True if an overlap occurred otherwise false.
 */
Arcade.prototype.overlap = function (object1, object2, overlapCallback, processCallback, callbackContext) {
    overlapCallback = overlapCallback || null;
    processCallback = processCallback || null;
    callbackContext = callbackContext || overlapCallback;

    this._total = 0;
    if (!Array.isArray(object1) && Array.isArray(object2))
    {
        for (var i = 0; i < object2.length; i++)
        {
            this.collideHandler(object1, object2[i], overlapCallback, processCallback, callbackContext, true);
        }
    }
    else if (Array.isArray(object1) && !Array.isArray(object2))
    {
        for (var i = 0; i < object1.length; i++)
        {
            this.collideHandler(object1[i], object2, overlapCallback, processCallback, callbackContext, true);
        }
    }
    else if (Array.isArray(object1) && Array.isArray(object2))
    {
        for (var i = 0; i < object1.length; i++)
        {
            for (var j = 0; j < object2.length; j++)
            {
                this.collideHandler(object1[i], object2[j], overlapCallback, processCallback, callbackContext, true);
            }
        }
    }
    else
    {
        this.collideHandler(object1, object2, overlapCallback, processCallback, callbackContext, true);
    }

    return (this._total > 0);
};

/**
 * Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.
 * Both the first and second parameter can be arrays of objects, of differing types.
 * If two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.
 * The objects are also automatically separated. If you don't require separation then use ArcadePhysics.overlap instead.
 * An optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place,
 * giving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.
 * The collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called.
 * NOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups or Tilemaps within other Groups).
 *
 * @method Phaser.Physics.Arcade#collide
 * @param {Phaser.Sprite|Phaser.Group|Phaser.Particles.Emitter|Phaser.TilemapLayer|array} object1 - The first object or array of objects to check. Can be Phaser.Sprite, Phaser.Group, Phaser.Particles.Emitter, or Phaser.TilemapLayer.
 * @param {Phaser.Sprite|Phaser.Group|Phaser.Particles.Emitter|Phaser.TilemapLayer|array} object2 - The second object or array of objects to check. Can be Phaser.Sprite, Phaser.Group, Phaser.Particles.Emitter or Phaser.TilemapLayer.
 * @param {function} [collideCallback=null] - An optional callback function that is called if the objects collide. The two objects will be passed to this function in the same order in which you specified them, unless you are colliding Group vs. Sprite, in which case Sprite will always be the first parameter.
 * @param {function} [processCallback=null] - A callback function that lets you perform additional checks against the two objects if they overlap. If this is set then collision will only happen if processCallback returns true. The two objects will be passed to this function in the same order in which you specified them.
 * @param {object} [callbackContext] - The context in which to run the callbacks.
 * @return {boolean} True if a collision occurred otherwise false.
 */
Arcade.prototype.collide = function(object1, object2, collideCallback, processCallback, callbackContext) {
    collideCallback = collideCallback || null;
    processCallback = processCallback || null;
    callbackContext = callbackContext || collideCallback;

    this._total = 0;
    if (!Array.isArray(object1) && Array.isArray(object2))
    {
        for (var i = 0; i < object2.length; i++)
        {
            this.collideHandler(object1, object2[i], collideCallback, processCallback, callbackContext, false);
        }
    }
    else if (Array.isArray(object1) && !Array.isArray(object2))
    {
        for (var i = 0; i < object1.length; i++)
        {
            this.collideHandler(object1[i], object2, collideCallback, processCallback, callbackContext, false);
        }
    }
    else if (Array.isArray(object1) && Array.isArray(object2))
    {
        for (var i = 0; i < object1.length; i++)
        {
            for (var j = 0; j < object2.length; j++)
            {
                this.collideHandler(object1[i], object2[j], collideCallback, processCallback, callbackContext, false);
            }
        }
    }
    else
    {
        this.collideHandler(object1, object2, collideCallback, processCallback, callbackContext, false);
    }

    return (this._total > 0);
};

/**
 * This method will sort a Groups _hash array based on the sortDirection property.
 *
 * Each function should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`.
 *
 * @method sort
 * @protected
 * @param {Phaser.Group} group - The Group to sort.
 */
Arcade.prototype.sort = function(group) {
    if (this.sortDirection === Phaser.Physics.Arcade.LEFT_RIGHT)
    {
        //  Game world is say 2000x600 and you start at 0
        group._hash.sort(function(a, b) {
            if (!a.body || !b.body)
            {
                return -1;
            }
            return a.body.x - b.body.x;
        });
    }
    else if (this.sortDirection === Phaser.Physics.Arcade.RIGHT_LEFT)
    {
        //  Game world is say 2000x600 and you start at 2000
        group._hash.sort(function(a, b) {
            if (!a.body || !b.body)
            {
                return -1;
            }
            return b.body.x - a.body.x;
        });
    }
    else if (this.sortDirection === Phaser.Physics.Arcade.TOP_BOTTOM)
    {
        //  Game world is say 800x2000 and you start at 0
        group._hash.sort(function(a, b) {
            if (!a.body || !b.body)
            {
                return -1;
            }
            return a.body.y - b.body.y;
        });
    }
    else if (this.sortDirection === Phaser.Physics.Arcade.BOTTOM_TOP)
    {
        //  Game world is say 800x2000 and you start at 2000
        group._hash.sort(function(a, b) {
            if (!a.body || !b.body)
            {
                return -1;
            }
            return b.body.y - a.body.y;
        });
    }
};

/**
 * Internal collision handler.
 *
 * @method Phaser.Physics.Arcade#collideHandler
 * @private
 * @param {Phaser.Sprite|Phaser.Group|Phaser.Particles.Emitter|Phaser.TilemapLayer} object1 - The first object to check. Can be an instance of Phaser.Sprite, Phaser.Group, Phaser.Particles.Emitter, or Phaser.TilemapLayer.
 * @param {Phaser.Sprite|Phaser.Group|Phaser.Particles.Emitter|Phaser.TilemapLayer} object2 - The second object to check. Can be an instance of Phaser.Sprite, Phaser.Group, Phaser.Particles.Emitter or Phaser.TilemapLayer. Can also be an array of objects to check.
 * @param {function} collideCallback - An optional callback function that is called if the objects collide. The two objects will be passed to this function in the same order in which you specified them.
 * @param {function} processCallback - A callback function that lets you perform additional checks against the two objects if they overlap. If this is set then collision will only happen if processCallback returns true. The two objects will be passed to this function in the same order in which you specified them.
 * @param {object} callbackContext - The context in which to run the callbacks.
 * @param {boolean} overlapOnly - Just run an overlap or a full collision.
 */
Arcade.prototype.collideHandler = function(object1, object2, collideCallback, processCallback, callbackContext, overlapOnly) {
    //  If neither of the objects are set or exist then bail out
    if (!object1 || !object2 || !object1.exists || !object2.exists)
    {
        return;
    }

    //  Groups? Sort them
    if (this.sortDirection !== Phaser.Physics.Arcade.SORT_NONE)
    {
        if (object1.physicsType === Phaser.GROUP)
        {
            this.sort(object1);
        }

        if (object2.physicsType === Phaser.GROUP)
        {
            this.sort(object2);
        }
    }

    //  SPRITES
    this.collideSpriteVsSprite(object1, object2, collideCallback, processCallback, callbackContext, overlapOnly);
};

/**
 * An internal function. Use Phaser.Physics.Arcade.collide instead.
 *
 * @method Phaser.Physics.Arcade#collideSpriteVsSprite
 * @private
 * @param {Phaser.Sprite} sprite1 - The first sprite to check.
 * @param {Phaser.Sprite} sprite2 - The second sprite to check.
 * @param {function} collideCallback - An optional callback function that is called if the objects collide. The two objects will be passed to this function in the same order in which you specified them.
 * @param {function} processCallback - A callback function that lets you perform additional checks against the two objects if they overlap. If this is set then collision will only happen if processCallback returns true. The two objects will be passed to this function in the same order in which you specified them.
 * @param {object} callbackContext - The context in which to run the callbacks.
 * @param {boolean} overlapOnly - Just run an overlap or a full collision.
 * @return {boolean} True if there was a collision, otherwise false.
 */
Arcade.prototype.collideSpriteVsSprite = function(sprite1, sprite2, collideCallback, processCallback, callbackContext, overlapOnly) {

    if (!sprite1.body || !sprite2.body)
    {
        return false;
    }

    if (this.separate(sprite1.body, sprite2.body, processCallback, callbackContext, overlapOnly))
    {
        if (collideCallback)
        {
            collideCallback.call(callbackContext, sprite1, sprite2);
        }

        this._total++;
    }
    return true;
};

/**
 * The core separation function to separate two physics bodies.
 *
 * @private
 * @method Phaser.Physics.Arcade#separate
 * @param {Phaser.Physics.Arcade.Body} body1 - The first Body object to separate.
 * @param {Phaser.Physics.Arcade.Body} body2 - The second Body object to separate.
 * @param {function} [processCallback=null] - A callback function that lets you perform additional checks against the two objects if they overlap. If this function is set then the sprites will only be collided if it returns true.
 * @param {object} [callbackContext] - The context in which to run the process callback.
 * @param {boolean} overlapOnly - Just run an overlap or a full collision.
 * @return {boolean} Returns true if the bodies collided, otherwise false.
 */
Arcade.prototype.separate = function(body1, body2, processCallback, callbackContext, overlapOnly) {
    if (!body1.enable || !body2.enable || !this.intersects(body1, body2))
    {
        return false;
    }

    //  They overlap. Is there a custom process callback? If it returns true then we can carry on, otherwise we should abort.
    if (processCallback && processCallback.call(callbackContext, body1.sprite, body2.sprite) === false)
    {
        return false;
    }

    //  Do we separate on x or y first?

    var result = false;

    //  If we weren't having to carry around so much legacy baggage with us, we could do this properly. But alas ...
    if (this.forceX || Math.abs(this.gravity.y + body1.gravity.y) < Math.abs(this.gravity.x + body1.gravity.x))
    {
        result = (this.separateX(body1, body2, overlapOnly) || this.separateY(body1, body2, overlapOnly));
    }
    else
    {
        result = (this.separateY(body1, body2, overlapOnly) || this.separateX(body1, body2, overlapOnly));
    }

    return overlapOnly ? true : result;
};

/**
 * 相交检查
 */
Arcade.prototype.intersects = function(body1, body2) {
    // 需要判定几个离散点
    var count = Math.max(body1.ccdIterations, body2.ccdIterations);
    if (count <= 0) {
        // 不需要离散点，直接判定
        return !(body1.right <= body2.x || body1.bottom <= body2.y ||
                 body1.x >= body2.right || body1.y >= body2.bottom);
    }

    // 做线性插值
    var deltaX1 = body1._dx / (count + 2),
        deltaX2 = body2._dx / (count + 2),
        deltaY1 = body1._dy / (count + 2),
        deltaY2 = body2._dy / (count + 2);
    var pt1 = Array(count + 1),
        pt2 = Array(count + 1);
    pt1[count] = [body1.x, body1.right, body1.y, body1.bottom];
    pt2[count] = [body2.x, body2.right, body2.y, body2.bottom];
    for (var i = count - 1; i >= 0; i--) {
        pt1[i] = [pt1[i + 1][0] - deltaX1, pt1[i + 1][1] - deltaX1, pt1[i + 1][2] - deltaY1, pt1[i + 1][3] - deltaY1];
    }
    for (i = count - 1; i >= 0; i--) {
        pt2[i] = [pt2[i + 1][0] - deltaX2, pt2[i + 1][1] - deltaX2, pt2[i + 1][2] - deltaY2, pt2[i + 1][3] - deltaY2];
    }

    // 逐个点比较
    for (i = 0; i <= count; i++) {
        if (pt1[i][1] <= pt2[i][0] || pt1[i][3] <= pt2[i][2] ||
            pt1[i][0] >= pt2[i][1] || pt1[i][2] >= pt2[i][3]) {
            // 这个点没有碰撞，继续检测
            continue;
        }

        // 在这个点碰撞了，修正位置
        body1.x = pt1[i][0];
        body1.y = pt1[i][2];
        body2.x = pt2[i][0];
        body2.y = pt2[i][2];
        return true;
    }
    return false;
};

/**
 * The core separation function to separate two physics bodies on the x axis.
 *
 * @private
 * @method Phaser.Physics.Arcade#separateX
 * @param {Phaser.Physics.Arcade.Body} body1 - The Body object to separate.
 * @param {Phaser.Physics.Arcade.Body} body2 - The Body object to separate.
 * @param {boolean} overlapOnly - If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.
 * @return {boolean} Returns true if the bodies were separated, otherwise false.
 */
Arcade.prototype.separateX = function(body1, body2, overlapOnly) {
    //  Can't separate two immovable bodies
    if (body1.immovable && body2.immovable)
    {
        return false;
    }

    var overlap = 0;

    //  Check if the hulls actually overlap
    if (this.intersects(body1, body2))
    {
        var maxOverlap = body1.deltaAbsX() + body2.deltaAbsX() + this.OVERLAP_BIAS;

        if (body1.deltaX() === 0 && body2.deltaX() === 0)
        {
            //  They overlap but neither of them are moving
            body1.embedded = true;
            body2.embedded = true;
        }
        else if (body1.deltaX() > body2.deltaX())
        {
            //  Body1 is moving right and/or Body2 is moving left
            overlap = body1.right - body2.x;

            if ((overlap > maxOverlap) || body1.checkCollision.right === false || body2.checkCollision.left === false)
            {
                overlap = 0;
            }
            else
            {
                body1.touching.none = false;
                body1.touching.right = true;
                body2.touching.none = false;
                body2.touching.left = true;
            }
        }
        else if (body1.deltaX() < body2.deltaX())
        {
            //  Body1 is moving left and/or Body2 is moving right
            overlap = body1.x - body2.width - body2.x;

            if ((-overlap > maxOverlap) || body1.checkCollision.left === false || body2.checkCollision.right === false)
            {
                overlap = 0;
            }
            else
            {
                body1.touching.none = false;
                body1.touching.left = true;
                body2.touching.none = false;
                body2.touching.right = true;
            }
        }

        //  Resets the overlapX to zero if there is no overlap, or to the actual pixel value if there is
        body1.overlapX = overlap;
        body2.overlapX = overlap;

        //  Then adjust their positions and velocities accordingly (if there was any overlap)
        if (overlap !== 0)
        {
            if (overlapOnly || body1.customSeparateX || body2.customSeparateX)
            {
                return true;
            }

            var v1 = body1.velocity.x;
            var v2 = body2.velocity.x;

            if (!body1.immovable && !body2.immovable)
            {
                overlap *= 0.5;

                body1.x -= overlap;
                body2.x += overlap;

                var nv1 = Math.sqrt((v2 * v2 * body2.mass) / body1.mass) * ((v2 > 0) ? 1 : -1);
                var nv2 = Math.sqrt((v1 * v1 * body1.mass) / body2.mass) * ((v1 > 0) ? 1 : -1);
                var avg = (nv1 + nv2) * 0.5;

                nv1 -= avg;
                nv2 -= avg;

                body1.velocity.x = avg + nv1 * body1.bounce.x;
                body2.velocity.x = avg + nv2 * body2.bounce.x;
            }
            else if (!body1.immovable)
            {
                body1.x -= overlap;
                body1.velocity.x = v2 - v1 * body1.bounce.x;

                //  This is special case code that handles things like vertically moving platforms you can ride
                if (body2.moves)
                {
                    body1.y += (body2.y - body2.prevY) * body2.friction.y;
                }
            }
            else if (!body2.immovable)
            {
                body2.x += overlap;
                body2.velocity.x = v1 - v2 * body2.bounce.x;

                //  This is special case code that handles things like vertically moving platforms you can ride
                if (body1.moves)
                {
                    body2.y += (body1.y - body1.prevY) * body1.friction.y;
                }
            }

            return true;
        }
    }

    return false;
};

/**
 * The core separation function to separate two physics bodies on the y axis.
 *
 * @private
 * @method Phaser.Physics.Arcade#separateY
 * @param {Phaser.Physics.Arcade.Body} body1 - The Body object to separate.
 * @param {Phaser.Physics.Arcade.Body} body2 - The Body object to separate.
 * @param {boolean} overlapOnly - If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.
 * @return {boolean} Returns true if the bodies were separated, otherwise false.
 */
Arcade.prototype.separateY = function(body1, body2, overlapOnly) {
    //  Can't separate two immovable or non-existing bodies
    if (body1.immovable && body2.immovable)
    {
        return false;
    }

    var overlap = 0;

    //  Check if the hulls actually overlap
    if (this.intersects(body1, body2))
    {
        var maxOverlap = body1.deltaAbsY() + body2.deltaAbsY() + this.OVERLAP_BIAS;

        if (body1.deltaY() === 0 && body2.deltaY() === 0)
        {
            //  They overlap but neither of them are moving
            body1.embedded = true;
            body2.embedded = true;
        }
        else if (body1.deltaY() > body2.deltaY())
        {
            //  Body1 is moving down and/or Body2 is moving up
            overlap = body1.bottom - body2.y;

            if ((overlap > maxOverlap) || body1.checkCollision.down === false || body2.checkCollision.up === false)
            {
                overlap = 0;
            }
            else
            {
                body1.touching.none = false;
                body1.touching.down = true;
                body2.touching.none = false;
                body2.touching.up = true;
            }
        }
        else if (body1.deltaY() < body2.deltaY())
        {
            //  Body1 is moving up and/or Body2 is moving down
            overlap = body1.y - body2.bottom;

            if ((-overlap > maxOverlap) || body1.checkCollision.up === false || body2.checkCollision.down === false)
            {
                overlap = 0;
            }
            else
            {
                body1.touching.none = false;
                body1.touching.up = true;
                body2.touching.none = false;
                body2.touching.down = true;
            }
        }

        //  Resets the overlapY to zero if there is no overlap, or to the actual pixel value if there is
        body1.overlapY = overlap;
        body2.overlapY = overlap;

        //  Then adjust their positions and velocities accordingly (if there was any overlap)
        if (overlap !== 0)
        {
            if (overlapOnly || body1.customSeparateY || body2.customSeparateY)
            {
                return true;
            }

            var v1 = body1.velocity.y;
            var v2 = body2.velocity.y;

            if (!body1.immovable && !body2.immovable)
            {
                overlap *= 0.5;

                body1.y -= overlap;
                body2.y += overlap;

                var nv1 = Math.sqrt((v2 * v2 * body2.mass) / body1.mass) * ((v2 > 0) ? 1 : -1);
                var nv2 = Math.sqrt((v1 * v1 * body1.mass) / body2.mass) * ((v1 > 0) ? 1 : -1);
                var avg = (nv1 + nv2) * 0.5;

                nv1 -= avg;
                nv2 -= avg;

                body1.velocity.y = avg + nv1 * body1.bounce.y;
                body2.velocity.y = avg + nv2 * body2.bounce.y;
            }
            else if (!body1.immovable)
            {
                body1.y -= overlap;
                body1.velocity.y = v2 - v1 * body1.bounce.y;

                //  This is special case code that handles things like horizontal moving platforms you can ride
                if (body2.moves)
                {
                    body1.x += (body2.x - body2.prevX) * body2.friction.x;
                }
            }
            else if (!body2.immovable)
            {
                body2.y += overlap;
                body2.velocity.y = v1 - v2 * body2.bounce.y;

                //  This is special case code that handles things like horizontal moving platforms you can ride
                if (body1.moves)
                {
                    body2.x += (body1.x - body1.prevX) * body1.friction.x;
                }
            }

            return true;
        }
    }

    return false;
};

/**
 * Move the given display object towards the destination object at a steady velocity.
 * If you specify a maxTime then it will adjust the speed (overwriting what you set) so it arrives at the destination in that number of seconds.
 * Timings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.
 * Note: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.
 * Note: The display object doesn't stop moving once it reaches the destination coordinates.
 * Note: Doesn't take into account acceleration, maxVelocity or drag (if you've set drag or acceleration too high this object may not move at all)
 *
 * @method Phaser.Physics.Arcade#moveToObject
 * @param {any} displayObject - The display object to move.
 * @param {any} destination - The display object to move towards. Can be any object but must have visible x/y properties.
 * @param {number} [speed=60] - The speed it will move, in pixels per second (default is 60 pixels/sec)
 * @param {number} [maxTime=0] - Time given in milliseconds (1000 = 1 sec). If set the speed is adjusted so the object will arrive at destination in the given number of ms.
 * @return {number} The angle (in radians) that the object should be visually set to in order to match its new velocity.
 */
Arcade.prototype.moveToObject = function(displayObject, destination, speed, maxTime) {
    if (typeof speed === 'undefined') { speed = 60; }
    if (typeof maxTime === 'undefined') { maxTime = 0; }

    var angle = Math.atan2(destination.y - displayObject.y, destination.x - displayObject.x);

    if (maxTime > 0)
    {
        //  We know how many pixels we need to move, but how fast?
        speed = this.distanceBetween(displayObject, destination) / (maxTime / 1000);
    }

    displayObject.body.velocity.x = Math.cos(angle) * speed;
    displayObject.body.velocity.y = Math.sin(angle) * speed;
    return angle;
};

/**
 * Given the angle (in degrees) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
 * One way to use this is: velocityFromAngle(angle, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object.
 *
 * @method Phaser.Physics.Arcade#velocityFromAngle
 * @param {number} angle - The angle in degrees calculated in clockwise positive direction (down = 90 degrees positive, right = 0 degrees positive, up = 90 degrees negative)
 * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
 * @param {Phaser.Point|object} [point] - The Point object in which the x and y properties will be set to the calculated velocity.
 * @return {Phaser.Point} - A Point where point.x contains the velocity x value and point.y contains the velocity y value.
 */
Arcade.prototype.velocityFromAngle = function(angle, speed, point) {
    if (typeof speed === 'undefined') { speed = 60; }
    point = point || new Phaser.Point();

    return point.setTo((Math.cos(this.game.math.degToRad(angle)) * speed), (Math.sin(this.game.math.degToRad(angle)) * speed));
};

/**
 * Given the rotation (in radians) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
 * One way to use this is: velocityFromRotation(rotation, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object.
 *
 * @method Phaser.Physics.Arcade#velocityFromRotation
 * @param {number} rotation - The angle in radians.
 * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
 * @param {Phaser.Point|object} [point] - The Point object in which the x and y properties will be set to the calculated velocity.
 * @return {Phaser.Point} - A Point where point.x contains the velocity x value and point.y contains the velocity y value.
 */
Arcade.prototype.velocityFromRotation = function(rotation, speed, point) {
    if (typeof speed === 'undefined') { speed = 60; }
    point = point || new Phaser.Point();

    return point.setTo((Math.cos(rotation) * speed), (Math.sin(rotation) * speed));
};

/**
 * Sets the acceleration.x/y property on the display object so it will move towards the target at the given speed (in pixels per second sq.)
 * You must give a maximum speed value, beyond which the display object won't go any faster.
 * Note: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.
 * Note: The display object doesn't stop moving once it reaches the destination coordinates.
 *
 * @method Phaser.Physics.Arcade#accelerateToObject
 * @param {any} displayObject - The display object to move.
 * @param {any} destination - The display object to move towards. Can be any object but must have visible x/y properties.
 * @param {number} [speed=60] - The speed it will accelerate in pixels per second.
 * @param {number} [xSpeedMax=500] - The maximum x velocity the display object can reach.
 * @param {number} [ySpeedMax=500] - The maximum y velocity the display object can reach.
 * @return {number} The angle (in radians) that the object should be visually set to in order to match its new trajectory.
 */
Arcade.prototype.accelerateToObject = function(displayObject, destination, speed, xSpeedMax, ySpeedMax) {
    if (typeof speed === 'undefined') { speed = 60; }
    if (typeof xSpeedMax === 'undefined') { xSpeedMax = 1000; }
    if (typeof ySpeedMax === 'undefined') { ySpeedMax = 1000; }

    var angle = this.angleBetween(displayObject, destination);

    displayObject.body.acceleration.setTo(Math.cos(angle) * speed, Math.sin(angle) * speed);
    displayObject.body.maxVelocity.setTo(xSpeedMax, ySpeedMax);

    return angle;
};

/**
 * Find the distance between two display objects (like Sprites).
 *
 * @method Phaser.Physics.Arcade#distanceBetween
 * @param {any} source - The Display Object to test from.
 * @param {any} target - The Display Object to test to.
 * @return {number} The distance between the source and target objects.
 */
Arcade.prototype.distanceBetween = function(source, target) {
    var dx = source.x - target.x;
    var dy = source.y - target.y;

    return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Find the angle in radians between two display objects (like Sprites).
 *
 * @method Phaser.Physics.Arcade#angleBetween
 * @param {any} source - The Display Object to test from.
 * @param {any} target - The Display Object to test to.
 * @return {number} The angle in radians between the source and target display objects.
 */
Arcade.prototype.angleBetween = function(source, target) {
    var dx = target.x - source.x;
    var dy = target.y - source.y;

    return Math.atan2(dy, dx);
};

Phaser.Physics.Arcade.Body = function(sprite) {
    /**
     * @property {qc.Sprite} sprite - Reference to the parent Sprite.
     */
    this.sprite = sprite;
    this.qc = sprite._qc;

    /**
     * @property {qc.Game} game - Local reference to game.
     */
    this.game = sprite.game;

    /**
     * @property {number} type - The type of physics system this body belongs to.
     */
    this.type = Phaser.Physics.ARCADE;

    /**
     * @property {boolean} enable - A disabled body won't be checked for any form of collision or overlap or have its pre/post updates run.
     * @default true
     */
    this.enable = true;

    /**
     * @property {number} x - 刚体左上角的屏幕X坐标
     */
    this.x = sprite.world.x;
    this.prevX = this.x;

    /**
     * @property {number} y - 刚体左上角的屏幕Y坐标
     */
    this.y = sprite.world.y;
    this.prevY = this.y;

    /**
     * @property {number} width - 刚体在屏幕中的宽度
     * @readonly
     */
    this.width = sprite.width;

    /**
     * @property {number} height - 刚体在屏幕中的高度
     * @readonly
     */
    this.height = sprite.height;

    /**
     * @property {boolean} allowRotation - Allow this Body to be rotated? (via angularVelocity, etc)
     * @default
     */
    this.allowRotation = true;

    /**
     * An Arcade Physics Body can have angularVelocity and angularAcceleration. Please understand that the collision Body
     * itself never rotates, it is always axis-aligned. However these values are passed up to the parent Sprite and updates its rotation.
     * @property {number} rotation
     */
    this.rotation = sprite.rotation;

    /**
     * @property {number} preRotation - The previous rotation of the physics body.
     * @readonly
     */
    this.preRotation = sprite.rotation;

    /**
     * @property {qc.Point} gravity
     */
    this.gravity = new Phaser.Point(0, 0);

    /**
     * @property {number} ccdIterations - 连续碰撞的散列值
     * @default 0
     */
    this.ccdIterations = 0;

    /**
     * @property {qc.Point} velocity - 运动速度（基于父亲节点）
     */
    this.velocity = new Phaser.Point();
    this.newVelocity = new Phaser.Point(0, 0);

    /**
     * @property {qc.Point} deltaMax - 单次移动的最大距离限制
     */
    this.deltaMax = new Phaser.Point(0, 0);

    /**
     * @property {qc.Point} acceleration - 加速度
     */
    this.acceleration = new Phaser.Point();

    /**
     * @property {qc.Point} drag - The drag applied to the motion of the Body.
     */
    this.drag = new Phaser.Point();

    /**
     * @property {boolean} allowGravity - Allow this Body to be influenced by gravity? Either world or local.
     * @default
     */
    this.allowGravity = true;

    /**
     * @property {Phaser.Point} bounce - The elasticity of the Body when colliding. bounce.x/y = 1 means full rebound, bounce.x/y = 0.5 means 50% rebound velocity.
     */
    this.bounce = new Phaser.Point();

    /**
     * @property {Phaser.Point} maxVelocity - The maximum velocity in pixels per second sq. that the Body can reach.
     * @default
     */
    this.maxVelocity = new Phaser.Point(10000, 10000);

    /**
     * @property {Phaser.Point} friction - The amount of movement that will occur if another object 'rides' this one.
     */
    this.friction = new Phaser.Point(1, 0);

    /**
     * @property {number} angularVelocity - The angular velocity controls the rotation speed of the Body. It is measured in radians per second.
     * @default
     */
    this.angularVelocity = 0;

    /**
     * @property {number} angularAcceleration - The angular acceleration is the rate of change of the angular velocity. Measured in radians per second squared.
     * @default
     */
    this.angularAcceleration = 0;

    /**
     * @property {number} angularDrag - The drag applied during the rotation of the Body.
     * @default
     */
    this.angularDrag = 0;

    /**
     * @property {number} maxAngular - The maximum angular velocity in radians per second that the Body can reach.
     * @default
     */
    this.maxAngular = 1000;

    /**
     * @property {number} mass - The mass of the Body. When two bodies collide their mass is used in the calculation to determine the exchange of velocity.
     * @default
     */
    this.mass = 1;

    /**
     * @property {number} angle - The angle of the Body in radians, as calculated by its angularVelocity.
     * @readonly
     */
    this.angle = 0;

    /**
     * @property {number} speed - The speed of the Body as calculated by its velocity.
     * @readonly
     */
    this.speed = 0;

    /**
     * @property {number} facing - A const reference to the direction the Body is traveling or facing.
     * @default
     */
    this.facing = Phaser.NONE;

    /**
     * @property {boolean} immovable - An immovable Body will not receive any impacts from other bodies.
     * @default
     */
    this.immovable = false;

    /**
     * If you have a Body that is being moved around the world via a tween or a Group motion, but its local x/y position never
     * actually changes, then you should set Body.moves = false. Otherwise it will most likely fly off the screen.
     * If you want the physics system to move the body around, then set moves to true.
     * @property {boolean} moves - Set to true to allow the Physics system to move this Body, otherwise false to move it manually.
     * @default
     */
    this.moves = true;

    /**
     * This flag allows you to disable the custom x separation that takes place by Physics.Arcade.separate.
     * Used in combination with your own collision processHandler you can create whatever type of collision response you need.
     * @property {boolean} customSeparateX - Use a custom separation system or the built-in one?
     * @default
     */
    this.customSeparateX = false;

    /**
     * This flag allows you to disable the custom y separation that takes place by Physics.Arcade.separate.
     * Used in combination with your own collision processHandler you can create whatever type of collision response you need.
     * @property {boolean} customSeparateY - Use a custom separation system or the built-in one?
     * @default
     */
    this.customSeparateY = false;

    /**
     * When this body collides with another, the amount of overlap is stored here.
     * @property {number} overlapX - The amount of horizontal overlap during the collision.
     */
    this.overlapX = 0;

    /**
     * When this body collides with another, the amount of overlap is stored here.
     * @property {number} overlapY - The amount of vertical overlap during the collision.
     */
    this.overlapY = 0;

    /**
     * If a body is overlapping with another body, but neither of them are moving (maybe they spawned on-top of each other?) this is set to true.
     * @property {boolean} embedded - Body embed value.
     */
    this.embedded = false;

    /**
     * A Body can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World.
     * @property {boolean} collideWorldBounds - Should the Body collide with the World bounds?
     */
    this.collideWorldBounds = false;

    /**
     * Set the checkCollision properties to control which directions collision is processed for this Body.
     * For example checkCollision.up = false means it won't collide when the collision happened while moving up.
     * @property {object} checkCollision - An object containing allowed collision.
     */
    this.checkCollision = { none: false, any: true, up: true, down: true, left: true, right: true };

    /**
     * This object is populated with boolean values when the Body collides with another.
     * touching.up = true means the collision happened to the top of this Body for example.
     * @property {object} touching - An object containing touching results.
     */
    this.touching = { none: true, up: false, down: false, left: false, right: false };

    /**
     * This object is populated with previous touching values from the bodies previous collision.
     * @property {object} wasTouching - An object containing previous touching results.
     */
    this.wasTouching = { none: true, up: false, down: false, left: false, right: false };

    /**
     * This object is populated with boolean values when the Body collides with the World bounds or a Tile.
     * For example if blocked.up is true then the Body cannot move up.
     * @property {object} blocked - An object containing on which faces this Body is blocked from moving, if any.
     */
    this.blocked = { up: false, down: false, left: false, right: false };

    /**
     * @property {boolean} dirty - If this Body in a preUpdate (true) or postUpdate (false) state?
     */
    this.dirty = false;

    /**
     * @property {boolean} _reset - Internal cache var.
     * @private
     */
    this._reset = true;

    /**
     * @property {number} _sx - Internal cache var.
     * @private
     */
    this._sx = sprite.scale.x;
    this._spx = this._sx;

    /**
     * @property {number} _sy - Internal cache var.
     * @private
     */
    this._sy = sprite.scale.y;
    this._spy = this._sy;

    /**
     * @property {number} _dx - Internal cache var.
     * @private
     */
    this._dx = 0;

    /**
     * @property {number} _dy - Internal cache var.
     * @private
     */
    this._dy = 0;
};
var Body = Phaser.Physics.Arcade.Body;
Body.prototype = {};
Body.prototype.constructor = Body;

Object.defineProperties(Body.prototype, {
    right: {
        get: function() { return this.x + this.width; }
    },
    bottom: {
        get: function() { return this.y + this.height; }
    }
});

/**
 * 当节点缩放变化时，需要重新计算下
 */
Body.prototype.updateBounds = function(force) {
    var wt = this.qc.worldTransform;
    var asx = wt.a, asy = wt.d;

    var pwt = this.qc.parent.worldTransform;
    this._spx = pwt.a;
    this._spy = pwt.d;

    if (force ||
        (asx !== this._sx || asy !== this._sy)) {
        // 缓存scale的数据
        this._sx = asx;
        this._sy = asy;

        // 计算节点的世界宽和高
        // Note: get/set比较耗，这里直接访问内部变量了
        this.width = Math.abs(asx * this.qc._width);
        this.height = Math.abs(asy * this.qc._height);

        // 标记下
        this._reset = true;
    }
};

/**
 * 帧调度
 */
Body.prototype.preUpdate = function() {
    if (!this.enable || this.game.physics.arcade.isPaused) return;

    this.dirty = true;

    //  Store and reset collision flags
    this.wasTouching.none = this.touching.none;
    this.wasTouching.up = this.touching.up;
    this.wasTouching.down = this.touching.down;
    this.wasTouching.left = this.touching.left;
    this.wasTouching.right = this.touching.right;
    this.touching.none = true;
    this.touching.up = false;
    this.touching.down = false;
    this.touching.left = false;
    this.touching.right = false;
    this.blocked.up = false;
    this.blocked.down = false;
    this.blocked.left = false;
    this.blocked.right = false;
    this.embedded = false;

    // 计算当前的位置
    this.updateBounds();
    if (this._sx >= 0) {
        this.x = this.sprite.world.x - (this.sprite.anchor.x * this.width);
    }
    else {
        this.x = this.sprite.world.x - ((1 - this.sprite.anchor.x) * this.width);
    }
    if (this._sy >= 0) {
        this.y = this.sprite.world.y - (this.sprite.anchor.y * this.height);
    }
    else {
        this.y = this.sprite.world.y - ((1 - this.sprite.anchor.y) * this.height);
    }
    this.rotation = this.sprite.angle;
    this.preRotation = this.rotation;

    if (this._reset || this.sprite.fresh)
    {
        this.prevX = this.x;
        this.prevY = this.y;
    }

    if (this.moves)
    {
        this.game.physics.arcade.updateMotion(this);

        this.newVelocity.set(this.velocity.x * this.game.time.physicsElapsed,
            this.velocity.y * this.game.time.physicsElapsed);
        this.x += this.newVelocity.x * this._spx;
        this.y += this.newVelocity.y * this._spy;

        if (this.x !== this.prevX || this.y !== this.prevY)
        {
            this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
            this.angle = Math.atan2(this.velocity.y, this.velocity.x);
        }

        //  Now the State update will throw collision checks at the Body
        //  And finally we'll integrate the new position back to the Sprite in postUpdate
        if (this.collideWorldBounds)
        {
            this.checkWorldBounds();
        }
    }

    // 计算期望的位移差
    this._dx = this.x - this.prevX;
    this._dy = this.y - this.prevY;

    this._reset = false;
};

Body.prototype.postUpdate = function() {
    if (!this.enable || !this.dirty) return;

    this.dirty = false;

    // 计算调整后的位移（可能因为碰撞等原因进行了调整）
    var dx = this.x - this.prevX,
        dy = this.y - this.prevY;
    if (dx < 0)
    {
        this.facing = Phaser.LEFT;
    }
    else if (dx > 0)
    {
        this.facing = Phaser.RIGHT;
    }
    if (dy < 0)
    {
        this.facing = Phaser.UP;
    }
    else if (dy > 0)
    {
        this.facing = Phaser.DOWN;
    }

    if (this.moves)
    {
        this._dx = dx;
        this._dy = dy;

        if (this.deltaMax.x !== 0 && this._dx !== 0)
        {
            if (this._dx < 0 && this._dx < -this.deltaMax.x)
            {
                this._dx = -this.deltaMax.x;
                this.x = this._dx + this.prevX;
            }
            else if (this._dx > 0 && this._dx > this.deltaMax.x)
            {
                this._dx = this.deltaMax.x;
                this.x = this._dx + this.prevX;
            }
        }

        if (this.deltaMax.y !== 0 && this._dy !== 0)
        {
            if (this._dy < 0 && this._dy < -this.deltaMax.y)
            {
                this._dy = -this.deltaMax.y;
                this.y = this._dy + this.prevY;
            }
            else if (this._dy > 0 && this._dy > this.deltaMax.y)
            {
                this._dy = this.deltaMax.y;
                this.y = this._dy + this.prevY;
            }
        }

        // 根据left和right，计算目标的原点位置
        if (this._dx !== 0) this.qc.x += this._dx / this._spx;
        if (this._dy !== 0) this.qc.y += this._dy / this._spy;
        this._reset = true;
    }

    if (this.allowRotation)
    {
        this.sprite.angle += this.deltaZ();
    }
    this.prevX = this.x;
    this.prevY = this.y;
};

Body.prototype.destroy = function() {
    this.sprite.body = null;
    this.sprite = null;
    this.qc = null;
};

Body.prototype.checkWorldBounds = function() {
    if (this.x < this.game.physics.arcade.bounds.x && this.game.physics.arcade.checkCollision.left &&
        this._dx < 0)
    {
        // 碰到左边界了，需要拉回来
        var qc = this.sprite._qc;
        this.x = this.game.physics.arcade.bounds.x;

        this.velocity.x *= -this.bounce.x;
        this.blocked.left = true;
    }
    else if (this.right > this.game.physics.arcade.bounds.right && this.game.physics.arcade.checkCollision.right &&
        this._dx > 0)
    {
        // 碰到右边界了，需要拉回来
        var qc = this.sprite._qc;
        this.x = this.game.physics.arcade.bounds.right - this.width;

        this.velocity.x *= -this.bounce.x;
        this.blocked.right = true;
    }

    if (this.y < this.game.physics.arcade.bounds.y && this.game.physics.arcade.checkCollision.up &&
        this._dy < 0)
    {
        // 碰到上边界了，需要拉回来
        var qc = this.sprite._qc;
        this.y = this.game.physics.arcade.bounds.y;

        this.velocity.y *= -this.bounce.y;
        this.blocked.up = true;
    }
    else if (this.bottom > this.game.physics.arcade.bounds.bottom && this.game.physics.arcade.checkCollision.down &&
        this._dy > 0)
    {
        // 碰到下边界了，需要拉回来
        var qc = this.sprite._qc;
        this.y = this.game.physics.arcade.bounds.bottom - this.height;

        this.velocity.y *= -this.bounce.y;
        this.blocked.down = true;
    }
};

Body.prototype.reset = function(x, y) {
    this.velocity.set(0);
    this.acceleration.set(0);

    this.speed = 0;
    this.angularVelocity = 0;
    this.angularAcceleration = 0;

    this._reset = true;
};

/**
 * Returns true if the bottom of this Body is in contact with either the world bounds or a tile.
 *
 * @method Phaser.Physics.Arcade.Body#onFloor
 * @return {boolean} True if in contact with either the world bounds or a tile.
 */
Body.prototype.onFloor = function() {
    return this.blocked.down;
};

/**
 * Returns true if either side of this Body is in contact with either the world bounds or a tile.
 *
 * @method Phaser.Physics.Arcade.Body#onWall
 * @return {boolean} True if in contact with either the world bounds or a tile.
 */
Body.prototype.onWall = function() {
    return (this.blocked.left || this.blocked.right);
};

/**
 * Returns the absolute delta x value.
 *
 * @method Phaser.Physics.Arcade.Body#deltaAbsX
 * @return {number} The absolute delta value.
 */
Body.prototype.deltaAbsX = function() {
    return (this.deltaX() > 0 ? this.deltaX() : -this.deltaX());
};

/**
 * Returns the absolute delta y value.
 *
 * @method Phaser.Physics.Arcade.Body#deltaAbsY
 * @return {number} The absolute delta value.
 */
Body.prototype.deltaAbsY = function() {
    return (this.deltaY() > 0 ? this.deltaY() : -this.deltaY());
};

/**
 * Returns the delta x value. The difference between Body.x now and in the previous step.
 *
 * @method Phaser.Physics.Arcade.Body#deltaX
 * @return {number} The delta value. Positive if the motion was to the right, negative if to the left.
 */
Body.prototype.deltaX = function (){
    return this.x - this.prevX;
};

/**
 * Returns the delta y value. The difference between Body.y now and in the previous step.
 *
 * @method Phaser.Physics.Arcade.Body#deltaY
 * @return {number} The delta value. Positive if the motion was downwards, negative if upwards.
 */
Body.prototype.deltaY = function() {
    return this.y - this.prevY;
};

/**
 * Returns the delta z value. The difference between Body.rotation now and in the previous step.
 *
 * @method Phaser.Physics.Arcade.Body#deltaZ
 * @return {number} The delta value. Positive if the motion was clockwise, negative if anti-clockwise.
 */
Body.prototype.deltaZ = function() {
    return this.rotation - this.preRotation;
};

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 负责处理游戏的物理（使用arcade physics），刚体
 * @class qc.arcade.RigidBody
 */
var RigidBody = qc.defineBehaviour('qc.arcade.RigidBody', qc.Behaviour, function() {
        var self = this;
        self.arcade = self.game.phaser.physics.arcade;
        self.phaser = self.gameObject.phaser;

        // 检测碰撞的节点
        self._collide = [];

        // 检测重合的节点
        self._overlap = [];

        // 只有精灵和UIImage才能挂载刚体
        if (!(self.gameObject instanceof qc.Sprite) && !(self.gameObject instanceof qc.UIImage))
            throw new Error('Only Sprite or UIImage can attack RigidBody!');
        self.phaser.enableBody = false;
        self.phaser.physicsBodyType = Phaser.Physics.ARCADE;
        self.arcade.enable(self.phaser, false);
        self.phaser.body.enable = false;
        self.phaser.body._qc = self;
    }, function() {
        return {
            // 需要序列化的字段列表
            mass: qc.Serializer.NUMBER,
            collideWorldBounds: qc.Serializer.BOOLEAN,
            allowRotation: qc.Serializer.BOOLEAN,
            allowGravity: qc.Serializer.BOOLEAN,
            velocity: qc.Serializer.POINT,
            maxVelocity: qc.Serializer.POINT,
            acceleration: qc.Serializer.POINT,
            drag: qc.Serializer.POINT,
            gravity: qc.Serializer.POINT,
            friction: qc.Serializer.POINT,
            angularVelocity: qc.Serializer.NUMBER,
            maxAngular: qc.Serializer.NUMBER,
            angularAcceleration: qc.Serializer.NUMBER,
            angularDrag: qc.Serializer.NUMBER,
            bounce: qc.Serializer.POINT,
            immovable: qc.Serializer.BOOLEAN,
            moves: qc.Serializer.BOOLEAN,
            checkCollision: qc.Serializer.MAPPING,
            tilePadding: qc.Serializer.POINT,
            collides: qc.Serializer.NODES,
            overlaps: qc.Serializer.NODES,
            ccdIterations: qc.Serializer.INT
        }
    }
);

// 菜单上的显示
RigidBody.__menu = 'Plugins/Arcade/RigidBody';

Object.defineProperties(RigidBody.prototype, {
    /**
     * @property {number} mass - 物体的质量
     * @default 1
     */
    mass: {
        get: function()  { return this.phaser.body.mass; },
        set: function(v) { this.phaser.body.mass = v;    }
    },

    /**
     * @property {boolean} collideWorldBounds - 碰到游戏世界的边界是否反弹
     * @default false
     */
    collideWorldBounds: {
        get: function()  { return this.phaser.body.collideWorldBounds; },
        set: function(v) { this.phaser.body.collideWorldBounds = v;    }
    },

    /**
     * @property {boolean} allowRotation - 是否允许刚体旋转
     * @default true
     */
    allowRotation: {
        get: function()  { return this.phaser.body.allowRotation; },
        set: function(v) { this.phaser.body.allowRotation = v;    }
    },

    /**
     * @property {boolean} allowGravity - 是否受重力影响
     * @default true
     */
    allowGravity: {
        get: function()  { return this.phaser.body.allowGravity; },
        set: function(v) { this.phaser.body.allowGravity = v;    }
    },

    /**
     * @property {qc.Point} velocity - 速度
     * @default {x:0, y:0}
     */
    velocity: {
        get: function()  { return this.phaser.body.velocity; },
        set: function(v) { this.phaser.body.velocity = v;    }
    },

    /**
     * @property {qc.Point} maxVelocity - 最大移动速度
     * @default {x:10000, y:10000}
     */
    maxVelocity: {
        get: function()  { return this.phaser.body.maxVelocity; },
        set: function(v) { this.phaser.body.maxVelocity = v;    }
    },

    /**
     * @property {number} angularAcceleration - 角移动加速度
     * @default
     */
    angularAcceleration: {
        get: function()  { return this.phaser.body.angularAcceleration; },
        set: function(v) { this.phaser.body.angularAcceleration = v;
                           this.gameObject._isTransformDirty = true;    }
    },

    /**
     * @property {qc.Point} acceleration - 加速度
     * @default {x:0, y:0}
     */
    acceleration: {
        get: function()  { return this.phaser.body.acceleration; },
        set: function(v) { this.phaser.body.acceleration = v;    }
    },

    /**
     * @property {qc.Point} drag - 空气阻力
     * @default {x:0, y:0}
     */
    drag: {
        get: function()  { return this.phaser.body.drag; },
        set: function(v) { this.phaser.body.drag = v;    }
    },

    /**
     * @property {qc.Point} gravity - 重力
     * @default {x:0, y:0}
     */
    gravity: {
        get: function()  { return this.phaser.body.gravity; },
        set: function(v) { this.phaser.body.gravity = v;
                           this.gameObject._isTransformDirty = true; }
    },

    /**
     * @property {qc.Point} bounce - 反弹力
     * @default {x:0, y:0}
     */
    bounce: {
        get: function()  { return this.phaser.body.bounce; },
        set: function(v) { this.phaser.body.bounce = v;
                           this.gameObject._isTransformDirty = true; }
    },

    /**
     * @property {qc.Point} friction - 摩擦力
     * @default {x:1, y:0}
     */
    friction: {
        get: function()  { return this.phaser.body.friction; },
        set: function(v) { this.phaser.body.friction = v;
                           this.gameObject._isTransformDirty = true; }
    },

    /**
     * @property {number} angularVelocity - 角速度（弧度）
     * @default 0
     */
    angularVelocity: {
        get: function()  { return this.phaser.body.angularVelocity; },
        set: function(v) { this.phaser.body.angularVelocity = v;
                           this.gameObject._isTransformDirty = true; }
    },

    /**
     * @property {number} angularDrag - 角阻力
     * @default 0
     */
    angularDrag: {
        get: function()  { return this.phaser.body.angularDrag; },
        set: function(v) { this.phaser.body.angularDrag = v;
                           this.gameObject._isTransformDirty = true; }
    },

    /**
     * @property {number} maxAngular - 最大角速度（弧度）
     * @default 1000
     */
    maxAngular: {
        get: function()  { return this.phaser.body.maxAngular; },
        set: function(v) { this.phaser.body.maxAngular = v;    }
    },

    /**
     * @property {number} angle - 当前物体的角度（弧度）
     * @readonly
     */
    angle: {
        get: function() { return this.phaser.body.angle; }
    },

    /**
     * @property {number} speed - 当前物体的移动速度
     * @readonly
     */
    speed: {
        get: function() { return this.phaser.body.speed; }
    },

    /**
     * @property {boolean} immovable - 物理固定不动，不受其他刚体的影响
     * @default false
     */
    immovable: {
        get: function()  { return this.phaser.body.immovable; },
        set: function(v) { this.phaser.body.immovable = v;    }
    },

    /**
     * @property {boolean} moves - 当前是否由物理来决定其位置信息
     * @default true
     */
    moves: {
        get: function()  { return this.phaser.body.moves; },
        set: function(v) { this.phaser.body.moves = v;
                           this.gameObject._isTransformDirty = true; }
    },

    /**
     * @property {number} overlapX - 物理重叠后X方向的重叠范围
     * @readonly
     */
    overlapX: {
        get: function() { return this.phaser.body.overlapX; }
    },

    /**
     * @property {number} overlapY - 物理重叠后Y方向的重叠范围
     * @readonly
     */
    overlapY: {
        get: function() { return this.phaser.body.overlapY; }
    },

    /**
     * @property {boolean} embedded - 两个物体重叠但都没运动时，设置为true
     * @readonly
     */
    embedded: {
        get: function()  { return this.phaser.body.embedded; },
        set: function(v) { this.phaser.body.embedded = v;    }
    },

    /**
     * @property {object} checkCollision - 当物体向某方向移动时，是否检查碰撞
     * @default { none: false, any: true, up: true, down: true, left: true, right: true }
     */
    checkCollision: {
        get: function()  { return this.phaser.body.checkCollision; },
        set: function(v) { this.phaser.body.checkCollision = v;    }
    },

    /**
     * @property {object} touching - 物体碰撞后指明是从什么方向进入碰撞的
     * 例如：touching.up = true - 表示碰撞发生在顶部
     * @readonly
     */
    touching: {
        get: function() { return this.phaser.body.touching; }
    },

    /**
     * @property {object} wasTouching - This object is populated with previous touching values from the bodies previous collision.
     * @readonly
     */
    wasTouching: {
        get: function() { return this.phaser.body.wasTouching; }
    },

    /**
     * @property {object} blocked - 物体不能向某个方向移动
     * @readonly
     */
    blocked: {
        get: function()  { return this.phaser.body.blocked; },
        set: function(v) { this.phaser.body.blocked = v;    }
    },

    /**
     * @property {qc.Point} tilePadding -
     * 物体高速运动时，可能会穿过其他物体。
     * 设置这个值可以额外按照步长检测，防止这种情况的发生
     */
    tilePadding: {
        get: function()  { return this.phaser.body.tilePadding; },
        set: function(v) { this.phaser.body.tilePadding = v;    }
    },

    /**
     * @property {boolean} onFloor - 物体是不是在世界（地图）的底部
     * @readonly
     */
    onFloor: {
        get: function() { return this.phaser.body.onFloor(); }
    },

    /**
     * @property {boolean} onWall - 物体是不是某一边靠在世界边界
     * @readonly
     */
    onWall: {
        get: function() { return this.phaser.body.onWall(); }
    },

    /**
     * @property {number} deltaX - 两帧之间，物体在X方向移动的距离
     * @readonly
     */
    deltaX: {
        get: function() { return this.phaser.body.deltaX(); }
    },

    /**
     * @property {number} deltaY - 两帧之间，物体在Y方向移动的距离
     * @readonly
     */
    deltaY: {
        get: function() { return this.phaser.body.deltaY(); }
    },

    /**
     * @property {number} deltaZ - 两帧之间，物体旋转的弧度
     * @readonly
     */
    deltaZ: {
        get: function() { return this.phaser.body.deltaZ(); }
    },

    /**
     * @property {array} collides - 需要进行碰撞检测的元素
     */
    collides: {
        get: function()  { return this._collide; },
        set: function(v) { this._collide = v;    }
    },

    /**
     * @property {array} collides - 需要进行重叠检测的元素
     */
    overlaps: {
        get: function()  { return this._overlap; },
        set: function(v) { this._overlap = v;    }
    },

    /**
     * @property {number} ccdIterations
     *  碰撞检测时的离散点数量（0或-1表示不检测离散点）
     *  注意：值越大性能越差，但碰撞检测的效果越好
     * @default 0
     */
    ccdIterations: {
        get: function()  { return this.phaser.body.ccdIterations; },
        set: function(v) { this.phaser.body.ccdIterations = v;    }
    }
});

/**
 * 组件初始化
 */
RigidBody.prototype.awake = function() {
    // 强制重更新包围盒
    var body = this.phaser.body;
    body.updateBounds(true);
};

/**
 * 组件启用的处理
 */
RigidBody.prototype.onEnable = function() {
    var self = this;
    self.phaser.enableBody = true;
    self.phaser.body.enable = true;
};

/**
 * 组件禁用的处理
 */
RigidBody.prototype.onDisable = function() {
    var self = this;
    self.phaser.enableBody = false;
    self.phaser.body.enable = false;
};

/**
 * 帧调度
 */
RigidBody.prototype.updateRigidbody = function() {
    var self = this;
    for (var i = 0; i < self._collide.length; i++) {
        var node = self._collide[i];
        if (!node || node._destroy) continue;
        self.arcade.collide(self.phaser, node.phaser, self._collideCallback, undefined, self);
    }
    for (var i = 0; i < self._overlap.length; i++) {
        var node = self._overlap[i];
        if (!node || node._destroy) continue;
        self.arcade.overlap(self.phaser, node.phaser, self._overlapCallback, undefined, self);
    }
};

/**
 * 重置刚体的数据
 * @method qc.arcade.RigidBody#reset
 */
RigidBody.prototype.reset = function() {
    this._collide = [];
    this._overlap = [];
    this.phaser.body.reset(this.gameObject.x, this.gameObject.y);
};

/**
 * 添加一个碰撞检测节点
 * @method qc.arcade.RigidBody#addCollide
 */
RigidBody.prototype.addCollide = function(node) {
    if (this._collide.indexOf(node) === -1) {
        this._collide.push(node);
    }
};

/**
 * 删除一个碰撞检测节点
 * @method qc.arcade.RigidBody#removeCollide
 */
RigidBody.prototype.removeCollide = function(node) {
    var index = this._collide.indexOf(node);
    if (index !== -1) {
        this._collide.splice(index, 1);
    }
};

/**
 * 添加一个重叠检测节点
 * @method qc.arcade.RigidBody#addOverlap
 */
RigidBody.prototype.addOverlap = function(node) {
    if (this._overlap.indexOf(node) === -1) {
        this._overlap.push(node);
    }
};

/**
 * 删除一个重叠检测节点
 * @method qc.arcade.RigidBody#removeOverlap
 */
RigidBody.prototype.removeOverlap = function(node) {
    var index = this._overlap.indexOf(node);
    if (index !== -1) {
        this._overlap.splice(index, 1);
    }
};

/**
 * 按照一定的速度移动到目标位置
 * 如果指定了maxTime，会自动调整移动速度（确保按照指定的时间到达目标点）
 * 注意：移动时不会跟踪目标
 * 注意：当移动到目标位置时才会停止
 * @method qc.arcade.RigidBody#moveToObject
 * @param {any} destination - 目标位置（包含有xy属性即可）
 * @param {number} [speed=60] - 移动速度，每秒移动多少像素
 * @param {number} [maxTime=0] - 最大的耗时时间，单位毫秒
 * @return {number} 当前物体的旋转弧度
 */
RigidBody.prototype.moveToObject = function(destination, speed, maxTime) {
    return this.arcade.moveToObject(this.phaser, destination, speed, maxTime);
};

/**
 * 根据角度和速度，得到水平和垂直方向的速度
 * @param angle
 * @param speed
 * @param point
 * @returns {qc.Point}
 */
RigidBody.prototype.velocityFromAngle = function(angle, speed, point) {
    return this.arcade.velocityFromAngle(angle, speed, point);
};

/**
 * 根据弧度和速度，得到水平和垂直方向的速度
 * @param rotation
 * @param speed
 * @param point
 */
RigidBody.prototype.velocityFromRotation = function(rotation, speed, point) {
    return this.arcade.velocityFromRotation(rotation, speed, point);
};

/**
 * 以加速度移动到目标位置
 * @method qc.arcade.RigidBody#accelerateToObject
 * @param destination
 * @param speed
 * @param xSpeedMax
 * @param ySpeedMax
 */
RigidBody.prototype.accelerateToObject = function(destination, speed, xSpeedMax, ySpeedMax) {
    return this.arcade.accelerateToObject(this.phaser, destination, speed, xSpeedMax, ySpeedMax);
};

/**
 * 计算距离
 * @method qc.arcade.RigidBody#distanceBetween
 * @param target
 * @returns {number}
 */
RigidBody.prototype.distanceBetween = function(target) {
    return this.arcade.distanceBetween(this.phaser, target);
};

/**
 * 计算夹角（弧度）
 * @method qc.arcade.RigidBody#angleBetween
 * @param target
 * @returns {number}
 */
RigidBody.prototype.angleBetween = function(target) {
    return this.arcade.angleBetween(this.phaser, target);
};

/**
 * 碰撞的回调
 * @private
 */
RigidBody.prototype._collideCallback = function(o1, o2) {
    this.gameObject._sendMessage('onCollide', false, o1._qc, o2._qc);
};

/**
 * 重叠的回调
 * @private
 */
RigidBody.prototype._overlapCallback = function(o1, o2) {
    this.gameObject._sendMessage('onOverlap', false, o1._qc, o2._qc);
};

/**
 * @author weism
 * @copyright 2015 Qcplay All Rights Reserved.
 */

var WeChat = qc.defineBehaviour('qc.WeChat', qc.Behaviour, function() {
    var self = this;

    /**
     * @property {string} shareAppId - 用于分享的微信公众号的appid
     */
    self.shareAppId = '';

    /**
     * @property {string} wxAppId - 用于登录的微信公众号的appid
     */
    self.wxAppId = '';

    /**
     * @property {string} webAppId - 网站应用的appid
     */
    self.webAppId = '';

    /**
     * @property {string} domain
     *  域名（存放php文件的域名地址，例如：http://engine.zuoyouxi.com/wx/）
     *  域名最后面以 '/' 结束
     */
    self.domain = '';

    /**
     * @property {string} gameDomain
     *   游戏服务器存放的域名（即放game_client文件的域名地址）
     *   例如： http://engine.zuoyouxi.com/teris/
     */
    self.gameDomain = '';

    /**
     * @property {string} extendParams
     *   微信登录时的扩展参数，可用于传递一些自定义信息
     *   例如： {"game":1}
     */
    self.extendParams = '';

    /**
     * @property {boolean} redirectCurrentUrl
     *   = true：使用游戏页直接换取code。当在微信公众号后台配置了游戏域名（gameDomain）为回调地址时采用
     *   = false：使用this.domain + 'code.php'作为接收code的回调页，之后再跳转到本页面。当微信公众号后台配置的是domain时采用
     *            这种情况下，游戏的域名和公众号后台配置的可以是不一样的，并且多个游戏可以共用一个公众号的信息。缺点是浏览器会有两次跳转
     */
    self.redirectCurrentUrl = true;

    /**
     * @property {boolean} debug - 微信接口的debug是否打开，在发布时一定要关闭哦
     */
    self.debug = false;

    /**
     * 微信分享的接口实例
     */
    self.wx = new WX();

    /**
     * @property {qc.Signal} onStartLogin - 开始登录的事件
     */
    self.onStartLogin = new qc.Signal();

    /**
     * @property {qc.Signal} onLogin - 登录成功的事件
     */
    self.onLogin = new qc.Signal();

    /**
     * @property {qc.Signal} sessionExpired - 会话过期的事件
     */
    self.sessionExpired = new qc.Signal();

    /**
     * @property {object} user - 微信的用户信息
     * @readonly
     */
    self.user = null;

    /**
     * @property {string} status - 当前的登录状态
     *   loggingIn - 登录中
     *   loggedIn - 已登录
     *   expired - 会话过期
     */
    self.status = '';
}, {
    shareAppId: qc.Serializer.STRING,
    wxAppId: qc.Serializer.STRING,
    webAppId: qc.Serializer.STRING,
    domain: qc.Serializer.STRING,
    gameDomain: qc.Serializer.STRING,
    extendParams: qc.Serializer.STRING,
    redirectCurrentUrl: qc.Serializer.BOOLEAN,
    debug: qc.Serializer.BOOLEAN
});
WeChat.__menu = 'Plugins/WeChat';

// 初始化处理
WeChat.prototype.awake = function() {
    // 请求签名信息
    var self = this;
    if (!self.domain) return;

    var url = self.domain + 'index.php?cmd=sign&appid=' + self.shareAppId + '&url=' + encodeURIComponent(window.location.href);
    self.game.log.trace('开始请求微信分享的签名信息：{0}', url);
    qc.AssetUtil.get(url, function(r) {
        self.game.log.trace('获取签名成功：' + r);
        self.parseSign(r);
    }, function() {
        console.error('获取签名信息失败');
    });

    // 加载js库
    self.loadWXLib();

    // 获取code
    self._code = this.getParam('code');
    self._state = this.getParam('state');
    if (self._code) {
        // 请求换取token，如果失败需要重新请求登录
        self.status = 'loggingIn';
        self.game.timer.add(1, function() {
            self.requestToken(self._code);
        });
    }
};

// 析构的处理
WeChat.prototype.onDestroy = function() {
    if (this.timer) {
        this.game.timer.remove(this.timer);
    }
};

/**
 * 请求微信登录
 */
WeChat.prototype.login = function() {
    if (this.isWeChat()) {
        this.loginInWX();
        return;
    }
    this.loginInWeb();
};

// 微信内登陆
WeChat.prototype.loginInWX = function() {
    var url = '',
        redirectUri = window.location.origin + window.location.pathname;
    if (this.redirectCurrentUrl) {
        url = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
            "appid=" + this.wxAppId +
            "&redirect_uri=" + encodeURIComponent(redirectUri) +
            "&response_type=code&scope=snsapi_userinfo&state=weixin#wechat_redirect";
    }
    else {
        // 跳转到code.php页面，再跳转回本页面
        url = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
            "appid=" + this.wxAppId +
            "&redirect_uri=" + encodeURIComponent(this.domain + 'code.php') +
            "&response_type=code&scope=snsapi_userinfo" +
            "&state=" + encodeURIComponent(redirectUri) +
            "#wechat_redirect";
    }
    window.location.href = url;
};

// 微信外登录
WeChat.prototype.loginInWeb = function() {
    var url = '',
        redirectUri = window.location.origin + window.location.pathname;
    if (this.redirectCurrentUrl) {
        url = "https://open.weixin.qq.com/connect/qrconnect?" +
            "appid=" + this.webAppId +
            "&redirect_uri=" + encodeURIComponent(redirectUri) +
            "&response_type=code&scope=snsapi_login&state=pc#wechat_redirect";
    }
    else {
        // 跳转到code.php页面，再跳转回本页面
        url = "https://open.weixin.qq.com/connect/qrconnect?" +
            "appid=" + this.webAppId +
            "&redirect_uri=" + encodeURIComponent(this.domain + 'code.php') +
            "&response_type=code&scope=snsapi_login" +
            "&state=" + encodeURIComponent(redirectUri) +
            "#wechat_redirect";
    }
    window.location.href = url;
};

// 解析签名信息
WeChat.prototype.parseSign = function(r) {
    var self = this;
    var sign = JSON.parse(r);
    self.timeStamp = sign.timestamp;
    self.nonceStr = sign.nonceStr;
    self.signature = sign.signature;

    if (!self.jweixin) {
        // 微信接口尚未载入，延迟继续检测
        self.game.timer.add(500, function() {
            self.parseSign(r);
        });
        return;
    }

    // 调用微信的初始化接口
    self.game.log.trace('开始初始化微信接口');
    self.wx.debug = self.debug;
    self.wx.init({
        timeStamp: self.timeStamp,
        nonceStr: self.nonceStr,
        signature: self.signature,
        appId: self.shareAppId
    }, function() {
        self.game.log.trace('初始化微信接口完成。');
    });
};

// 动态加载wx的库
WeChat.prototype.loadWXLib = function() {
    var self = this;
    var src = "http://res.wx.qq.com/open/js/jweixin-1.0.0.js";
    var js = document.createElement('script');
    js.onerror = function() {
        console.error('加载jweixin库失败');
    };
    js.onload = function() {
        // 标记加载完成了
        self.game.log.trace('微信接口下载完成');
        self.jweixin = true;
    };
    js.setAttribute('src', src);
    js.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(js);
};

// 当前是否运行在微信客户端
WeChat.prototype.isWeChat = function() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger';
};

// 获取url的参数
WeChat.prototype.getParam = function(key) {
    var r = new RegExp("(\\?|#|&)" + key + "=([^&#]*)(&|#|$)");
    var m = location.href.match(r);
    return decodeURIComponent(!m ? "" : m[2]);
};

// 使用code换取token
WeChat.prototype.requestToken = function(code) {
    var self = this,
        url = self.gameDomain + "login.php?code=" + code;
    if (!self.isWeChat()) url += "&web=1";

    // 附加自定义的扩展参数
    url += "&extendParams=" + self.extendParams;

    self.onStartLogin.dispatch();
    qc.AssetUtil.get(url, function(r) {
        var data = JSON.parse(r);
        if (data.error) {
            // 换取token失败，重新请求登录
            self.game.log.error('换取token失败，重新请求登录');
            self.login();
            return;
        }

        // 登录成功了，抛出事件
        self.game.log.trace('登录成功：{0}', r);
        self.status = 'loggedIn';
        self.user = data;
        self.onLogin.dispatch();

        // 定期刷新access_token，并保持会话
        self.timer = self.game.timer.loop(5 * 60000, self.refreshToken, self);
    });
};

// 刷新token
WeChat.prototype.refreshToken = function() {
    var self = this,
        url = self.gameDomain + "refresh.php";
    if (!self.isWeChat()) url += "?web=1";
    qc.AssetUtil.get(url, function(r) {
        var data = JSON.parse(r);
        if (data.error) {
            // 刷新token失败了，抛出事件
            self.status = 'expired';
            self.game.timer.remove(self.timer);
            delete self.timer;
            self.sessionExpired.dispatch();
            return;
        }

        // 成功了，啥也不用处理
        self.game.log.trace('刷新Access Token成功。');
    });
};

var WX = qc.WX = function() {
    var self = this;

    self.title = '';
    self.imgUrl = '';
    self.desc = '';
    self.url = '';
    self.sign = null;
    self.ready = false;
    self.debug = false;
};
WX.prototype = {};
WX.prototype.constructor = WX;

/**
 * 初始化微信接口
 */
WX.prototype.init = function(sign, callback) {
    var self = this;
    self.sign = sign;

    // 不支持微信接口？
    if (!window.wx) return;
    wx.config({
        debug: self.debug,
        appId: sign.appId,
        timestamp: sign.timeStamp,
        nonceStr: sign.nonceStr,
        signature: sign.signature,
        jsApiList: [
            'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareAppMessage', 'onMenuShareWeibo',
            'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd',
            'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage',
            'translateVoice', 'getNetworkType', 'openLocation', 'getLocation', 'closeWindow', 'scanQRCode'
        ]
    });

    wx.ready(function() {
        // 标记下已经初始化完毕了
        self.ready = true;
        if (callback) callback();
    });
};

/**
 * 分享接口
 */
WX.prototype.share = function(title, imgUrl, desc, url, callback) {
    var self = this;
    self.title = title;
    self.imgUrl = imgUrl;
    self.desc = desc;
    self.url = url;
    self.callback = callback;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }

    var body = {
        title: self.title,
        desc: self.desc,
        link: self.url,
        imgUrl: self.imgUrl,
        success: function() {
            if (callback) callback();
        },
        cancel: function() {}
    };

    // 分享到朋友圈
    wx.onMenuShareTimeline(body);

    // 分享给朋友
    wx.onMenuShareAppMessage(body);

    // 分享到QQ
    wx.onMenuShareQQ(body);

    // 分享到腾讯微博
    wx.onMenuShareWeibo(body);

    // 分享到QQ空间
    wx.onMenuShareQZone(body);
};

/**
 * 拍照或从手机相册中选图
 * @param {number} count - 图片的数量
 */
WX.prototype.chooseImage = function(count, sizeType, sourceType, callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }

    if (!sizeType) sizeType = ['original', 'compressed'];
    if (!sourceType) sourceType = ['album', 'camera'];

    wx.chooseImage({
        count: count,
        sizeType: sizeType,
        sourceType: sourceType,
        success: function(res) {
            if (callback) callback(res.localIds);
        }
    });
};

/**
 * 预览图片
 */
WX.prototype.previewImage = function(current, urls) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }

    current = current || '';
    urls = urls || [];
    wx.previewImage({
        current: current,
        urls: urls
    });
};

/**
 * 上传图片，有效期为3天
 */
WX.prototype.uploadImage = function(localId, isShowProgressTips, callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.uploadImage({
        localId: localId,
        isShowProgressTips: isShowProgressTips ? 1 : 0,
        success: function(res) {
            if (callback) callback(res.serverId);
        }
    });
};

/**
 * 下载图片
 */
WX.prototype.downloadImage = function(serverId, isShowProgressTips, callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.downloadImage({
        serverId: serverId,
        isShowProgressTips: isShowProgressTips ? 1 : 0,
        success: function(res) {
            if (callback) callback(res.localId);
        }
    });
};

/**
 * 开始录音
 */
WX.prototype.startRecord = function() {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.startRecord();
};

/**
 * 停止录音
 */
WX.prototype.stopRecord = function(callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.stopRecord({
        success: function(res) {
            if (callback) callback(res.localId);
        }
    });
};

/**
 * 监听录音自动停止
 */
WX.prototype.onVoiceRecordEnd = function(callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.onVoiceRecordEnd({
        complete: function(res) {
            if (callback) callback(res.localId);
        }
    });
};

/**
 * 播放语音
 */
WX.prototype.playVoice = function(localId) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.playVoice({
        localId: localId
    });
};

/**
 * 暂停播放语音
 */
WX.prototype.pauseVoice = function(localId) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.pauseVoice({
        localId: localId
    });
};

/**
 * 暂停播放语音
 */
WX.prototype.stopVoice = function(localId) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.stopVoice({
        localId: localId
    });
};

/**
 * 监听语音播放完毕
 */
WX.prototype.onVoicePlayEnd = function(callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.onVoicePlayEnd({
        success: function (res) {
            if (callback) callback(res.localId);
        }
    });
};

/**
 * 上传语音，有效期为3天
 */
WX.prototype.uploadVoice = function(localId, isShowProgressTips, callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.uploadVoice({
        localId: localId,
        isShowProgressTips: isShowProgressTips ? 1 : 0,
        success: function(res) {
            if (callback) callback(res.serverId);
        }
    });
};

/**
 * 下载语音
 */
WX.prototype.downloadVoice = function(serverId, isShowProgressTips, callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.downloadVoice({
        serverId: serverId,
        isShowProgressTips: isShowProgressTips ? 1 : 0,
        success: function(res) {
            if (callback) callback(res.localId);
        }
    });
};

/**
 * 语音识别
 */
WX.prototype.translateVoice = function(localId, isShowProgressTips, callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.translateVoice({
        localId: localId,
        isShowProgressTips: isShowProgressTips ? 1 : 0,
        success: function(res) {
            if (callback) callback(res.translateResult);
        }
    });
};

/**
 * 获取网络状态：2g 3g 4g wifi
 */
WX.prototype.getNetworkType = function(callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.getNetworkType({
        success: function(res) {
            if (callback) callback(res.networkType);
        }
    });
};

/**
 * 查看位置
 */
WX.prototype.openLocation = function(lat, lng, name, address, scale, infoUrl) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    lat = lat || 0;
    lng = lng || 0;
    scale = scale || 1;
    name = name || '';
    address = address || '';
    infoUrl = infoUrl || '';
    wx.openLocation({
        latitude: lat,
        longitude: lng,
        name: name,
        address: address,
        scale: scale,
        infoUrl: infoUrl
    });
};

/**
 * 获取当前位置
 * @param {string} type - 'wgs84'(默认)，'gcj02'(火星坐标)
 * 返回的结果中，包含如下信息：
 *   latitude
 *   longitude
 *   speed
 *   accuracy
 */
WX.prototype.getLocation = function(type, callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    type = type || 'wgs84';
    wx.getLocation({
        type: type,
        success: callback
    });
};

/**
 * 微信扫一扫
 */
WX.prototype.scanQRCode = function(needResult, callback) {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.scanQRCode({
        needResult: needResult,
        scanType: ["qrCode","barCode"],
        success: function(res) {
            if (callback) callback(res.resultStr);
        }
    });
};

/**
 * 关闭当前网页
 */
WX.prototype.closeWindow = function() {
    var self = this;
    if (!self.ready) {
        console.error('尚未初始化完成');
        return;
    }
    wx.closeWindow();
};

/**
 * 微信支付
 */
WX.prototype.chooseWXPay = function() {
    // 后续增加
};
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

/**
 * @author chenx
 * @date 2015.10.15
 * copyright 2015 Qcplay All Rights Reserved.
 *
 * 负责与服务器通信，提供 http 与 websocket 两种通信方式
 */

/**
 * 负责处理服务器通信相关逻辑
 * @class qc.ServerCommunicate
 */
var ServerCommunicate = qc.defineBehaviour('qc.ServerCommunicate', qc.Behaviour, function() {

    /**
     * @property {string} url - 服务器url地址
     */
    this.url = '';

    // 缓存 socket 消息处理函数映射
    this._socketCmdMap = {};

    // websocket io 对象
    this.socket = null;

    // 是否已连接
    this.isConnected = false;

    // 连接事件和断开连接事件
    this.onConnect = new Phaser.Signal();
    this.onDisconnect = new Phaser.Signal();
    this.onError = new Phaser.Signal();
}, {
    url : qc.Serializer.STRING,
});

ServerCommunicate.__menu = 'Plugins/ServerCommunicate';

/************************* http begin ********************************/
/**
 * 收到消息回复
 * @param cmd {xhr} - 请求对象
 * @param resCallback {function} - 收到回复的回调函数
 * @param callbackArg {json} - 回调函数参数
 */
ServerCommunicate.prototype.receiveResponse = function(xhr, cmd, resCallback) {

    if (xhr.status == 0)
    {
        this.game.log.trace('消息{0}没有收到回复。', cmd);

        // 出错或没收到回复
        resCallback({ ret : false, reason : 'no response' });
        return;
    } else if(xhr.status != 200)
    {
        this.game.log.trace('消息{0}发送出错。', cmd);

        // 出错或没收到回复
        resCallback({ ret : false, reason : xhr.statusText });
        return;
    }

    var json = window.JSON.parse(xhr.responseText);
    json = json || {};

    this.game.log.trace('消息{0}收到回复:', cmd);
    this.game.log.trace(json);

    // 调用回调
    resCallback(json);
};

/**
 * 发送消息给服务器
 * @param cmd {string} - 消息串
 * @param para {json} - 消息参数
 * @param resCallback {function} - 收到回复的回调函数
 */
ServerCommunicate.prototype.sendMessage = function(cmd, para, resCallback) {
    var xhr = qc.AssetUtil.getXHR();
    var url = this.url + '/cmd';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    para["cmd"] = cmd;
    xhr.send(window.JSON.stringify(para));

    var _this = this;
    xhr.onload = function(){
        return _this.receiveResponse(xhr, cmd, resCallback);
    }

    xhr.onerror = function(){
        return _this.receiveResponse(xhr, cmd, resCallback);
    }
};


/**
 * 发送消息给服务器
 * 用户自定义消息可通过该接口发送给指定的服务器
 * @param node {qc.Node} - 节点
 * @param cmd {string} - 消息串
 * @param para {json} - 消息参数
 * @param resCallback {function} - 收到回复的回调函数
 */
ServerCommunicate.sendMessage = function(node, cmd, para, resCallback) {
    var serverCommunicate = node.getScript('qc.ServerCommunicate');
    serverCommunicate.sendMessage(cmd, para, resCallback);
};

/**
 * 登录服务器
 * @param node {qc.Node} - 节点
 * @param username {string} - 用户名
 * @param password {string} - 密码
 * @param authInfo {json} - 验证相关信息
 * @param resCallback {function} - 收到回复的回调函数
 */
ServerCommunicate.login = function(node, username, password, authInfo, resCallback) {

    authInfo = authInfo || {};
    authInfo['username'] = username;
    authInfo['password'] = hex_md5(password + 'sdf1!@3fdd8*(+3dfFdkO%$@ffdln');
    console.log(authInfo);

    ServerCommunicate.sendMessage(node, 'LOGIN', authInfo, resCallback);
};

/**
 * 登出服务器
 * @param node {qc.Node} - 节点
 * @param username {string} - 用户名
 * @param password {string} - 密码
 * @param authInfo {json} - 验证相关信息
 * @param saveData {json} - 需要保存的用户数据
 * @param resCallback {function} - 收到回复的回调函数
 */
ServerCommunicate.logout = function(node, username, password, authInfo, saveData, resCallback) {

    authInfo = authInfo || {};
    authInfo['username'] = username;
    authInfo['password'] = hex_md5(password + 'sdf1!@3fdd8*(+3dfFdkO%$@ffdln');
    authInfo['saveData'] = window.JSON.stringify(saveData);
    console.log(authInfo);

    ServerCommunicate.sendMessage(node, 'LOGOUT', authInfo, resCallback);
};
/************************* http end ********************************/

/************************* websocket begin *************************/
/**
 * 对连接 IO 进行消息关注
 * @param cmd {string} - 消息名
 * @param socket {object} - 连接io对象
 */
ServerCommunicate.prototype.registerSocketCmdIO = function(cmd, socket) {
    var self = this;
    socket.on(cmd, function() {
        self.dispatchSocketCommand(cmd, arguments);
    });
}

/**
 * 注册 socket 消息的处理函数
 * @param cmd {string} - 消息名
 * @param func {string} - 处理函数
 */
ServerCommunicate.prototype.registerSocketCmd = function(cmd, func) {
    if (this._socketCmdMap[cmd])
        this.game.log.error('socket消息({0})重复注册', cmd);

    this._socketCmdMap[cmd] = func;
}

/**
 *  对 socket 消息进行派发
 * @param cmd {string} - 消息名
 * @param args {array} - 消息参数数组
 */
ServerCommunicate.prototype.dispatchSocketCommand = function(cmd, args) {

    var func = this._socketCmdMap[cmd];
    if (!func)
    {
        this.game.log.error('找不到 socket msg({0})的处理函数', cmd);
        return;
    }

    // 调用消息处理函数
    var argList = [this];
    for (var i = 0; i < args.length; i++)
        argList.push(args[i]);
    func.apply(null, argList);
}

/**
 * 连接 socket 地址
 */
ServerCommunicate.prototype.socketConnect = function(opts) {

    var self = this;
    if (self.socket)
    {
        self.socket.close();
        self.socket = null;
    }

    self.socket = io.connect(self.url, opts);
    self.socket.on('connect', function(){
        self.game.log.trace('connect {0} ok.', self.url);
        self.isConnected = true;
        self.socket = this;

        if (!self.socket.registerDone)
        {
            // 遍历注册的消息处理函数，依次关注
            for (var cmd in self._socketCmdMap)
                self.registerSocketCmdIO(cmd, self.socket);
            self.socket.registerDone = true;
        }

        self.onConnect.dispatch(self);
    });
    self.socket.on('disconnect', function(){
        self.game.log.trace('connection {0} disconnect.', self.url);
        self.socket = null;
        self.isConnected = false;
        self.onDisconnect.dispatch(self);
    });
    self.socket.on('error', function(err){
        self.game.log.trace('connection {0} error: {1}.', self.url, err);
        self.onError.dispatch(self, err);
    });
};

/**
 * 发送 socket 消息
 * @param cmd {string} - 消息名
 * @param arguments - 后续任意个参数
 */
ServerCommunicate.prototype.sendSocketMessage = function(cmd) {

    if (!this.socket || !this.isConnected)
        return false;

    // 发送消息
    this.socket.emit.apply(this.socket, arguments);

    return true;
}

/**
 * 注册 socket 消息的处理函数
 * @param node {qc.Node} - 节点
 * @param cmd {string} - 消息名
 * @param opts {mappping} - 可选的参数
 * @param func {string} - 处理函数
 */
ServerCommunicate.socketConnect = function(node, opts) {
    var serverCommunicate = node.getScript('qc.ServerCommunicate');
    serverCommunicate.socketConnect(opts);
};

/**
 * 注册 socket 消息的处理函数
 * @param node {qc.Node} - 节点
 * @param cmd {string} - 消息名
 * @param func {string} - 处理函数
 */
ServerCommunicate.registerSocketCmd = function(node, cmd, func) {

    var serverCommunicate = node.getScript('qc.ServerCommunicate');
    serverCommunicate.registerSocketCmd(cmd, func);

    if (serverCommunicate.isConnected)
        // 已连接，直接关注 socket io
        serverCommunicate.registerSocketCmdIO(cmd, serverCommunicate.socket);
};

/**
 * 发送 socket 消息
 * @param node {qc.Node} - 节点
 * @param cmd {string} - 消息名
 * @param arguments - 后续任意个参数
 */
ServerCommunicate.sendSocketMessage = function(node, cmd) {
    var serverCommunicate = node.getScript('qc.ServerCommunicate');

    var args = [];
    for (var i = 1; i < arguments.length; i++)
        args.push(arguments[i]);

    return serverCommunicate.sendSocketMessage.apply(serverCommunicate, args);
};
/************************* websocket end ***************************/

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.io=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

module.exports = _dereq_('./lib/');

},{"./lib/":2}],2:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var parser = _dereq_('socket.io-parser');
var Manager = _dereq_('./manager');
var debug = _dereq_('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri == 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var io;

  if (opts.forceNew || opts['force new connection'] || false === opts.multiplex) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }

  return io.socket(parsed.path);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = _dereq_('./manager');
exports.Socket = _dereq_('./socket');

},{"./manager":3,"./socket":5,"./url":6,"debug":10,"socket.io-parser":46}],3:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var eio = _dereq_('engine.io-client');
var Socket = _dereq_('./socket');
var Emitter = _dereq_('component-emitter');
var parser = _dereq_('socket.io-parser');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var object = _dereq_('object-component');
var debug = _dereq_('debug')('socket.io-client:manager');
var indexOf = _dereq_('indexof');
var Backoff = _dereq_('backo2');

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts){
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' == typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connected = [];
  this.encoding = false;
  this.packetBuffer = [];
  this.encoder = new parser.Encoder();
  this.decoder = new parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function() {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function(){
  for (var nsp in this.nsps) {
    this.nsps[nsp].id = this.engine.id;
  }
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function(v){
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function(v){
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function(v){
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function(v){
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function(v){
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function(v){
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function() {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};


/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function(fn){
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function() {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function(data){
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function(){
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function(){
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function(data){
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function(packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function(err){
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function(nsp){
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connect', function(){
      socket.id = self.engine.id;
      if (!~indexOf(self.connected, socket)) {
        self.connected.push(socket);
      }
    });
  }
  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function(socket){
  var index = indexOf(this.connected, socket);
  if (~index) this.connected.splice(index, 1);
  if (this.connected.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function(packet){
  debug('writing packet %j', packet);
  var self = this;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function(encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i]);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function(){
  var sub;
  while (sub = this.subs.shift()) sub.destroy();

  this.packetBuffer = [];
  this.encoding = false;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function(){
  this.skipReconnect = true;
  this.backoff.reset();
  this.readyState = 'closed';
  this.engine && this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function(reason){
  debug('close');
  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);
  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function(){
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function(){
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function(err){
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function(){
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"./on":4,"./socket":5,"./url":6,"backo2":7,"component-bind":8,"component-emitter":9,"debug":10,"engine.io-client":11,"indexof":42,"object-component":43,"socket.io-parser":46}],4:[function(_dereq_,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function(){
      obj.removeListener(ev, fn);
    }
  };
}

},{}],5:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var parser = _dereq_('socket.io-parser');
var Emitter = _dereq_('component-emitter');
var toArray = _dereq_('to-array');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:socket');
var hasBin = _dereq_('has-binary');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp){
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  if (this.io.autoConnect) this.open();
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function() {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function(){
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' == this.io.readyState) this.onopen();
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function(){
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function(ev){
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var parserType = parser.EVENT; // default
  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
  var packet = { type: parserType, data: args };

  // event ack callback
  if ('function' == typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function(packet){
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function(){
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' != this.nsp) {
    this.packet({ type: parser.CONNECT });
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function(reason){
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function(packet){
  if (packet.nsp != this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function(packet){
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function(id){
  var self = this;
  var sent = false;
  return function(){
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
    self.packet({
      type: type,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function(packet){
  debug('calling ack %s with %j', packet.id, packet.data);
  var fn = this.acks[packet.id];
  fn.apply(this, packet.data);
  delete this.acks[packet.id];
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function(){
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function(){
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function(){
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function(){
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function(){
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

},{"./on":4,"component-bind":8,"component-emitter":9,"debug":10,"has-binary":38,"socket.io-parser":46,"to-array":50}],6:[function(_dereq_,module,exports){
(function (global){

/**
 * Module dependencies.
 */

var parseuri = _dereq_('parseuri');
var debug = _dereq_('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc){
  var obj = uri;

  // default to window.location
  var loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' == typeof uri) {
    if ('/' == uri.charAt(0)) {
      if ('/' == uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.hostname + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' != typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    }
    else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  // define unique id
  obj.id = obj.protocol + '://' + obj.host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + obj.host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

  return obj;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"debug":10,"parseuri":44}],7:[function(_dereq_,module,exports){

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],8:[function(_dereq_,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],9:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],10:[function(_dereq_,module,exports){

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  if (!debug.enabled(name)) return function(){};

  return function(fmt){
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (debug[name] || curr);
    debug[name] = curr;

    fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
}

/**
 * The currently active debug mode names.
 */

debug.names = [];
debug.skips = [];

/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */

debug.enable = function(name) {
  try {
    localStorage.debug = name;
  } catch(e){}

  var split = (name || '').split(/[\s,]+/)
    , len = split.length;

  for (var i = 0; i < len; i++) {
    name = split[i].replace('*', '.*?');
    if (name[0] === '-') {
      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
    }
    else {
      debug.names.push(new RegExp('^' + name + '$'));
    }
  }
};

/**
 * Disable debug output.
 *
 * @api public
 */

debug.disable = function(){
  debug.enable('');
};

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
};

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

debug.enabled = function(name) {
  for (var i = 0, len = debug.skips.length; i < len; i++) {
    if (debug.skips[i].test(name)) {
      return false;
    }
  }
  for (var i = 0, len = debug.names.length; i < len; i++) {
    if (debug.names[i].test(name)) {
      return true;
    }
  }
  return false;
};

/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

// persist

try {
  if (window.localStorage) debug.enable(localStorage.debug);
} catch(e){}

},{}],11:[function(_dereq_,module,exports){

module.exports =  _dereq_('./lib/');

},{"./lib/":12}],12:[function(_dereq_,module,exports){

module.exports = _dereq_('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = _dereq_('engine.io-parser');

},{"./socket":13,"engine.io-parser":25}],13:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var transports = _dereq_('./transports');
var Emitter = _dereq_('component-emitter');
var debug = _dereq_('debug')('engine.io-client:socket');
var index = _dereq_('indexof');
var parser = _dereq_('engine.io-parser');
var parseuri = _dereq_('parseuri');
var parsejson = _dereq_('parsejson');
var parseqs = _dereq_('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Noop function.
 *
 * @api private
 */

function noop(){}

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts){
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' == typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.host = uri.host;
    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  }

  this.secure = null != opts.secure ? opts.secure :
    (global.location && 'https:' == location.protocol);

  if (opts.host) {
    var pieces = opts.host.split(':');
    opts.hostname = pieces.shift();
    if (pieces.length) {
      opts.port = pieces.pop();
    } else if (!opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? '443' : '80';
    }
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port ?
       location.port :
       (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.readyState = '';
  this.writeBuffer = [];
  this.callbackBuffer = [];
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized || null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = _dereq_('./transport');
Socket.transports = _dereq_('./transports');
Socket.parser = _dereq_('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    agent: this.agent,
    hostname: this.hostname,
    port: this.port,
    secure: this.secure,
    path: this.path,
    query: query,
    forceJSONP: this.forceJSONP,
    jsonp: this.jsonp,
    forceBase64: this.forceBase64,
    enablesXDR: this.enablesXDR,
    timestampRequests: this.timestampRequests,
    timestampParam: this.timestampParam,
    policyPort: this.policyPort,
    socket: this,
    pfx: this.pfx,
    key: this.key,
    passphrase: this.passphrase,
    cert: this.cert,
    ca: this.ca,
    ciphers: this.ciphers,
    rejectUnauthorized: this.rejectUnauthorized
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
    transport = 'websocket';
  } else if (0 == this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function() {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  var transport;
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function(transport){
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function(){
    self.onDrain();
  })
  .on('packet', function(packet){
    self.onPacket(packet);
  })
  .on('error', function(e){
    self.onError(e);
  })
  .on('close', function(){
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 })
    , failed = false
    , self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen(){
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' == msg.type && 'probe' == msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' == self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  //Handle any error that happens while probing
  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose(){
    onerror("transport closed");
  }

  //When the socket is closed while we're probing
  function onclose(){
    onerror("socket closed");
  }

  //When the socket is upgraded while we're probing
  function onupgrade(to){
    if (transport && to.name != transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  //Remove all listeners on the transport and on self
  function cleanup(){
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();

};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(parsejson(packet.data));
        break;

      case 'pong':
        this.setPing();
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.emit('error', err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if  ('closed' == this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' == self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api public
*/

Socket.prototype.ping = function () {
  this.sendPacket('ping');
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function() {
  for (var i = 0; i < this.prevBufferLen; i++) {
    if (this.callbackBuffer[i]) {
      this.callbackBuffer[i]();
    }
  }

  this.writeBuffer.splice(0, this.prevBufferLen);
  this.callbackBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (this.writeBuffer.length == 0) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' != this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, fn) {
  this.sendPacket('message', msg, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, fn) {
  if ('closing' == this.readyState || 'closed' == this.readyState) {
    return;
  }

  var packet = { type: type, data: data };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  this.callbackBuffer.push(fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.readyState = 'closing';

    var self = this;

    function close() {
      self.onClose('forced close');
      debug('socket closing - telling transport to close');
      self.transport.close();
    }

    function cleanupAndClose() {
      self.removeListener('upgrade', cleanupAndClose);
      self.removeListener('upgradeError', cleanupAndClose);
      close();
    }

    function waitForUpgrade() {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      self.once('upgrade', cleanupAndClose);
      self.once('upgradeError', cleanupAndClose);
    }

    if (this.writeBuffer.length) {
      this.once('drain', function() {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // clean buffers in next tick, so developers can still
    // grab the buffers on `close` event
    setTimeout(function() {
      self.writeBuffer = [];
      self.callbackBuffer = [];
      self.prevBufferLen = 0;
    }, 0);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i<j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./transport":14,"./transports":15,"component-emitter":9,"debug":22,"engine.io-parser":25,"indexof":42,"parsejson":34,"parseqs":35,"parseuri":36}],14:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var parser = _dereq_('engine.io-parser');
var Emitter = _dereq_('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * A counter used to prevent collisions in the timestamps used
 * for cache busting.
 */

Transport.timestamps = 0;

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' == this.readyState || '' == this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function(packets){
  if ('open' == this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function(data){
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"component-emitter":9,"engine.io-parser":25}],15:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies
 */

var XMLHttpRequest = _dereq_('xmlhttprequest');
var XHR = _dereq_('./polling-xhr');
var JSONP = _dereq_('./polling-jsonp');
var websocket = _dereq_('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts){
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname != location.hostname || port != opts.port;
    xs = opts.secure != isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling-jsonp":16,"./polling-xhr":17,"./websocket":19,"xmlhttprequest":20}],16:[function(_dereq_,module,exports){
(function (global){

/**
 * Module requirements.
 */

var Polling = _dereq_('./polling');
var inherit = _dereq_('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Callbacks count.
 */

var index = 0;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function(e){
    self.onError('jsonp poll error',e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  insertAt.parentNode.insertBefore(script, insertAt);
  this.script = script;

  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
  
  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch(e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function(){
      if (self.iframe.readyState == 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":18,"component-inherit":21}],17:[function(_dereq_,module,exports){
(function (global){
/**
 * Module requirements.
 */

var XMLHttpRequest = _dereq_('xmlhttprequest');
var Polling = _dereq_('./polling');
var Emitter = _dereq_('component-emitter');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty(){}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts){
  Polling.call(this, opts);

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname != global.location.hostname ||
      port != opts.port;
    this.xs = opts.secure != isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function(opts){
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function(data, fn){
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function(err){
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function(){
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function(data){
    self.onData(data);
  });
  req.on('error', function(err){
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts){
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined != opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function(){
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    if (this.supportsBinary) {
      // This has to be done after open because Firefox is stupid
      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
      xhr.responseType = 'arraybuffer';
    }

    if ('POST' == this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.hasXDR()) {
      xhr.onload = function(){
        self.onLoad();
      };
      xhr.onerror = function(){
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function(){
        if (4 != xhr.readyState) return;
        if (200 == xhr.status || 1223 == xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function(){
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function() {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function(){
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function(data){
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function(err){
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function(fromError){
  if ('undefined' == typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch(e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function(){
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response;
    } else {
      if (!this.supportsBinary) {
        data = this.xhr.responseText;
      } else {
        data = 'ok';
      }
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function(){
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function(){
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

if (global.document) {
  Request.requestsCount = 0;
  Request.requests = {};
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":18,"component-emitter":9,"component-inherit":21,"debug":22,"xmlhttprequest":20}],18:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parseqs = _dereq_('parseqs');
var parser = _dereq_('engine.io-parser');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function() {
  var XMLHttpRequest = _dereq_('xmlhttprequest');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function(){
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function(onPause){
  var pending = 0;
  var self = this;

  this.readyState = 'pausing';

  function pause(){
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function(){
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function(){
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function(){
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function(data){
  var self = this;
  debug('polling got data %s', data);
  var callback = function(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' == self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' == packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' != this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' == this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function(){
  var self = this;

  function close(){
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' == this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  var callbackfn = function() {
    self.writable = true;
    self.emit('drain');
  };

  var self = this;
  parser.encodePayload(packets, this.supportsBinary, function(data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = +new Date + '-' + Transport.timestamps++;
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' == schema && this.port != 443) ||
     ('http' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  return schema + '://' + this.hostname + port + this.path + query;
};

},{"../transport":14,"component-inherit":21,"debug":22,"engine.io-parser":25,"parseqs":35,"xmlhttprequest":20}],19:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parser = _dereq_('engine.io-parser');
var parseqs = _dereq_('parseqs');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:websocket');

/**
 * `ws` exposes a WebSocket-compatible interface in
 * Node, or the `WebSocket` or `MozWebSocket` globals
 * in the browser.
 */

var WebSocket = _dereq_('ws');

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function(){
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var self = this;
  var uri = this.uri();
  var protocols = void(0);
  var opts = { agent: this.agent };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  this.ws = new WebSocket(uri, protocols, opts);

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  this.ws.binaryType = 'arraybuffer';
  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function(){
  var self = this;

  this.ws.onopen = function(){
    self.onOpen();
  };
  this.ws.onclose = function(){
    self.onClose();
  };
  this.ws.onmessage = function(ev){
    self.onData(ev.data);
  };
  this.ws.onerror = function(e){
    self.onError('websocket error', e);
  };
};

/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */

if ('undefined' != typeof navigator
  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
  WS.prototype.onData = function(data){
    var self = this;
    setTimeout(function(){
      Transport.prototype.onData.call(self, data);
    }, 0);
  };
}

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  for (var i = 0, l = packets.length; i < l; i++) {
    parser.encodePacket(packets[i], this.supportsBinary, function(data) {
      //Sometimes the websocket has already been closed but the browser didn't
      //have a chance of informing us about it yet, in that case send will
      //throw an error
      try {
        self.ws.send(data);
      } catch (e){
        debug('websocket closed before onclose event');
      }
    });
  }

  function ondrain() {
    self.writable = true;
    self.emit('drain');
  }
  // fake drain
  // defer to next tick to allow Socket to clear writeBuffer
  setTimeout(ondrain, 0);
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function(){
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function(){
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' == schema && this.port != 443)
    || ('ws' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = +new Date;
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  return schema + '://' + this.hostname + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function(){
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

},{"../transport":14,"component-inherit":21,"debug":22,"engine.io-parser":25,"parseqs":35,"ws":37}],20:[function(_dereq_,module,exports){
// browser shim for xmlhttprequest module
var hasCORS = _dereq_('has-cors');

module.exports = function(opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { }
  }
}

},{"has-cors":40}],21:[function(_dereq_,module,exports){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],22:[function(_dereq_,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = _dereq_('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // This hackery is required for IE8,
  // where the `console.log` function doesn't have 'apply'
  return 'object' == typeof console
    && 'function' == typeof console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      localStorage.removeItem('debug');
    } else {
      localStorage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = localStorage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

},{"./debug":23}],23:[function(_dereq_,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = _dereq_('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":24}],24:[function(_dereq_,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 's':
      return n * s;
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],25:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var keys = _dereq_('./keys');
var hasBinary = _dereq_('has-binary');
var sliceBuffer = _dereq_('arraybuffer.slice');
var base64encoder = _dereq_('base64-arraybuffer');
var after = _dereq_('after');
var utf8 = _dereq_('utf8');

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = navigator.userAgent.match(/Android/i);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = _dereq_('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if ('function' == typeof supportsBinary) {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if ('function' == typeof utf8encode) {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  // String data
  if (typeof data == 'string' || data === undefined) {
    if (data.charAt(0) == 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      try {
        data = utf8.decode(data);
      } catch (e) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!global.ArrayBuffer) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary == 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data != 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data == '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = ''
    , n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (':' != chr) {
      length += chr;
    } else {
      if ('' == length || (length != (n = Number(length)))) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      msg = data.substr(i + 1, n);

      if (length != msg.length) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      if (msg.length) {
        packet = exports.decodePacket(msg, binaryType, true);

        if (err.type == packet.type && err.data == packet.data) {
          // parser error in individual packet - ignoring payload
          return callback(err, 0, 1);
        }

        var ret = callback(packet, i + n, l);
        if (false === ret) return;
      }

      // advance cursor
      i += n;
      length = '';
    }
  }

  if (length != '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  var numberTooLong = false;
  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] == 255) break;

      if (msgLength.length > 310) {
        numberTooLong = true;
        break;
      }

      msgLength += tailArray[i];
    }

    if(numberTooLong) return callback(err, 0, 1);

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./keys":26,"after":27,"arraybuffer.slice":28,"base64-arraybuffer":29,"blob":30,"has-binary":31,"utf8":33}],26:[function(_dereq_,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],27:[function(_dereq_,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],28:[function(_dereq_,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],29:[function(_dereq_,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(chars){
  "use strict";

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i+1]);
      encoded3 = chars.indexOf(base64[i+2]);
      encoded4 = chars.indexOf(base64[i+3]);

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

},{}],30:[function(_dereq_,module,exports){
(function (global){
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var b = new Blob(['hi']);
    return b.size == 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }
  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

module.exports = (function() {
  if (blobSupported) {
    return global.Blob;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],31:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      if (obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (obj.hasOwnProperty(key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"isarray":32}],32:[function(_dereq_,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],33:[function(_dereq_,module,exports){
(function (global){
/*! http://mths.be/utf8js v2.0.0 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from http://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from http://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);

		// console.log(JSON.stringify(codePoints.map(function(x) {
		// 	return 'U+' + x.toString(16).toUpperCase();
		// })));

		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			var byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.0.0',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return utf8;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],34:[function(_dereq_,module,exports){
(function (global){
/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */

var rvalidchars = /^[\],:{}\s]*$/;
var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
var rtrimLeft = /^\s+/;
var rtrimRight = /\s+$/;

module.exports = function parsejson(data) {
  if ('string' != typeof data || !data) {
    return null;
  }

  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

  // Attempt to parse using the native JSON parser first
  if (global.JSON && JSON.parse) {
    return JSON.parse(data);
  }

  if (rvalidchars.test(data.replace(rvalidescape, '@')
      .replace(rvalidtokens, ']')
      .replace(rvalidbraces, ''))) {
    return (new Function('return ' + data))();
  }
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],35:[function(_dereq_,module,exports){
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],36:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],37:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var global = (function() { return this; })();

/**
 * WebSocket constructor.
 */

var WebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Module exports.
 */

module.exports = WebSocket ? ws : null;

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object) opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;

},{}],38:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      if (obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"isarray":39}],39:[function(_dereq_,module,exports){
module.exports=_dereq_(32)
},{}],40:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var global = _dereq_('global');

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = 'XMLHttpRequest' in global &&
    'withCredentials' in new global.XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{"global":41}],41:[function(_dereq_,module,exports){

/**
 * Returns `this`. Execute this without a "context" (i.e. without it being
 * attached to an object of the left-hand side), and `this` points to the
 * "global" scope of the current JS execution.
 */

module.exports = (function () { return this; })();

},{}],42:[function(_dereq_,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],43:[function(_dereq_,module,exports){

/**
 * HOP ref.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Return own keys in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.keys = Object.keys || function(obj){
  var keys = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

/**
 * Return own values in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.values = function(obj){
  var vals = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      vals.push(obj[key]);
    }
  }
  return vals;
};

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */

exports.merge = function(a, b){
  for (var key in b) {
    if (has.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/**
 * Return length of `obj`.
 *
 * @param {Object} obj
 * @return {Number}
 * @api public
 */

exports.length = function(obj){
  return exports.keys(obj).length;
};

/**
 * Check if `obj` is empty.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api public
 */

exports.isEmpty = function(obj){
  return 0 == exports.length(obj);
};
},{}],44:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host'
  , 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
  var m = re.exec(str || '')
    , uri = {}
    , i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  return uri;
};

},{}],45:[function(_dereq_,module,exports){
(function (global){
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = _dereq_('isarray');
var isBuf = _dereq_('./is-buffer');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet){
  var buffers = [];
  var packetData = packet.data;

  function _deconstructPacket(data) {
    if (!data) return data;

    if (isBuf(data)) {
      var placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i]);
      }
      return newData;
    } else if ('object' == typeof data && !(data instanceof Date)) {
      var newData = {};
      for (var key in data) {
        newData[key] = _deconstructPacket(data[key]);
      }
      return newData;
    }
    return data;
  }

  var pack = packet;
  pack.data = _deconstructPacket(packetData);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  var curPlaceHolder = 0;

  function _reconstructPacket(data) {
    if (data && data._placeholder) {
      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
      return buf;
    } else if (isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i]);
      }
      return data;
    } else if (data && 'object' == typeof data) {
      for (var key in data) {
        data[key] = _reconstructPacket(data[key]);
      }
      return data;
    }
    return data;
  }

  packet.data = _reconstructPacket(packet.data);
  packet.attachments = undefined; // no longer useful
  return packet;
};

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((global.Blob && obj instanceof Blob) ||
        (global.File && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./is-buffer":47,"isarray":48}],46:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var debug = _dereq_('debug')('socket.io-parser');
var json = _dereq_('json3');
var isArray = _dereq_('isarray');
var Emitter = _dereq_('component-emitter');
var binary = _dereq_('./binary');
var isBuf = _dereq_('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'BINARY_EVENT',
  'ACK',
  'BINARY_ACK',
  'ERROR'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {
  var str = '';
  var nsp = false;

  // first is type
  str += obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    str += obj.attachments;
    str += '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' != obj.nsp) {
    nsp = true;
    str += obj.nsp;
  }

  // immediately followed by the id
  if (null != obj.id) {
    if (nsp) {
      str += ',';
      nsp = false;
    }
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    if (nsp) str += ',';
    str += json.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if ('string' == typeof obj) {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var p = {};
  var i = 0;

  // look up type
  p.type = Number(str.charAt(0));
  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
    var buf = '';
    while (str.charAt(++i) != '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) != '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' == str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' == c) break;
      p.nsp += c;
      if (i == str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i == str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    try {
      p.data = json.parse(str.substr(i));
    } catch(e){
      return error();
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(data){
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":45,"./is-buffer":47,"component-emitter":9,"debug":10,"isarray":48,"json3":49}],47:[function(_dereq_,module,exports){
(function (global){

module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],48:[function(_dereq_,module,exports){
module.exports=_dereq_(32)
},{}],49:[function(_dereq_,module,exports){
/*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
;(function (window) {
  // Convenience aliases.
  var getClass = {}.toString, isProperty, forEach, undef;

  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // Detect native implementations.
  var nativeJSON = typeof JSON == "object" && JSON;

  // Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
  // available.
  var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;

  if (JSON3 && nativeJSON) {
    // Explicitly delegate to the native `stringify` and `parse`
    // implementations in CommonJS environments.
    JSON3.stringify = nativeJSON.stringify;
    JSON3.parse = nativeJSON.parse;
  } else {
    // Export for web browsers, JavaScript engines, and asynchronous module
    // loaders, using the global `JSON` object if available.
    JSON3 = window.JSON = nativeJSON || {};
  }

  // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
  var isExtended = new Date(-3509827334573292);
  try {
    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
    // results for certain dates in Opera >= 10.53.
    isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
      // Safari < 2.0.2 stores the internal millisecond time value correctly,
      // but clips the values returned by the date methods to the range of
      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
  } catch (exception) {}

  // Internal: Determines whether the native `JSON.stringify` and `parse`
  // implementations are spec-compliant. Based on work by Ken Snyder.
  function has(name) {
    if (has[name] !== undef) {
      // Return cached feature test result.
      return has[name];
    }

    var isSupported;
    if (name == "bug-string-char-index") {
      // IE <= 7 doesn't support accessing string characters using square
      // bracket notation. IE 8 only supports this for primitives.
      isSupported = "a"[0] != "a";
    } else if (name == "json") {
      // Indicates whether both `JSON.stringify` and `JSON.parse` are
      // supported.
      isSupported = has("json-stringify") && has("json-parse");
    } else {
      var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
      // Test `JSON.stringify`.
      if (name == "json-stringify") {
        var stringify = JSON3.stringify, stringifySupported = typeof stringify == "function" && isExtended;
        if (stringifySupported) {
          // A test function object with a custom `toJSON` method.
          (value = function () {
            return 1;
          }).toJSON = value;
          try {
            stringifySupported =
              // Firefox 3.1b1 and b2 serialize string, number, and boolean
              // primitives as object literals.
              stringify(0) === "0" &&
              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
              // literals.
              stringify(new Number()) === "0" &&
              stringify(new String()) == '""' &&
              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
              // does not define a canonical JSON representation (this applies to
              // objects with `toJSON` properties as well, *unless* they are nested
              // within an object or array).
              stringify(getClass) === undef &&
              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
              // FF 3.1b3 pass this test.
              stringify(undef) === undef &&
              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
              // respectively, if the value is omitted entirely.
              stringify() === undef &&
              // FF 3.1b1, 2 throw an error if the given value is not a number,
              // string, array, object, Boolean, or `null` literal. This applies to
              // objects with custom `toJSON` methods as well, unless they are nested
              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
              // methods entirely.
              stringify(value) === "1" &&
              stringify([value]) == "[1]" &&
              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
              // `"[null]"`.
              stringify([undef]) == "[null]" &&
              // YUI 3.0.0b1 fails to serialize `null` literals.
              stringify(null) == "null" &&
              // FF 3.1b1, 2 halts serialization if an array contains a function:
              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
              // elides non-JSON values from objects and arrays, unless they
              // define custom `toJSON` methods.
              stringify([undef, getClass, null]) == "[null,null,null]" &&
              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
              // where character escape codes are expected (e.g., `\b` => `\u0008`).
              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
              stringify(null, value) === "1" &&
              stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          } catch (exception) {
            stringifySupported = false;
          }
        }
        isSupported = stringifySupported;
      }
      // Test `JSON.parse`.
      if (name == "json-parse") {
        var parse = JSON3.parse;
        if (typeof parse == "function") {
          try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if (parse("0") === 0 && !parse(false)) {
              // Simple parsing test.
              value = parse(serialized);
              var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
              if (parseSupported) {
                try {
                  // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                  parseSupported = !parse('"\t"');
                } catch (exception) {}
                if (parseSupported) {
                  try {
                    // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                    // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                    // certain octal literals.
                    parseSupported = parse("01") !== 1;
                  } catch (exception) {}
                }
                if (parseSupported) {
                  try {
                    // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                    // points. These environments, along with FF 3.1b1 and 2,
                    // also allow trailing commas in JSON objects and arrays.
                    parseSupported = parse("1.") !== 1;
                  } catch (exception) {}
                }
              }
            }
          } catch (exception) {
            parseSupported = false;
          }
        }
        isSupported = parseSupported;
      }
    }
    return has[name] = !!isSupported;
  }

  if (!has("json")) {
    // Common `[[Class]]` name aliases.
    var functionClass = "[object Function]";
    var dateClass = "[object Date]";
    var numberClass = "[object Number]";
    var stringClass = "[object String]";
    var arrayClass = "[object Array]";
    var booleanClass = "[object Boolean]";

    // Detect incomplete support for accessing string characters by index.
    var charIndexBuggy = has("bug-string-char-index");

    // Define additional utility methods if the `Date` methods are buggy.
    if (!isExtended) {
      var floor = Math.floor;
      // A mapping between the months of the year and the number of days between
      // January 1st and the first of the respective month.
      var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      // Internal: Calculates the number of days between the Unix epoch and the
      // first day of the given month.
      var getDay = function (year, month) {
        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
      };
    }

    // Internal: Determines if a property is a direct property of the given
    // object. Delegates to the native `Object#hasOwnProperty` method.
    if (!(isProperty = {}.hasOwnProperty)) {
      isProperty = function (property) {
        var members = {}, constructor;
        if ((members.__proto__ = null, members.__proto__ = {
          // The *proto* property cannot be set multiple times in recent
          // versions of Firefox and SeaMonkey.
          "toString": 1
        }, members).toString != getClass) {
          // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
          // supports the mutable *proto* property.
          isProperty = function (property) {
            // Capture and break the object's prototype chain (see section 8.6.2
            // of the ES 5.1 spec). The parenthesized expression prevents an
            // unsafe transformation by the Closure Compiler.
            var original = this.__proto__, result = property in (this.__proto__ = null, this);
            // Restore the original prototype chain.
            this.__proto__ = original;
            return result;
          };
        } else {
          // Capture a reference to the top-level `Object` constructor.
          constructor = members.constructor;
          // Use the `constructor` property to simulate `Object#hasOwnProperty` in
          // other environments.
          isProperty = function (property) {
            var parent = (this.constructor || constructor).prototype;
            return property in this && !(property in parent && this[property] === parent[property]);
          };
        }
        members = null;
        return isProperty.call(this, property);
      };
    }

    // Internal: A set of primitive types used by `isHostType`.
    var PrimitiveTypes = {
      'boolean': 1,
      'number': 1,
      'string': 1,
      'undefined': 1
    };

    // Internal: Determines if the given object `property` value is a
    // non-primitive.
    var isHostType = function (object, property) {
      var type = typeof object[property];
      return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
    };

    // Internal: Normalizes the `for...in` iteration algorithm across
    // environments. Each enumerated key is yielded to a `callback` function.
    forEach = function (object, callback) {
      var size = 0, Properties, members, property;

      // Tests for bugs in the current environment's `for...in` algorithm. The
      // `valueOf` property inherits the non-enumerable flag from
      // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
      (Properties = function () {
        this.valueOf = 0;
      }).prototype.valueOf = 0;

      // Iterate over a new instance of the `Properties` class.
      members = new Properties();
      for (property in members) {
        // Ignore all properties inherited from `Object.prototype`.
        if (isProperty.call(members, property)) {
          size++;
        }
      }
      Properties = members = null;

      // Normalize the iteration algorithm.
      if (!size) {
        // A list of non-enumerable properties inherited from `Object.prototype`.
        members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
        // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
        // properties.
        forEach = function (object, callback) {
          var isFunction = getClass.call(object) == functionClass, property, length;
          var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
          for (property in object) {
            // Gecko <= 1.0 enumerates the `prototype` property of functions under
            // certain conditions; IE does not.
            if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
              callback(property);
            }
          }
          // Manually invoke the callback for each non-enumerable property.
          for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
        };
      } else if (size == 2) {
        // Safari <= 2.0.4 enumerates shadowed properties twice.
        forEach = function (object, callback) {
          // Create a set of iterated properties.
          var members = {}, isFunction = getClass.call(object) == functionClass, property;
          for (property in object) {
            // Store each property name to prevent double enumeration. The
            // `prototype` property of functions is not enumerated due to cross-
            // environment inconsistencies.
            if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
              callback(property);
            }
          }
        };
      } else {
        // No bugs detected; use the standard `for...in` algorithm.
        forEach = function (object, callback) {
          var isFunction = getClass.call(object) == functionClass, property, isConstructor;
          for (property in object) {
            if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
              callback(property);
            }
          }
          // Manually invoke the callback for the `constructor` property due to
          // cross-environment inconsistencies.
          if (isConstructor || isProperty.call(object, (property = "constructor"))) {
            callback(property);
          }
        };
      }
      return forEach(object, callback);
    };

    // Public: Serializes a JavaScript `value` as a JSON string. The optional
    // `filter` argument may specify either a function that alters how object and
    // array members are serialized, or an array of strings and numbers that
    // indicates which properties should be serialized. The optional `width`
    // argument may be either a string or number that specifies the indentation
    // level of the output.
    if (!has("json-stringify")) {
      // Internal: A map of control characters and their escaped equivalents.
      var Escapes = {
        92: "\\\\",
        34: '\\"',
        8: "\\b",
        12: "\\f",
        10: "\\n",
        13: "\\r",
        9: "\\t"
      };

      // Internal: Converts `value` into a zero-padded string such that its
      // length is at least equal to `width`. The `width` must be <= 6.
      var leadingZeroes = "000000";
      var toPaddedString = function (width, value) {
        // The `|| 0` expression is necessary to work around a bug in
        // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
        return (leadingZeroes + (value || 0)).slice(-width);
      };

      // Internal: Double-quotes a string `value`, replacing all ASCII control
      // characters (characters with code unit values between 0 and 31) with
      // their escaped equivalents. This is an implementation of the
      // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
      var unicodePrefix = "\\u00";
      var quote = function (value) {
        var result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy, symbols;
        if (isLarge) {
          symbols = value.split("");
        }
        for (; index < length; index++) {
          var charCode = value.charCodeAt(index);
          // If the character is a control character, append its Unicode or
          // shorthand escape sequence; otherwise, append the character as-is.
          switch (charCode) {
            case 8: case 9: case 10: case 12: case 13: case 34: case 92:
              result += Escapes[charCode];
              break;
            default:
              if (charCode < 32) {
                result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                break;
              }
              result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
          }
        }
        return result + '"';
      };

      // Internal: Recursively serializes an object. Implements the
      // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
      var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
        var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
        try {
          // Necessary for host object support.
          value = object[property];
        } catch (exception) {}
        if (typeof value == "object" && value) {
          className = getClass.call(value);
          if (className == dateClass && !isProperty.call(value, "toJSON")) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              if (getDay) {
                // Manually compute the year, month, date, hours, minutes,
                // seconds, and milliseconds if the `getUTC*` methods are
                // buggy. Adapted from @Yaffle's `date-shim` project.
                date = floor(value / 864e5);
                for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                date = 1 + date - getDay(year, month);
                // The `time` value specifies the time within the day (see ES
                // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                // to compute `A modulo B`, as the `%` operator does not
                // correspond to the `modulo` operation for negative numbers.
                time = (value % 864e5 + 864e5) % 864e5;
                // The hours, minutes, seconds, and milliseconds are obtained by
                // decomposing the time within the day. See section 15.9.1.10.
                hours = floor(time / 36e5) % 24;
                minutes = floor(time / 6e4) % 60;
                seconds = floor(time / 1e3) % 60;
                milliseconds = time % 1e3;
              } else {
                year = value.getUTCFullYear();
                month = value.getUTCMonth();
                date = value.getUTCDate();
                hours = value.getUTCHours();
                minutes = value.getUTCMinutes();
                seconds = value.getUTCSeconds();
                milliseconds = value.getUTCMilliseconds();
              }
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                // Months, dates, hours, minutes, and seconds should have two
                // digits; milliseconds should have three.
                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                // Milliseconds are optional in ES 5.0, but required in 5.1.
                "." + toPaddedString(3, milliseconds) + "Z";
            } else {
              value = null;
            }
          } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
            // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
            // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
            // ignores all `toJSON` methods on these objects unless they are
            // defined directly on an instance.
            value = value.toJSON(property);
          }
        }
        if (callback) {
          // If a replacement function was provided, call it to obtain the value
          // for serialization.
          value = callback.call(object, property, value);
        }
        if (value === null) {
          return "null";
        }
        className = getClass.call(value);
        if (className == booleanClass) {
          // Booleans are represented literally.
          return "" + value;
        } else if (className == numberClass) {
          // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
          // `"null"`.
          return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
        } else if (className == stringClass) {
          // Strings are double-quoted and escaped.
          return quote("" + value);
        }
        // Recursively serialize objects and arrays.
        if (typeof value == "object") {
          // Check for cyclic structures. This is a linear search; performance
          // is inversely proportional to the number of unique nested objects.
          for (length = stack.length; length--;) {
            if (stack[length] === value) {
              // Cyclic structures cannot be serialized by `JSON.stringify`.
              throw TypeError();
            }
          }
          // Add the object to the stack of traversed objects.
          stack.push(value);
          results = [];
          // Save the current indentation level and indent one additional level.
          prefix = indentation;
          indentation += whitespace;
          if (className == arrayClass) {
            // Recursively serialize array elements.
            for (index = 0, length = value.length; index < length; index++) {
              element = serialize(index, value, callback, properties, whitespace, indentation, stack);
              results.push(element === undef ? "null" : element);
            }
            result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
          } else {
            // Recursively serialize object members. Members are selected from
            // either a user-specified list of property names, or the object
            // itself.
            forEach(properties || value, function (property) {
              var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
              if (element !== undef) {
                // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                // is not the empty string, let `member` {quote(property) + ":"}
                // be the concatenation of `member` and the `space` character."
                // The "`space` character" refers to the literal space
                // character, not the `space` {width} argument provided to
                // `JSON.stringify`.
                results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
              }
            });
            result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
          }
          // Remove the object from the traversed object stack.
          stack.pop();
          return result;
        }
      };

      // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
      JSON3.stringify = function (source, filter, width) {
        var whitespace, callback, properties, className;
        if (typeof filter == "function" || typeof filter == "object" && filter) {
          if ((className = getClass.call(filter)) == functionClass) {
            callback = filter;
          } else if (className == arrayClass) {
            // Convert the property names array into a makeshift set.
            properties = {};
            for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
          }
        }
        if (width) {
          if ((className = getClass.call(width)) == numberClass) {
            // Convert the `width` to an integer and create a string containing
            // `width` number of space characters.
            if ((width -= width % 1) > 0) {
              for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
            }
          } else if (className == stringClass) {
            whitespace = width.length <= 10 ? width : width.slice(0, 10);
          }
        }
        // Opera <= 7.54u2 discards the values associated with empty string keys
        // (`""`) only if they are used directly within an object member list
        // (e.g., `!("" in { "": 1})`).
        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
      };
    }

    // Public: Parses a JSON source string.
    if (!has("json-parse")) {
      var fromCharCode = String.fromCharCode;

      // Internal: A map of escaped control characters and their unescaped
      // equivalents.
      var Unescapes = {
        92: "\\",
        34: '"',
        47: "/",
        98: "\b",
        116: "\t",
        110: "\n",
        102: "\f",
        114: "\r"
      };

      // Internal: Stores the parser state.
      var Index, Source;

      // Internal: Resets the parser state and throws a `SyntaxError`.
      var abort = function() {
        Index = Source = null;
        throw SyntaxError();
      };

      // Internal: Returns the next token, or `"$"` if the parser has reached
      // the end of the source string. A token may be a string, number, `null`
      // literal, or Boolean literal.
      var lex = function () {
        var source = Source, length = source.length, value, begin, position, isSigned, charCode;
        while (Index < length) {
          charCode = source.charCodeAt(Index);
          switch (charCode) {
            case 9: case 10: case 13: case 32:
              // Skip whitespace tokens, including tabs, carriage returns, line
              // feeds, and space characters.
              Index++;
              break;
            case 123: case 125: case 91: case 93: case 58: case 44:
              // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
              // the current position.
              value = charIndexBuggy ? source.charAt(Index) : source[Index];
              Index++;
              return value;
            case 34:
              // `"` delimits a JSON string; advance to the next character and
              // begin parsing the string. String tokens are prefixed with the
              // sentinel `@` character to distinguish them from punctuators and
              // end-of-string tokens.
              for (value = "@", Index++; Index < length;) {
                charCode = source.charCodeAt(Index);
                if (charCode < 32) {
                  // Unescaped ASCII control characters (those with a code unit
                  // less than the space character) are not permitted.
                  abort();
                } else if (charCode == 92) {
                  // A reverse solidus (`\`) marks the beginning of an escaped
                  // control character (including `"`, `\`, and `/`) or Unicode
                  // escape sequence.
                  charCode = source.charCodeAt(++Index);
                  switch (charCode) {
                    case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                      // Revive escaped control characters.
                      value += Unescapes[charCode];
                      Index++;
                      break;
                    case 117:
                      // `\u` marks the beginning of a Unicode escape sequence.
                      // Advance to the first character and validate the
                      // four-digit code point.
                      begin = ++Index;
                      for (position = Index + 4; Index < position; Index++) {
                        charCode = source.charCodeAt(Index);
                        // A valid sequence comprises four hexdigits (case-
                        // insensitive) that form a single hexadecimal value.
                        if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                          // Invalid Unicode escape sequence.
                          abort();
                        }
                      }
                      // Revive the escaped character.
                      value += fromCharCode("0x" + source.slice(begin, Index));
                      break;
                    default:
                      // Invalid escape sequence.
                      abort();
                  }
                } else {
                  if (charCode == 34) {
                    // An unescaped double-quote character marks the end of the
                    // string.
                    break;
                  }
                  charCode = source.charCodeAt(Index);
                  begin = Index;
                  // Optimize for the common case where a string is valid.
                  while (charCode >= 32 && charCode != 92 && charCode != 34) {
                    charCode = source.charCodeAt(++Index);
                  }
                  // Append the string as-is.
                  value += source.slice(begin, Index);
                }
              }
              if (source.charCodeAt(Index) == 34) {
                // Advance to the next character and return the revived string.
                Index++;
                return value;
              }
              // Unterminated string.
              abort();
            default:
              // Parse numbers and literals.
              begin = Index;
              // Advance past the negative sign, if one is specified.
              if (charCode == 45) {
                isSigned = true;
                charCode = source.charCodeAt(++Index);
              }
              // Parse an integer or floating-point value.
              if (charCode >= 48 && charCode <= 57) {
                // Leading zeroes are interpreted as octal literals.
                if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                  // Illegal octal literal.
                  abort();
                }
                isSigned = false;
                // Parse the integer component.
                for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                // Floats cannot contain a leading decimal point; however, this
                // case is already accounted for by the parser.
                if (source.charCodeAt(Index) == 46) {
                  position = ++Index;
                  // Parse the decimal component.
                  for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                  if (position == Index) {
                    // Illegal trailing decimal.
                    abort();
                  }
                  Index = position;
                }
                // Parse exponents. The `e` denoting the exponent is
                // case-insensitive.
                charCode = source.charCodeAt(Index);
                if (charCode == 101 || charCode == 69) {
                  charCode = source.charCodeAt(++Index);
                  // Skip past the sign following the exponent, if one is
                  // specified.
                  if (charCode == 43 || charCode == 45) {
                    Index++;
                  }
                  // Parse the exponential component.
                  for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                  if (position == Index) {
                    // Illegal empty exponent.
                    abort();
                  }
                  Index = position;
                }
                // Coerce the parsed value to a JavaScript number.
                return +source.slice(begin, Index);
              }
              // A negative sign may only precede numbers.
              if (isSigned) {
                abort();
              }
              // `true`, `false`, and `null` literals.
              if (source.slice(Index, Index + 4) == "true") {
                Index += 4;
                return true;
              } else if (source.slice(Index, Index + 5) == "false") {
                Index += 5;
                return false;
              } else if (source.slice(Index, Index + 4) == "null") {
                Index += 4;
                return null;
              }
              // Unrecognized token.
              abort();
          }
        }
        // Return the sentinel `$` character if the parser has reached the end
        // of the source string.
        return "$";
      };

      // Internal: Parses a JSON `value` token.
      var get = function (value) {
        var results, hasMembers;
        if (value == "$") {
          // Unexpected end of input.
          abort();
        }
        if (typeof value == "string") {
          if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
            // Remove the sentinel `@` character.
            return value.slice(1);
          }
          // Parse object and array literals.
          if (value == "[") {
            // Parses a JSON array, returning a new JavaScript array.
            results = [];
            for (;; hasMembers || (hasMembers = true)) {
              value = lex();
              // A closing square bracket marks the end of the array literal.
              if (value == "]") {
                break;
              }
              // If the array literal contains elements, the current token
              // should be a comma separating the previous element from the
              // next.
              if (hasMembers) {
                if (value == ",") {
                  value = lex();
                  if (value == "]") {
                    // Unexpected trailing `,` in array literal.
                    abort();
                  }
                } else {
                  // A `,` must separate each array element.
                  abort();
                }
              }
              // Elisions and leading commas are not permitted.
              if (value == ",") {
                abort();
              }
              results.push(get(value));
            }
            return results;
          } else if (value == "{") {
            // Parses a JSON object, returning a new JavaScript object.
            results = {};
            for (;; hasMembers || (hasMembers = true)) {
              value = lex();
              // A closing curly brace marks the end of the object literal.
              if (value == "}") {
                break;
              }
              // If the object literal contains members, the current token
              // should be a comma separator.
              if (hasMembers) {
                if (value == ",") {
                  value = lex();
                  if (value == "}") {
                    // Unexpected trailing `,` in object literal.
                    abort();
                  }
                } else {
                  // A `,` must separate each object member.
                  abort();
                }
              }
              // Leading commas are not permitted, object property names must be
              // double-quoted strings, and a `:` must separate each property
              // name and value.
              if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                abort();
              }
              results[value.slice(1)] = get(lex());
            }
            return results;
          }
          // Unexpected token encountered.
          abort();
        }
        return value;
      };

      // Internal: Updates a traversed object member.
      var update = function(source, property, callback) {
        var element = walk(source, property, callback);
        if (element === undef) {
          delete source[property];
        } else {
          source[property] = element;
        }
      };

      // Internal: Recursively traverses a parsed JSON object, invoking the
      // `callback` function for each value. This is an implementation of the
      // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
      var walk = function (source, property, callback) {
        var value = source[property], length;
        if (typeof value == "object" && value) {
          // `forEach` can't be used to traverse an array in Opera <= 8.54
          // because its `Object#hasOwnProperty` implementation returns `false`
          // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
          if (getClass.call(value) == arrayClass) {
            for (length = value.length; length--;) {
              update(value, length, callback);
            }
          } else {
            forEach(value, function (property) {
              update(value, property, callback);
            });
          }
        }
        return callback.call(source, property, value);
      };

      // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
      JSON3.parse = function (source, callback) {
        var result, value;
        Index = 0;
        Source = "" + source;
        result = get(lex());
        // If a JSON string contains multiple tokens, it is invalid.
        if (lex() != "$") {
          abort();
        }
        // Reset the parser state.
        Index = Source = null;
        return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
      };
    }
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}(this));

},{}],50:[function(_dereq_,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}]},{},[1])
(1)
});

/**
 * @author lijh
 * @copyright 2015 Qcplay All Rights Reserved.
 * 提供横幅广告相关支持
 */

var BannerAd = qc.defineBehaviour('qc.Plugins.BannerAd', qc.Behaviour, function() {
    var self = this;

    /**
     * @property {string} urlPC - 广告页面地址(PC)
     */
    self.urlPC = '';

    /**
     * @property {string} urlMobile - 广告页面地址(移动设备）
     */
    self.urlMobile = '';

    /**
     * @property {number} height - 广告栏高度
     */
    self.height = 48;

    /**
     * @property {number} location - 广告位置
     */
    self.location = BannerAd.AD_LOCATION_BOTTOM;
}, {
    urlPC : qc.Serializer.STRING,
    urlMobile : qc.Serializer.STRING,
    height : qc.Serializer.NUMBER,
    location : qc.Serializer.NUMBER
});

BannerAd.__menu = 'Plugins/BannerAd';

BannerAd.AD_LOCATION_TOP = 0;
BannerAd.AD_LOCATION_BOTTOM = 1;

BannerAd.prototype.awake = function() {
    this.display();
};

// 显示横幅广告
BannerAd.prototype.display = function() {
    var self = this;

    if (document.getElementById('bannerAdDiv') !== null)
        return;

    var gameDiv = document.getElementById('gameDiv');

    // 创建一个div，添加到gameDiv中
    var div = document.createElement('div');
    var top = self.location === BannerAd.AD_LOCATION_TOP ? -self.game.height : -self.height;
    var style = qc.Util.formatString('position:relative;top:{0}px;height:{1}px', top, self.height);
    div.setAttribute('style', style);
    div.setAttribute('id', 'bannerAdDiv');
    gameDiv.appendChild(div);

    // 创建一个iframe用于显示广告页面，并添加到新创建的div中
    frame = document.createElement('iframe');
    var src = self.game.device.desktop ? self.urlPC : self.urlMobile;
    src = src + '?valign=' + (self.location === BannerAd.AD_LOCATION_TOP ? 'top' : 'bottom');
    frame.setAttribute('src', src);
    frame.setAttribute('width', '100%');
    frame.setAttribute('height', '100%');
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('scrolling', 'no');
    div.appendChild(frame);
}

// 隐藏横幅广告
BannerAd.prototype.hide = function() {
    var self = this;

    var adDiv = document.getElementById('bannerAdDiv');
    if (adDiv !== null)
        adDiv.parentElement.removeChild(adDiv);
}

/**
 * @author lijh
 * @copyright 2015 Qcplay All Rights Reserved.
 * 提供弹出式广告相关支持
 */

var PopupAd = qc.defineBehaviour('qc.Plugins.PopupAd', qc.Behaviour, function() {
    var self = this;

    /**
     * @property {string} urlPC - 用于PC设备的广告页面地址
     */
    self.urlPC = '';

    /**
     * @property {string} urlMobile - 用于移动设备的广告页面地址
     */
    self.urlMobile = '';

    /**
     * @property {string} widthPC - PC设备上的广告页面宽度
     */
    self.widthPC = 100;

    /**
     * @property {string} heightPC - PC设备上的广告页面高度
     */
    self.heightPC = 100;

    /**
     * @property {string} closeImgUrl - 关闭按钮地址
     */
    self.closeImgUrl = '';

    /**
     * @property {qc.Point} closeImgWidth - 关闭按钮宽度
     */
    self.closeImgWidth = 0;

    /**
     * @property {qc.Point} closeImgHeight - 关闭按钮高度
     */
    self.closeImgHeight = 0;

    /**
     * @property {qc.Signal} onAccessAd - 点击广告页面事件
     */
    self.onAccessAd = new qc.Signal();

    /**
     * @property {qc.Timer} adTimer - 用于检测用户是否点击广告页面的定时器
     */
    self.adTimer = undefined;
}, {
    urlPC : qc.Serializer.STRING,
    urlMobile: qc.Serializer.STRING,
    widthPC: qc.Serializer.NUMBER,
    heightPC: qc.Serializer.NUMBER,
    closeImgUrl : qc.Serializer.STRING,
    closeImgWidth : qc.Serializer.NUMBER,
    closeImgHeight : qc.Serializer.NUMBER
});

PopupAd.__menu = 'Plugins/PopupAd';

// 显示弹出广告
PopupAd.prototype.display = function() {
    var self = this;

    if (document.getElementById('popupAdDiv') !== null)
        return;

    var gameDiv = document.getElementById('gameDiv');
    gameDiv.style.pointerEvents = 'none';

    // 创建一个与gameDiv平级的div，避免事件被gameDiv优先截获
    var div = document.createElement('div');
    var width, height;
    if (self.game.device.desktop)
    {
        width  = self.widthPC;
        height = self.heightPC;
    }
    else
    {
        width = height = Math.min(self.game.width, self.game.height);
    }

    var top = (self.game.height - height) / 2;
    var left = (self.game.width - width) / 2;
    var style = qc.Util.formatString('position:absolute;top:{0}px;left:{1}px;width:{2}px;height:{3}px',
        top, left, width, height);
    div.setAttribute('style', style);
    div.setAttribute('id', 'popupAdDiv');
    gameDiv.parentElement.appendChild(div);

    // 创建一个iframe用于显示广告页面，并添加到新创建的div中
    frame = document.createElement('iframe');
    frame.setAttribute('src', self.game.device.desktop ? self.urlPC : self.urlMobile);
    frame.setAttribute('width', '100%');
    frame.setAttribute('height', '100%');
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('scrolling', 'no');
    div.appendChild(frame);

    // 右上角添加关闭按钮
    var imgDiv = document.createElement('div');
    imgDiv.setAttribute('style', 'position:absolute;top:0px;right:0px;');
    div.appendChild(imgDiv);

    var img = document.createElement('img');
    img.setAttribute('src', self.closeImgUrl);
    img.setAttribute('width', self.closeImgWidth);
    img.setAttribute('height', self.closeImgHeight);

    if (self.game.device.desktop)
        img.addEventListener('click', self.hide.bind(self), true);
    else
        img.addEventListener('touchend', self.hide.bind(self), true);
    imgDiv.appendChild(img);

    // 启动定时器检测是否点击了广告
    self.adTimer = self.game.timer.loop(500, function() {
        if (document.activeElement === frame)
        {
            self.game.timer.remove(self.adTimer);

            self.onAccessAd.dispatch();
        }
    });
}

// 隐藏弹出广告
PopupAd.prototype.hide = function() {
    var self = this;

    var gameDiv = document.getElementById('gameDiv');
    gameDiv.style.pointerEvents = 'auto';

    var adDiv = document.getElementById('popupAdDiv');
    if (adDiv !== null)
        adDiv.parentElement.removeChild(adDiv);

    self.game.timer.remove(self.adTimer);
}


// 检测环境
var _ensureModule = function(clazz) {
    var arr = clazz.split('.');
    var curr = window;
    for (var i = 0; i < arr.length; i++) {
        if (!curr[arr[i]]) curr[arr[i]] = {};
        curr = curr[arr[i]];
    }
};


_ensureModule('com.qici.extraUI');
/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 滚动支持
 */
var ScrollView = qc.ScrollView;

var ScrollSupport = com.qici.extraUI.ScrollSupport = function(game, node, fnViewRect, fnContentRect, fnSetContentPos) {

    this.game = game;

	/**
	 * @property {qc.Node} node - 需要响应的节点
	 */
	this.node = node;

	/**
	 * @property {function} getViewRect - 得到视窗的大小
	 */
	this._getViewRect = fnViewRect;

	/**
	 * @property {function} getContentRect - 得到内容的大小
	 */
	this._getContentRect = fnContentRect;

	/**
	 * @property {function} setContentPosition - 设置内容的偏移
	 */
	this._setContentPosition = fnSetContentPos;

	/**
     * @property {boolean} canHorizontal - 是否响应水平滑动
     */
    this.canHorizontal = true;

    /**
     * @property {boolean} canVertical - 是否响应竖直滑动
     */
    this.canVertical = true;

    /**
     * @property {number} movementType - 边界限制类型
     */
    this.movementType = ScrollView.MOVEMENT_ELASTIC;

    /**
     * @property {number} elasticity - 当movementType === ScrollView.MOVEMENT_ELASTIC时生效，表示复位速度
     */
    this.elasticity = 1;

    /**
     * @property {boolean} inertia - 是否惯性滑动
     */
    this.inertia = true;

    /**
     * @property {number} decelerationRate - 惯性滑动的减速参数
     */
    this.decelerationRate = 0.03;

    /**
     * @property {number} scrollSensitivity - 响应滚动时的倍率
     */
    this.scrollSensitivity = 1;

    /**
     * @property {boolean} propagationScroll - 是否向上传递滚动事件
     * @type {boolean}
     */
    this.propagationScroll = false;

    /**
     * @property {Phaser.Signal} onValueChange - 偏移值发生变化时调用
     */
    this.onValueChange = new Phaser.Signal();

    /**
     * @property {qc.Point | null} _preContentPosition - 上一次处理的显示内容的偏移值
     * @private
     */
    this._preContentPosition = null;

    /**
     * @property {qc.Rectangle | null} _preContentRect - 上一次处理的内容区域在本节点坐标系下的位置
     * @private
     */
    this._preContentRect = null;

    /**
     * @property {qc.Rectangle | null} _preViewRect - 上一次处理的本视窗的大小
     * @private
     */
    this._preViewRect = null;

    /**
     * @property {qc.Point] _velocity - 滚动的速率，每秒移动的距离
     * @private
     */
    this._velocity = new qc.Point(0, 0);

    /**
     * @property {boolean} _isDragging - 是否正在拖拽中
     * @private
     */
    this._isDragging = false;

    this.pivotX = 0;
    this.pivotY = 0;

    // 监听滚动事件和拖拽事件
    if (this.node) {
	    this.node.onWheel.add(this._doWheel, this);
	    this.node.onDragStart.add(this._doDragStart, this);
	    this.node.onDrag.add(this._doDrag, this);
	    this.node.onDragEnd.add(this._doDragEnd, this);	
    }
};

ScrollSupport.prototype = {};
ScrollSupport.prototype.constructor = ScrollSupport;


Object.defineProperties(ScrollSupport.prototype,{
	/**
     * @property {qc.Node | null} horizontalScrollBar - 水平滚动条
     */
    horizontalScrollBar : {
        get : function() {
            if (this._horizontalScrollBar && this._horizontalScrollBar._destroy) {
                this._horizontalScrollBar = null;
            }
            return this._horizontalScrollBar;
        },
        set : function(value) {
            if (this._horizontalScrollBar) {
                this._horizontalScrollBar.onValueChange.remove(this._setHorizontalNormalizedPosition, this);
            }
            this._horizontalScrollBar = value;
            if (this._horizontalScrollBar) {
                this._horizontalScrollBar.onValueChange.add(this._setHorizontalNormalizedPosition, this);
            }
        }
    },

    /**
     * @property {qc.Node | null} verticalScrollBar - 竖直滚动条
     */
    verticalScrollBar : {
        get : function() {
            if (this._verticalScrollBar && this._verticalScrollBar._destroy) {
                this._verticalScrollBar = null;
            }
            return this._verticalScrollBar;
        },
        set : function(value) {
            if (this._verticalScrollBar) {
                this._verticalScrollBar.onValueChange.remove(this._setVerticalNormalizedPosition, this);
            }
            this._verticalScrollBar = value;
            if (this._verticalScrollBar) {
                this._verticalScrollBar.onValueChange.add(this._setVerticalNormalizedPosition, this);
            }
        }
    },

    /**
     * @property {number} horizontalNormalizedPosition - 水平方向上滚动的比例
     */
    horizontalNormalizedPosition : {
        get : function() {
            this._updateBounds();
            if (this._contentRect.width <= this._viewRect.width) {
                return (this._viewRect.x > this._contentRect.x) ? 1 : 0;
            }
            return (this._viewRect.x - this._contentRect.x) / (this._contentRect.width - this._viewRect.width);
        },
        set : function(value) {
            this.setNormalizedPosition(value, 0);
        }
    },

    /**
     * @property {number} verticalNormalizedPosition - 竖直方向上滚动的比例
     */
    verticalNormalizedPosition : {
        get : function() {
            this._updateBounds();
            if (this._contentRect.height <= this._viewRect.height) {
                return (this._viewRect.y > this._contentRect.y) ? 1 : 0;
            }
            return (this._viewRect.y - this._contentRect.y) / (this._contentRect.height - this._viewRect.height);
        },
        set : function(value) {
            this.setNormalizedPosition(value, 1);
        }
    }
});

/**
 * 析构
 */
ScrollSupport.prototype.destroy = function() {
	if (this.node) {
		this.node.onWheel.remove(this._doWheel, this);
	    this.node.onDragStart.remove(this._doDragStart, this);
	    this.node.onDrag.remove(this._doDrag, this);
	    this.node.onDragEnd.remove(this._doDragEnd, this);		
	}
    this.node = null;
    this._setContentPosition = null;
    this._getContentRect = null;
    this._getViewRect = null;
    this.horizontalScrollBar = null;
    this.verticalScrollBar = null;
};

/**
 * 更新
 */
ScrollSupport.prototype.update = function(deltaTime) {
    this._updateVelocity(deltaTime);
};

/**
 * 获取视窗大小
 */
ScrollSupport.prototype.getViewRect = function() {
	return this._getViewRect ? this._getViewRect() : new qc.Rectangle(0, 0, 0, 0);
};

/**
 * 获取内容大小
 */
ScrollSupport.prototype.getContentRect = function() {
	return this._getContentRect ? this._getContentRect() : new qc.Rectangle(0, 0, 0, 0);
};

/**
 * 设置内容显示的位置
 * @param x {Number} - x轴坐标
 * @param y {Number} - y轴坐标
 */
ScrollSupport.prototype.setContentPosition = function(x, y) {
	this._setContentPosition && this._setContentPosition(x, y);
};

/**
 * 设置水平位置
 * @param value {Number}
 * @private
 */
ScrollSupport.prototype._setHorizontalNormalizedPosition = function(value) {
    this.setNormalizedPosition(value, 0);
};

/**
 * 设置竖直位置
 * @param value {Number}
 * @private
 */
ScrollSupport.prototype._setVerticalNormalizedPosition = function(value) {
    this.setNormalizedPosition(value, 1);
};

/**
 * 计算移动指定距离后，显示区域对于视窗的越界偏移
 * @param deltaX {Number} - x轴上移动的距离
 * @param deltaY {Number} - y轴上移动的距离
 * @returns {qc.Point}
 */
ScrollSupport.prototype._calculateOffset = function(deltaX, deltaY) {
    var offset = new qc.Point(0, 0);
    // 无限制的情况下，没有越界处理
    if (this.movementType === ScrollView.MOVEMENT_UNRESTRICTED) {
        return offset;
    }
    var rect = this.getViewRect();
    var contentRect = this._contentRect;
    var min = new qc.Point(contentRect.x, contentRect.y);
    var max = new qc.Point(contentRect.x + contentRect.width, contentRect.y + contentRect.height);
    if (this.canHorizontal) {
        min.x += deltaX;
        max.x += deltaX;
        if (min.x > rect.x) {
            offset.x = rect.x - min.x;
        }
        else if (max.x < rect.x + rect.width) {
            offset.x = rect.x + rect.width - max.x;
        }
    }

    if (this.canVertical) {
        min.y += deltaY;
        max.y += deltaY;
        if (min.y > rect.y) {
            offset.y = rect.y - min.y;
        }
        else if (max.y < rect.y + rect.height) {
            offset.y = rect.y + rect.height - max.y;
        }
    }

    return offset;
};

/**
 * 处理回弹效果
 * @param position {qc.Point} - 当前位置
 * @param offset {qc.Point} - 需要处理的越界值
 * @param deltaTime {Number} - 上一帧到现在的时间
 * @param axisPos {'x' | 'y') - 滚动轴
 * @private
 */
ScrollSupport.prototype._calcVelocityEffect = function(position, offset, deltaTime, axisPos) {
    // 弹性处理
    if (this.movementType === ScrollView.MOVEMENT_ELASTIC && offset[axisPos] !== 0) {
        var lastOffset = this['_lastOffset_' + axisPos] || 0;
        if (Math.abs(lastOffset) < Math.abs(offset[axisPos])) {
            this['_lastOffset_' + axisPos] = offset[axisPos];
            this._currSmoothetTime = deltaTime;
        }
        else {
            this['_lastOffset_' + axisPos] = offset[axisPos];
            this._currSmoothetTime += deltaTime;
        }
        var smootherTime = this.elasticity <= 0 ? deltaTime : this.elasticity;
        var ret = this.game.math.smoothDamp(position[axisPos], position[axisPos] + offset[axisPos], this._velocity[axisPos], this.elasticity, Number.MAX_VALUE, deltaTime / 100);
        if (Math.abs(position[axisPos] + offset[axisPos] - ret[0]) < 0.0001) {
            position[axisPos] = position[axisPos] + offset[axisPos];
            this._velocity[axisPos] = 0;
        }
        else {
            position[axisPos] = ret[0];
            this._velocity[axisPos] = ret[1];
        }
        //position[axisPos] = position[axisPos] + offset[axisPos] * Phaser.Math.smoothstep(this._currSmoothetTime, 0, smootherTime * 1000);
        //this._velocity[axisPos] = 0;

    }
    else if (this.movementType === ScrollView.MOVEMENT_CLAMPED && offset[axisPos] !== 0) {
        position[axisPos] = position[axisPos] + offset[axisPos];
    }
    else if (this.inertia) {
        // 计算速度衰减
        var velocity = this._velocity[axisPos] * Math.pow(Math.abs(this.decelerationRate), deltaTime / 1000);
        if (Math.abs(velocity) < 1) {
            velocity = 0;
        }
        this._velocity[axisPos] = velocity;
        position[axisPos] = position[axisPos] + velocity * deltaTime / 1000;
    }
    else {
        this._velocity[axisPos] = 0;
    }
};

/**
 * 弹性形变
 * @param overStretching {Number} - 越界值，相当于力的大小
 * @param viewSize {Number} - 正常值
 * @return {Number} 产生的形变值
 * @private
 */
ScrollSupport.prototype._rubberDelta = function(overStretching, viewSize) {
    return (1 - (1 / ((Math.abs(overStretching) * 0.55 / viewSize) + 1))) * viewSize * this.game.math.sign(overStretching);
};

/**
 * 更新处理速度信息
 * @private
 */
ScrollSupport.prototype._updateVelocity = function(deltaTime) {
    var contentRect, position; 

    this._updateBounds();

    var offset = this._calculateOffset(0, 0);

    // 拖拽中，或者越界的偏移为0，或者回弹的速度为0时跳过
    if (!this._isDragging &&
        ((offset.x !== 0 || offset.y !== 0) ||
        (this._velocity.x !== 0 || this._velocity.y !== 0))) {

        contentRect = this.getContentRect();
        position = new qc.Point(contentRect.x, contentRect.y);

        this._calcVelocityEffect(position, offset, deltaTime, 'x');
        this._calcVelocityEffect(position, offset, deltaTime, 'y');

        if (this._velocity.x !== 0 ||
            this._velocity.y !== 0) {
            if (this.movementType === ScrollView.MOVEMENT_CLAMPED) {
                offset = this._calculateOffset(position.x - contentRect.x, position.y - contentRect.y);
                position.x += offset.x;
                position.y += offset.y;
            }
        }
        this.setContentPosition(position.x, position.y);
    }

    if (this._isDragging && this.inertia) {
        contentRect = this.getContentRect();
        var vx = contentRect.x - this._preContentPosition.x;
        var vy = contentRect.y - this._preContentPosition.y;

        var l =  this.game.math.clamp(deltaTime / 1000, 0, 1);

        this._velocity.x = vx / l;
        this._velocity.y = vy / l;
    }

    if (!this._preViewRect || !qc.Rectangle.equals(this._viewRect, this._preViewRect) ||
        !this._preContentRect || !qc.Rectangle.equals(this._contentRect, this._preContentRect)) {
        this._updateScrollBars(offset.x, offset.y);
        this.onValueChange.dispatch(new qc.Point(this.horizontalNormalizedPosition, this.verticalNormalizedPosition));
        this._updatePrevData();
    }
};

/**
 * 设置指定方向上的滚动值
 * @param value {number} - 设置的值
 * @param axis {number} - 坐标轴，0：x轴，1：y轴
 */
ScrollSupport.prototype.setNormalizedPosition = function(value, axis) {
    this._updateBounds();
    if (!this._contentRect) {
        return;
    }
    var contentRect = this.getContentRect();
    var lenProperty = axis ? 'height' : 'width';
    var posProperty = axis ? 'y' : 'x';
    var hiddenLength = this._contentRect[lenProperty] - this._viewRect[lenProperty];
    var contentMinPosition = this._viewRect[posProperty] - value * hiddenLength;
    var newLocalPosition = contentRect[posProperty] + contentMinPosition - this._contentRect[posProperty];
    var localPosition = contentRect[posProperty];
    // 滚动位置相差1个像素时开始处理
    if (Math.abs(localPosition - newLocalPosition) > 1) {
        contentRect[posProperty] = newLocalPosition;
        this.setContentPosition(contentRect.x, contentRect.y);
        // 设置滚动速率为0
        this._velocity[posProperty] = 0;
        this._updateBounds();
    }
};

/**
 * 更新记录的上一次信息
 * @private
 */
ScrollSupport.prototype._updatePrevData = function() {
    var contentRect = this.getContentRect();
    this._preContentPosition = new qc.Point(contentRect.x, contentRect.y);
    this._preContentRect = this._contentRect;
    this._preViewRect = this._viewRect;
};

/**
 * 更新滚动条的滚动信息
 * @param offX {number} - 在水平方向上的偏移
 * @param offY {number} - 在竖直方向上的偏移
 * @private
 */
ScrollSupport.prototype._updateScrollBars = function(offX, offY) {
	var barSize;
    if (this.horizontalScrollBar) {
        if (this._contentRect.width > 0) {
            barSize = (this._viewRect.width - Math.abs(offX)) / this._contentRect.width;
            this.horizontalScrollBar.size = Phaser.Math.clamp(barSize,0, 1);
        }
        else {
            this.horizontalScrollBar.size = 1;
        }
        this.horizontalScrollBar.value = this.horizontalNormalizedPosition;
    }

    if (this.verticalScrollBar) {
        if (this._contentRect.height > 0) {
            barSize = (this._viewRect.height - Math.abs(offY)) / this._contentRect.height;
            this.verticalScrollBar.size = Phaser.Math.clamp(barSize, 0, 1);
        }
        else {
            this.verticalScrollBar.size = 1;
        }
        this.verticalScrollBar.value = this.verticalNormalizedPosition;
    }
};

/**
 * 更新区域信息
 * @private
 */
ScrollSupport.prototype._updateBounds = function() {
    var viewRect = this._viewRect = this.getViewRect();
    this._updateContentBounds();
    if (!this._getContentRect)
        return;

    // 如果内容区域下于显示区域，则模拟内容区域为显示区域大小
    var diffWidth = viewRect.width - this._contentRect.width;
    var diffHeight = viewRect.height - this._contentRect.height;
    if (diffWidth > 0) {
        this._contentRect.width = viewRect.width;
        this._contentRect.x -= diffWidth * this.pivotX;
    }
    if (diffHeight > 0) {
        this._contentRect.height = viewRect.height;
        this._contentRect.y -= diffHeight * this.pivotY;
    }
};

/**
 * 更新内容的区域信息
 * @private
 */
ScrollSupport.prototype._updateContentBounds = function() {
    this._contentRect = this.getContentRect();
};

/**
 * 滚动条滚动时
 * @param node {qc.Node} - 事件发生的节点
 * @param event {qc.WheelEvent} - 拖拽结束事件
 * @private
 */
ScrollSupport.prototype._doWheel = function(node, event) {
    this._updateBounds();

    var delta = new qc.Point(event.source.deltaX, event.source.deltaY);
    if (!this.canVertical) {
        delta.y = 0;
    }
    if (!this.canHorizontal) {
        delta.x = 0;
    }

    var deltaX = delta.x * this.scrollSensitivity;
    var deltaY = delta.y * this.scrollSensitivity;
    this.doScroll(deltaX, deltaY, false);
};

/**
 * 开始拖拽
 * @param node {qc.Node} - 事件发生的节点
 * @param event {qc.DragStartEvent} - 开始拖拽事件
 * @private
 */
ScrollSupport.prototype._doDragStart = function(node, event) {
    if (event.source.eventId !== qc.Mouse.BUTTON_LEFT) {
        return;
    }

    this._updateBounds();
    // 记录当前点击时内容的显示位置
    var contentRect = this.getContentRect();
    this._contentStartPosition = new qc.Point(contentRect.x, contentRect.y);
    this._pointerStartCursor = this.node.toLocal(new qc.Point(event.source.startX, event.source.startY));
    this._isDragging = true;
};

/**
 * 处理拖拽结束
 * @param node {qc.Node} - 事件发生的节点
 * @param event {qc.DragEndEvent} - 拖拽结束事件
 * @private
 */
ScrollSupport.prototype._doDragEnd = function(node, event) {
    if (event.source.eventId !== qc.Mouse.BUTTON_LEFT) {
        return;
    }
    this._isDragging = false;
};

/**
 * 处理拖拽事件
 * @param node {qc.Node} - 事件发生的节点
 * @param event {qc.DragEvent} - 拖拽结束事件
 * @private
 */
ScrollSupport.prototype._doDrag = function(node, event) {
    if (event.source.eventId !== qc.Mouse.BUTTON_LEFT) {
        return;
    }

    this._updateBounds();
    var contentRect = this.getContentRect();
    var cursor = this.node.toLocal(new qc.Point(event.source.x, event.source.y));
    if (!this._pointerStartCursor)
        return;

    var deltaX = this.canHorizontal ? (cursor.x - this._pointerStartCursor.x) : 0;
    var deltaY = this.canVertical ? (cursor.y - this._pointerStartCursor.y) : 0;
    this.doScroll(this._contentStartPosition.x + deltaX - contentRect.x,
        this._contentStartPosition.y + deltaY - contentRect.y,
        true);
};

/**
 * 处理滚动事件
 * @param deltaX {number} - x轴偏移
 * @param deltaY {number} - x轴偏移
 * @param isDrag {boolean} - 是否是拖拽
 */
ScrollSupport.prototype.doScroll = function(deltaX, deltaY, isDrag) {
    var contentRect = this.getContentRect();
    var position = new qc.Point(contentRect.x, contentRect.y);
    position.x += deltaX;
    position.y += deltaY;
    var offset = this._calculateOffset(deltaX, deltaY);
    position.x += offset.x;
    position.y += offset.y;
    if (this.movementType === ScrollView.MOVEMENT_CLAMPED && this.propagationScroll) {
        var parentScroll = this.parent;
        while (!(parentScroll instanceof ScrollView) && parentScroll !== this.game.world) {
            parentScroll = parentScroll.parent;
        }
        if (parentScroll instanceof ScrollView) {
            parentScroll.doScroll(-offset.x, -offset.y, isDrag);
        }
    }
    else if (this.movementType === ScrollView.MOVEMENT_ELASTIC) {
        if (isDrag) {
            if (offset.x !== 0) {
                position.x = position.x - this._rubberDelta(offset.x, this._viewRect.width);
            }
            if (offset.y !== 0) {
                position.y = position.y - this._rubberDelta(offset.y, this._viewRect.height);
            }
        }
        else {
            position.x -= offset.x;
            position.y -= offset.y;
            if (Math.abs(offset.x) > this._viewRect.width) {
                position.x += offset.x - this.game.math.sign(offset.x) * this._viewRect.width;
            }
            if (Math.abs(offset.y) > this._viewRect.height) {
                position.y += offset.y - this.game.math.sign(offset.y) * this._viewRect.height;
            }
        }
    }
    this.setContentPosition(position.x, position.y);
    if (!isDrag) {
        this._updateBounds();
    }
};
/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * TableView的适配器，用于提供表格数据信息。
 * 使用时，继承此类，并实现相关接口
 */
var TableViewAdapter = qc.defineBehaviour('com.qici.extraUI.TableViewAdapter', qc.Behaviour, function() {
	var self = this;

	/**
	 * @property {qc.Signal} onDataChange - 当表格数据发生变化时的通知事件
	 */
	self.onDataChange = new qc.Signal();
}, {
	
});

Object.defineProperties(TableViewAdapter.prototype,{

});

/**
 * 通知TableView表格变化
 */
TableViewAdapter.prototype.dispatchDataChange = function() {
	this.onDataChange.dispatch();

};

/**
 * 获取表格大小，x、y同时只能有一个为Infinity
 * @return {{x: number|Infinity, y: number| Infinity}}
 */
TableViewAdapter.prototype.getTableSize = function() {
	return { x: 1, y: Infinity};
};

/**
 * 根据在Table中的点返回对应的单元格
 * @param  {number} x - x轴坐标
 * @param  {number} y - y轴坐标
 * @return {{x: number, y: number}}} 返回点所在的单元格信息
 */
TableViewAdapter.prototype.findCellWithPos = function(x, y) {
	return { 
		x: Math.floor(x / 100),
		y: Math.floor(y / 100)
	};
};

/**
 * 获取节点的显示位置
 */
TableViewAdapter.prototype.getCellRect = function(col, row) {
	return new qc.Rectangle(col * 100, row * 100, 100, 100);
};

/**
 * 节点处于不可见时，回收节点，
 * @param  {qc.Node} cell - 节点
 * @param  {number} col - 所在列
 * @param  {number} row - 所在行
 */
TableViewAdapter.prototype.revokeCell = function(cell, col, row) {

};

/**
 * 节点处于可见时，创建节点，
 * @param  {qc.Node} cell - 节点
 * @param  {number} col - 所在列
 * @param  {number} row - 所在行
 */
TableViewAdapter.prototype.createCell = function(cell, col, row) {

};
/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */
/**
 * 一个高效的表格显示组件，
 */
var TableView = qc.defineBehaviour('com.qici.extraUI.TableView', qc.Behaviour, function() {
    var self = this;

    /**
     * @property {[qc.Node]} _cellPool - 缓存的节点
     */
    self._cellPool = [];

    /**
     * @property {[qc.Node]} _usingCell - 使用中的节点
     */
    self._usingCell = [];

    /**
     * @property {qc.Rectangle} _showRect - 当前显示的子节点记录
     */
    self._showRect = new qc.Rectangle(0, 0, 0, 0);

    /**
     * 启用滚动功能
     */
    self.scrollSupport = new com.qici.extraUI.ScrollSupport(
        self.game,
        self.gameObject, 
        self._getViewRect.bind(self), 
        self._getContentRect.bind(self),
        self._setContentPosition.bind(self));

    self.runInEditor = true;
}, {
    content: qc.Serializer.NODE,
    adapterNode: qc.Serializer.NODE,
    horizontalScrollBar: qc.Serializer.NODE,
    verticalScrollBar: qc.Serializer.NODE,
    cellPrefab: qc.Serializer.PREFAB,
    overflow: qc.Serializer.BOOLEAN,
    canHorizontal: qc.Serializer.BOOLEAN,
    canVertical: qc.Serializer.BOOLEAN,
    movementType: qc.Serializer.NUMBER,
    elasticity: qc.Serializer.NUMBER,
    inertia: qc.Serializer.BOOLEAN,
    decelerationRate: qc.Serializer.NUMBER,
    scrollSensitivity: qc.Serializer.NUMBER,
    propagationScroll: qc.Serializer.BOOLEAN,
    extraLeft: qc.Serializer.NUMBER,
    extraRight: qc.Serializer.NUMBER,
    extraTop: qc.Serializer.NUMBER,
    extraBottom: qc.Serializer.NUMBER
});

Object.defineProperties(TableView.prototype, {
    /**
     * @property {qc.Node} adapterNode - 数据提供者所在的节点
     */
    adapterNode : {
        get : function() { return this._adapterNode || this.gameObject; },
        set : function(v) {
            if (v === this._adapterNode) 
                return;

            this._adapterNode = v;
            // 删除当前的数据来源
            if (this._adapter) {
                this._adapter.onDataChange.remove(this._clearTable, this);
                this._adapter = null;
            }
            this._needRebuild = true;
        }
    },

     /**
     * @property {qc.Node} adapter - 数据提供者
     * @readonly
     */
    adapter : {
        get : function() { 
            if (!this._adapter) {
                this._adapter = this.adapterNode && this.adapterNode.getScript('com.qici.extraUI.TableViewAdapter');
                if (this._adapter) {
                    this._adapter.onDataChange.add(this._clearTable, this);
                }
            }
            return this._adapter;
        },
    },

    /**
     * @property {qc.Node} content - 需要滚动显示的内容
     * 注意本节点之下不能挂载子节点，重构表单时会删除所有的子节点。
     */
    content : {
        get : function() {
            if (this._content && this._content._destroy) {
                this.content = null;
            }
            return this._content;
        },
        set : function(value) {
            var self = this;
            if (self._content) {
                self._content.onChildrenChanged.remove(self._doChildrenChanged, self);
                self._content.onLayoutArgumentChanged.remove(self._doLayoutArgumentChanged, self);
            }
            self._content = value;
            self._needRebuild = true;
            if (self._content) {
                self._content.onChildrenChanged.add(self._doChildrenChanged, self);
                self._content.onLayoutArgumentChanged.add(self._doLayoutArgumentChanged, self);
            }
        }
    },

    /**
     * @property {qc.Prefab} cellPrefab - 单元格的预制
     */
    cellPrefab : {
        get : function() { return this._cellPrefab; },
        set : function(v) {
            if (v === this._cellPrefab) 
                return;

            this._cellPrefab = v;
            // 更改显示预制时需要清理所有节点
            if (this.content)
                this.content.removeChildren();
            // 清理缓存的节点
            this._cellPool = [];
            this._needRebuild = true;
        }
    },

    /**
     * @property {boolean} overflow - 是否溢出显示。
     * 当溢出显示时，节点完全超过content的范围才隐藏。
     * 否者只要超出范围就隐藏
     */
    overflow : {
        get : function() { return this._overflow; },
        set : function(v) {
            if (v === this._overflow)
                return;

            this._overflow = v;
            this._needRebuild = true;
        }
    },

    extraLeft : {
        get : function() { return this._extraLeft || 0; },
        set : function(v) {
            if (v === this._extraLeft)
                return;
            this._extraLeft = v;
            this._needRebuild = true;
        }
    },
    extraRight : {
        get : function() { return this._extraRight || 0; },
        set : function(v) {
            if (v === this._extraRight)
                return;
            this._extraRight = v;
            this._needRebuild = true;
        }
    },
    extraTop : {
        get : function() { return this._extraTop || 0; },
        set : function(v) {
            if (v === this._extraTop)
                return;
            this._extraTop = v;
            this._needRebuild = true;
        }
    },
    extraBottom : {
        get : function() { return this._extraBottom || 0; },
        set : function(v) {
            if (v === this._extraBottom)
                return;
            this._extraBottom = v;
            this._needRebuild = true;
        }
    },

    canHorizontal: {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.canHorizontal : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.canHorizontal = value);
        }
    },

    canVertical: {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.canVertical : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.canVertical = value);
        }
    },

    movementType: {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.movementType : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.movementType = value);
        }
    },

    elasticity: {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.elasticity : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.elasticity = value);
        }
    },

    inertia: {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.inertia : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.inertia = value);
        }
    },

    decelerationRate: {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.decelerationRate : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.decelerationRate = value);
        }
    },

    scrollSensitivity: {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.scrollSensitivity : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.scrollSensitivity = value);
        }
    },

    propagationScroll: {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.propagationScroll : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.propagationScroll = value);
        }
    },
    
    /**
     * @property {qc.Node | null} horizontalScrollBar - 水平滚动条
     */
    horizontalScrollBar : {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.horizontalScrollBar : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.horizontalScrollBar = value);
        }
    },

    /**
     * @property {qc.Node | null} verticalScrollBar - 竖直滚动条
     */
    verticalScrollBar : {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.verticalScrollBar : null;
        },
        set : function(value) {
            this.scrollSupport && (this.scrollSupport.verticalScrollBar = value);
        }
    },

    /**
     * @property {number} horizontalNormalizedPosition - 水平方向上滚动的比例
     */
    horizontalNormalizedPosition : {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.horizontalNormalizedPosition : null;
        },
        set : function(value) {
            this.scrollSupport  && this.scrollSupport.setNormalizedPosition(value, 0);
        }
    },

    /**
     * @property {number} verticalNormalizedPosition - 竖直方向上滚动的比例
     */
    verticalNormalizedPosition : {
        get : function() {
            return this.scrollSupport ? this.scrollSupport.verticalNormalizedPosition : null;
        },
        set : function(value) {
            this.scrollSupport  && this.scrollSupport.setNormalizedPosition(value, 1);
        }
    }
});

/**
 * 脚本启动时
 */
TableView.prototype.awake = function() {
};

/**
 * 析构
 */
TableView.prototype.onDestroy = function() {
    var self = this;
    // 清理一些引用的资源
    self.content = null;
    self.cellPrefab = null;
    self._adapter = null;
    self.adapterNode = null;

    self._cellPool = [];
    self._showCell = [];
    self._usingCell = [];
};

/**
 * 更新
 */
TableView.prototype.update = function() {
    if (this.content) {
        this.scrollSupport.pivotX = this.content.pivotX;
        this.scrollSupport.pivotY = this.content.pivotY;
    }
    this.scrollSupport.update(this.game.time.deltaTime);
    if (this._needRebuild) {
        this._rebuildTable();
    }
};

/**
 * 重新排布
 */
TableView.prototype.relayout = function() {
    this._rebuildTable();
};

/**
 * 清理表格
 */
TableView.prototype._clearTable = function() {
    var self = this,
        gameObject = self.gameObject,
        content = self.content;

    content.x = 0;
    content.y = 0;

    // 移除所有子节点
    self.revokeAllCell();
};

/**
 * 回收所有节点
 */
TableView.prototype.revokeAllCell = function() {
    var self = this,
        content = self.content;
    content.removeChildren();
    Array.prototype.push.apply(self._cellPool, self._usingCell);
    self._usingCell = [];
};

/**
 * 废弃一个节点
 * @param  {qc.Node} node - 不在显示区域的需要回收的节点
 */
TableView.prototype._revokeCell = function(node) {
    var self = this;
    self._cellPool.push(node);
    var idx = self._usingCell.indexOf(node);
    if (idx >= 0) {
        self._usingCell.splice(idx, 1);
    }
};

/**
 * 获取一个新的节点。
 * 如果当前缓存中存在可用的节点，则从缓存中获取，否则根据Prefab新建一个。
 * @return {qc.Node} 单元格的节点
 */
TableView.prototype._createCell = function() {
    var self = this;
    if (!self._cellPrefab) {
        return null;
    }
    var node = self._cellPool.pop() || self.game.add.clone(self._cellPrefab, self.gameObject);
    if (node) {
        self._usingCell.push(node);
    }
    return node;
};

/**
 * 获取视图大小
 */
TableView.prototype._getViewRect = function() {
    return this.gameObject.rect;
};

/**
 * 获取内容大小
 */
TableView.prototype._getContentRect = function() {
    var self = this,
        adapter = self.adapter,
        content = self.content;
    if (!content || !adapter) 
        return new qc.Rectangle(0, 0, 0, 0);

    var tableSize = adapter.getTableSize();
    var lastCellX = tableSize.x < Infinity ? tableSize.x - 1 : 0,
        lastCellY = tableSize.y < Infinity ? tableSize.y - 1 : 0;

    var cellRect = adapter.getCellRect(lastCellX, lastCellY);
    return new qc.Rectangle(content.x, content.y, 
        tableSize.x < Infinity ? cellRect.x + cellRect.width : Infinity,
        tableSize.y < Infinity ? cellRect.y + cellRect.height : Infinity);
};

/**
 * 设置当前内容在表格内容中的偏移
 */
TableView.prototype._setContentPosition = function(offsetX, offsetY) {
    var self = this,
        content = self.content;
    if (!content) 
        return;

    content.x = offsetX;
    content.y = offsetY;

    // 修改表格位置后需要马上重新设定显示内容。否则，可能会无法立即及时的更新内容信息
    self._rebuildTable();
};

/**
 * 获取当前内容区域在表格中对应的内容区域
 */
TableView.prototype._getViewRectInTable = function() {
    var self = this,
        gameObject = self.gameObject,
        rect = gameObject.rect,
        content = self.content;
    if (!content)
        return new qc.Rectangle(0, 0, 0, 0);
    return new qc.Rectangle(
        rect.x - self.extraLeft - content.x,
         rect.y - self.extraTop - content.y, 
         rect.width + self.extraLeft + self.extraRight, 
         rect.height + self.extraTop + self.extraBottom);
};

/**
 * 设置单元格的偏移
 */
TableView.prototype._setCellRect = function(cell, x, y, width, height) {
    var self = this,
        content = self.content;
    if (!content || !cell) 
        return;

    cell.x = x;
    cell.y = y;
    cell.width = width;
    cell.height = height;
};


/**
 * 重新构建表格
 */
TableView.prototype._rebuildTable = function() {
    var self = this,
        adapter = self.adapter,
        content = self.content;

    if (!content) {
        return;
    }

    if (!adapter) {
        this._clearTable();
        return;
    }

    var tableSize = adapter.getTableSize();
    if (tableSize.x <= 0 || tableSize.y <= 0 ||
        (tableSize.x === Infinity && tableSize.y === Infinity)) {
        // 没有行，或者没有列，或者行无限且列无限
        // 则清理显示并退出处理
        this._clearTable();
        return;
    }

    var bounds = self._getViewRectInTable();
    var showRect = self._showRect;
    var minX = bounds.x,
        maxX = bounds.x + bounds.width,
        minY = bounds.y,
        maxY = bounds.y + bounds.height;

    var leftUp = adapter.findCellWithPos(minX, minY);
    var rightBottom = adapter.findCellWithPos(maxX, maxY);

    if (!self.overflow) {
        var overLeftUp = adapter.findCellWithPos(minX - 1, minY - 1);
        var overRightBottom = adapter.findCellWithPos(maxX + 1, maxY + 1);
        if (overLeftUp.x === leftUp.x)
            ++leftUp.x;
        if (overLeftUp.y === leftUp.y)
            ++leftUp.y;
        if (overRightBottom.x === rightBottom.x)
            --rightBottom.x;
        if (overRightBottom.y === rightBottom.y)
            --rightBottom.y;
    }

    var startCellX = Math.max(leftUp.x, 0),
        startCellY = Math.max(leftUp.y, 0),
        endCellX = Math.min(rightBottom.x, tableSize.x - 1),
        endCellY = Math.min(rightBottom.y, tableSize.y - 1);

    var children = content.children;
    var totalLength = showRect.width * showRect.height;

    // 显示与实际需要的不匹配，全部销毁后重置
    if (totalLength !== children.length) {
        content.removeChildren();
        showRect.setTo(0, 0, 0, 0);
        totalLength = 0;
    }

    // 先移出不需要显示的部分
    var node;
    var yPos, xPos, yEnd, xEnd;
    var childIdx = totalLength - 1;
    for (yPos = showRect.y + showRect.height -1, yEnd = showRect.y; yPos >= yEnd; --yPos) {
        for (xPos = showRect.x + showRect.width - 1, xEnd = showRect.x; xPos >= xEnd; --xPos, --childIdx) {
            if (xPos >= startCellX && xPos <= endCellX &&
                yPos >= startCellY && yPos <= endCellY) 
                continue;
            node = content.removeChildAt(childIdx);
            adapter.revokeCell(node, xPos, yPos);
            self._revokeCell(node);
        }
    }

    var currStartX = Math.max(showRect.x, startCellX),
        currStartY = Math.max(showRect.y, startCellY),
        currEndX = Math.min(showRect.x + showRect.width - 1, endCellX),
        currEndY = Math.min(showRect.y + showRect.height - 1, endCellY);

    // 当前需要显示的宽，高
    var showWidth = endCellX - startCellX + 1,
        showHeight = endCellY - startCellY + 1;
    if (showWidth > 0 && showHeight > 0) {
        childIdx = 0;
        for (yPos = startCellY; yPos <= endCellY; ++yPos) {
            for (xPos = startCellX; xPos <= endCellX; ++xPos, ++childIdx) {
                if (xPos >= currStartX && xPos <= currEndX &&
                    yPos >= currStartY && yPos <= currEndY)
                    continue;
                node = self._createCell();
                if (!node) {
                    continue;
                }
                content.addChildAt(node, childIdx);
                var cellRect = adapter.getCellRect(xPos, yPos);
                self._setCellRect(node, cellRect.x, cellRect.y, cellRect.width, cellRect.height);
                adapter.createCell(node, xPos, yPos);
            }
        }
    }
    showRect.setTo(startCellX, startCellY, showWidth, showHeight);
};

/**
 * 当子节点变化时
 * @private
 */
TableView.prototype._doChildrenChanged = function(event) {
    this._needRebuild = true;
};

TableView.prototype._doLayoutArgumentChanged = function() {
    this._needRebuild = true;
};

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 保持横版或者竖版的组件
 * 在本节点下面的对象都会进行旋转
 * @class qc.Plugins.LockOrientation
 */
var LockOrientation = qc.defineBehaviour('qc.Plugins.LockOrientation', qc.Behaviour, function() {
    var self = this;

    /**
     * @property {int} orientation - 当前是限定为横版还是竖版，有如下取值：
     * Device.AUTO = 0;
     * Device.PORTRAIT = 1;
     * Device.LANDSCAPE = 2;
     */
    self.orientation = self.game.device.orientation;

    // 在PC上默认不启用
    self.desktop = false;

    // 本组件可以在编辑器模式下运行
    self.runInEditor = true;

    self.manualType = 0;
}, {
    orientation: qc.Serializer.INT,
    desktop: qc.Serializer.BOOLEAN,
    manualType: qc.Serializer.INT
});
LockOrientation.__menu = 'Plugins/LockOrientation';

Object.defineProperties(LockOrientation.prototype, {
    orientation: {
        get: function() {
            return this._orientation;
        },
        set: function(v) {
            if (v === this._orientation) return;
            this._orientation = v;
            this._doOrientation(this.game.device.orientation);
        }
    }
});

// 初始化处理，关注横竖版事件并做处理
LockOrientation.prototype.awake = function() {
    var self = this, o = self.gameObject;

    self.addListener(self.game.world.onSizeChange, self._doOrientation, self);
    self.addListener(o.parent.onRelayout, self.assureSize, self);

    // 确保目标节点大小、pivot与世界一致
    self._doOrientation();
    self.assureSize();

    var adapter = o.parent.getScript('qc.ScaleAdapter');

    if (adapter) {
        // 本插件需要重载掉ScaleAdapter，在屏幕宽高缩放时，需要按照旋转后的长宽来获取
        var oldScaleAdapter_getReferenceResolution = adapter.getReferenceResolution;
        adapter.getReferenceResolution = function() {
            var p = oldScaleAdapter_getReferenceResolution.call(this);
            if (self.rotate90) {
                return new qc.Point(p.y, p.x);
            }
            return p;        
        };
    }
};

// 确保和父亲节点的大小保持一致
LockOrientation.prototype.assureSize = function() {
    var self = this, o = self.gameObject;

    var rect = o.parent.rect;
    if (self.rotate90 === true) {
        // 旋转时，对调下长宽，确保和父亲节点重合
        o.width = rect.height;
        o.height = rect.width;
    }
    else {
        o.width = rect.width;
        o.height = rect.height;
    }
    o.setAnchor(new qc.Point(0.5, 0.5), new qc.Point(0.5, 0.5));
    o.anchoredX = 0;
    o.anchoredY = 0;
    o.pivotX = 0.5;
    o.pivotY = 0.5;
};

// 横竖屏发生变化的处理
LockOrientation.prototype._doOrientation = function() {
    var self = this, o = self.gameObject, v = self.game.device.orientation;

    if (!self.desktop && !self.game.editor && self.game.device.desktop) {
        o.rotation = 0;
        self.rotate90 = false;
        return;
    }

    switch (self.orientation) {
    case qc.Device.AUTO:
    default:
        o.rotation = 0;
        self.rotate90 = false;
        return;

    case qc.Device.PORTRAIT:
    case qc.Device.LANDSCAPE:
        if (v === self.orientation) {
            // 一致，就不需要旋转了
            o.rotation = 0;
            self.rotate90 = false;
        }
        else {
            // 不一致，旋转90度
            o.rotation = -Math.PI / 2;
            self.rotate90 = true;
        }
        self.assureSize();
        break;
    }
    var adapter = o.parent.getScript('qc.ScaleAdapter');
    if (adapter) {
        if (self.rotate90) {
            if (self.manualType === qc.ScaleAdapter.MANUAL_WIDTH) {
                adapter.manualType = qc.ScaleAdapter.MANUAL_HEIGHT;
            }
            else if (self.manualType === qc.ScaleAdapter.MANUAL_HEIGHT) {
                adapter.manualType = qc.ScaleAdapter.MANUAL_WIDTH;
            }
            else {
                adapter.manualType = self.manualType;
            }
        }
        else {
            adapter.manualType = self.manualType;
        }
    }
};


/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 负责处理游戏的节点淡入淡出
 * @class qc.NodeFadeInOut
 */
var NodeFadeInOut = qc.defineBehaviour('qc.Plugins.NodeFadeInOut', qc.Tween, function() {
    /**
     * @property {number} fadeType - 淡入淡出类型
     */
    this.fadeType = NodeFadeInOut.FADE_IN;
    /**
     * @property {number} columnCount - 变化的列数
     */
    this.columnCount = 1;
    /**
     * @property {number} rowCount - 变化的列数
     */
    this.rowCount = 1;
    /**
     * @property {number] pivotX - 变化时的原点 x 位置
     */
    this.pivotX = 0.5;
    /**
     * @property {number} pivotY - 变化时的原点 y 坐标
     */
    this.pivotY = 0.5;
    /**
     * @property {number} style - 淡入淡出的类型
     */
    this.fadeStyle = NodeFadeInOut.STYLE_ZOOM;
    /**
     * @property {number} effect - 生效的效果
     */
    this.fadeEffect = NodeFadeInOut.EFFECT_XY;

    /**
     * @property {qc.Node} target - 需要淡入淡出的节点，不设置默认为自身节点
     */
    this.target = null;
}, {
    fadeType : qc.Serializer.NUMBER,
    columnCount : qc.Serializer.NUMBER,
    rowCount : qc.Serializer.NUMBER,
    pivotX : qc.Serializer.NUMBER,
    pivotY : qc.Serializer.NUMBER,
    fadeStyle : qc.Serializer.NUMBER,
    fadeEffect : qc.Serializer.NUMBER,
    target : qc.Serializer.NODE
});
NodeFadeInOut.__menu = 'Plugins/NodeFadeInOut';

Object.defineProperties(NodeFadeInOut.prototype, {
    /**
     * @property {number} columnCount - 分隔的列数
     */
    columnCount : {
        get : function() { return this._columnCount; },
        set : function(v) {
            v = (isNaN(v) || v === 0) ? 1 : v;
            if (v === this._columnCount) {
                return;
            }
            this._columnCount = v;
        }
    },
    /**
     * @property {number} rowCount - 分隔的行数
     */
    rowCount : {
        get : function() { return this._rowCount; },
        set : function(v) {
            v = (isNaN(v) || v === 0) ? 1 : v;
            if (v === this._rowCount) {
                return;
            }
            this._rowCount = v;
        }
    },
    /**
     * @property {qc.Node} _cachedTarget - 缓存的对象
     * @private
     * @readonly
     */
    _cachedTarget : {
        get : function() {
            if (this.target && this.target._destroy) {
                this.target = null;
            }
            return this.target || this.gameObject;
        }
    }
});


/**
 * 生效
 */
NodeFadeInOut.prototype.onEnable = function() {
    var self = this;
    if (self._cachedTarget._destroy) {
        return;
    }
    self._cachedTarget.visible = true;
    if (self._cachedTexture) {
        self._cachedTexture.destroy(true);
        self._cachedTexture = null;
    }
    // 获取缓存信息
    self._cachedBounds = self._cachedTarget.localBounds;
    self._cachedTexture = self._cachedTarget.generateTexture();
    self._cachedSprite = new PIXI.Sprite(self._cachedTexture);
    self._cachedSprite.worldTransform = self._cachedTarget.worldTransform;
    self._cachedTarget.phaser.anchor && (self._cachedSprite.anchor = self._cachedTarget.phaser.anchor);

    // 替换绘制函数
    if (!self._nodeRenderCanvas) {
        self._nodeRenderCanvas = self.gameObject.phaser._renderCanvas;
        self.gameObject.phaser._renderCanvas = self.renderCanvas.bind(this);

        self.gameObject.phaser.getSelfWidth = function() {
            return self._cachedSprite.width;
        };
        self.gameObject.phaser.getSelfHeight = function() {
            return self._cachedSprite.height;
        };
        self.gameObject.phaser._skipChildrenRender = true;
    }

    if (!self._nodeRenderWebGL) {
        self._nodeRenderWebGL = self.gameObject.phaser._renderWebGL;
        self.gameObject.phaser._renderWebGL = self.renderWebGL.bind(this);
    }

    
    // 缓存对象不是自身时，直接隐藏
    //if (this._cachedTarget !== this.gameObject) {
    //    this._cachedTarget.visible = false;
    //}
};

/**
 * 失效
 */
NodeFadeInOut.prototype.onDisable = function() {
    if (this._nodeRenderCanvas) {
        this.gameObject.phaser._renderCanvas = this._nodeRenderCanvas;
        this._nodeRenderCanvas = null;
    }
    if (this._nodeRenderWebGL) {
        this.gameObject.phaser._renderWebGL = this._nodeRenderWebGL;
        this._nodeRenderWebGL = null;
        this.gameObject.phaser.getSelfWidth = null;
        this.gameObject.phaser.getSelfHeight = null;
        this.gameObject.phaser._skipChildrenRender = false;
    }
    if (this._cachedTexture) {
        this._cachedTexture.destroy(true);
        this._cachedTexture = null;
    }
    if (this._cachedSprite) {
        this._cachedSprite = null;
    }
    qc.Tween.prototype.onDisable.call(this);
};

/**
 * 销毁
 */
NodeFadeInOut.prototype.onDestroy = function() {
    if (this._nodeRenderCanvas) {
        this.gameObject.phaser._renderCanvas = this._nodeRenderCanvas;
        this._nodeRenderCanvas = null;
    }
    if (this._nodeRenderWebGL) {
        this.gameObject.phaser._renderWebGL = this._nodeRenderWebGL;
        this._nodeRenderWebGL = null;
    }
    if (this._cachedTexture) {
        this._cachedTexture.destroy(true);
        this._cachedTexture = null;
    }
    if (this._cachedSprite) {
        this._cachedSprite = null;
    }
    if (qc.Tween.prototype.onDestroy)
        qc.Tween.prototype.onDestroy.call(this);
};

// 帧调度: 驱动位置
NodeFadeInOut.prototype.onUpdate = function(factor, isFinished) {
    this._factorValue = this.fadeType === NodeFadeInOut.FADE_IN ? (1 - factor) : factor;
    this.gameObject.phaser.displayChanged(qc.DisplayChangeStatus.TEXTURE | qc.DisplayChangeStatus.SIZE);
    if (isFinished && !this._cachedTarget._destroy && this._cachedTarget === this.gameObject) {
        this._cachedTarget.visible = this.fadeType === NodeFadeInOut.FADE_IN;
    }
};

/**
 * canvas下的绘制
 * @param renderSession
 */
NodeFadeInOut.prototype.renderCanvas = function(renderSession) {
    // 自身不是淡入淡出对象时，绘制自身
    if (this._cachedTarget !== this.gameObject) {
        this._nodeRenderCanvas.call(this.gameObject.phaser, renderSession);
    }

    var texture = this._cachedTexture;
    var sprite = this._cachedSprite;
    var bounds = this._cachedBounds;

    //  Ignore null sources
    if (texture)
    {
        var resolution = texture.baseTexture.resolution / renderSession.resolution;

        renderSession.context.globalAlpha = sprite.worldAlpha;

        //  If smoothingEnabled is supported and we need to change the smoothing property for this texture
        if (renderSession.smoothProperty && renderSession.scaleMode !== texture.baseTexture.scaleMode)
        {
            renderSession.scaleMode = texture.baseTexture.scaleMode;
            renderSession.context[renderSession.smoothProperty] = (renderSession.scaleMode === PIXI.scaleModes.LINEAR);
        }

        //  If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions
        var dx = (texture.trim) ? texture.trim.x - sprite.anchor.x * texture.trim.width : sprite.anchor.x * -texture.frame.width;
        var dy = (texture.trim) ? texture.trim.y - sprite.anchor.y * texture.trim.height : sprite.anchor.y * -texture.frame.height;

        //  Allow for pixel rounding
        if (renderSession.roundPixels)
        {
            renderSession.context.setTransform(
                sprite.worldTransform.a,
                sprite.worldTransform.b,
                sprite.worldTransform.c,
                sprite.worldTransform.d,
                (sprite.worldTransform.tx * renderSession.resolution) | 0,
                (sprite.worldTransform.ty * renderSession.resolution) | 0);
            dx = dx | 0;
            dy = dy | 0;
        }
        else
        {
            renderSession.context.setTransform(
                sprite.worldTransform.a,
                sprite.worldTransform.b,
                sprite.worldTransform.c,
                sprite.worldTransform.d,
                sprite.worldTransform.tx * renderSession.resolution,
                sprite.worldTransform.ty * renderSession.resolution);
        }

        var xStep = texture.crop.width / this.columnCount;
        var yStep = texture.crop.height  / this.rowCount;

        var effectX = this.fadeEffect === NodeFadeInOut.EFFECT_X || this.fadeEffect === NodeFadeInOut.EFFECT_XY;
        var effectY = this.fadeEffect === NodeFadeInOut.EFFECT_Y || this.fadeEffect === NodeFadeInOut.EFFECT_XY;
        var cellShowWidth = (effectX ? (1 - this._factorValue) : 1) * xStep / resolution;
        var cellShowHeight = (effectY ? (1 - this._factorValue) : 1) * yStep / resolution;
        var cellWidth = effectX && this.fadeStyle === NodeFadeInOut.STYLE_CLIP ? xStep * (1 - this._factorValue) : xStep;
        var cellHeight = effectY && this.fadeStyle === NodeFadeInOut.STYLE_CLIP ? yStep * (1 - this._factorValue) : yStep;
        for (var yPos = 0; yPos < texture.crop.height; yPos += yStep) {
            var showY = (dy + yPos + yStep * (effectY ? this._factorValue : 0) * this.pivotY )/ resolution + bounds.y;
            for (var xPos = 0; xPos < texture.crop.width; xPos += xStep) {
                var showX = (dx + xPos + xStep * (effectX ? this._factorValue : 0) * this.pivotX ) / resolution + bounds.x;
                renderSession.context.drawImage(
                    texture.baseTexture.source,
                    texture.crop.x + xPos,
                    texture.crop.y + yPos,
                    cellWidth,
                    cellHeight,
                    showX,
                    showY,
                    cellShowWidth,
                    cellShowHeight);
            }
        }
    }
};

/**
 * webGL 下的绘制
 * @param renderSession
 */
NodeFadeInOut.prototype.renderWebGL = function(renderSession){
    // 自身不是淡入淡出对象时，绘制自身
    if (this._cachedTarget !== this.gameObject) {
        this._nodeRenderWebGL.call(this.gameObject.phaser, renderSession);
    }

    var texture = this._cachedTexture;
    var bounds = this._cachedBounds;
    var sprite = this._cachedSprite;

    var uvs = texture._uvs;
    if (! uvs) return;

    var resolution = texture.baseTexture.resolution / renderSession.resolution;
    var xStep = texture.crop.width / this.columnCount;
    var yStep = texture.crop.height  / this.rowCount;

    var effectX = this.fadeEffect === NodeFadeInOut.EFFECT_X || this.fadeEffect === NodeFadeInOut.EFFECT_XY;
    var effectY = this.fadeEffect === NodeFadeInOut.EFFECT_Y || this.fadeEffect === NodeFadeInOut.EFFECT_XY;
    var cellShowWidth = (effectX ? (1 - this._factorValue) : 1) * xStep / resolution;
    var cellShowHeight = (effectY ? (1 - this._factorValue) : 1) * yStep / resolution;
    var cellWidth = effectX && this.fadeStyle === NodeFadeInOut.STYLE_CLIP ? xStep * (1 - this._factorValue) : xStep;
    var cellHeight = effectY && this.fadeStyle === NodeFadeInOut.STYLE_CLIP ? yStep * (1 - this._factorValue) : yStep;

    var worldTransform = sprite.worldTransform;

    var a = worldTransform.a / resolution;
    var b = worldTransform.b / resolution;
    var c = worldTransform.c / resolution;
    var d = worldTransform.d / resolution;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;
    var uvWith = uvs.x2 - uvs.x0;
    var uvHeight = uvs.y2 - uvs.y0;
    for (var yPos = 0; yPos < texture.crop.height; yPos += yStep) {
        var showY = (yPos + yStep * (effectY ? this._factorValue : 0) * this.pivotY )/ resolution + bounds.y;
        for (var xPos = 0; xPos < texture.crop.width; xPos += xStep) {
            var showX = (xPos + xStep * (effectX ? this._factorValue : 0) * this.pivotX ) / resolution + bounds.x;
            this._webGLAddQuad(renderSession.spriteBatch,sprite,
                showX, showY, showX + cellShowWidth, showY + cellShowHeight,
                uvs.x0 + uvWith * xPos / texture.crop.width,
                uvs.y0 + uvHeight * yPos / texture.crop.height,
                uvs.x0 + uvWith * (xPos + cellWidth) / texture.crop.width,
                uvs.y0 + uvHeight * (yPos + cellHeight) / texture.crop.height,
                a, b, c, d, tx, ty, sprite.tint);
        }
    }
};


// 增加定点
NodeFadeInOut.prototype._webGLAddQuad = function(spriteBatch, sprite, w1, h1, w0, h0, uvx0, uvy0, uvx1, uvy1, a, b, c, d, tx, ty, tint) {
    if(spriteBatch.currentBatchSize >= spriteBatch.size)
    {
        spriteBatch.flush();
        spriteBatch.currentBaseTexture = sprite.texture.baseTexture;
    }

    var colors = spriteBatch.colors;
    var positions = spriteBatch.positions;

    var index = spriteBatch.currentBatchSize * 4 * spriteBatch.vertSize;


    if(spriteBatch.renderSession.roundPixels)
    {
        // xy
        positions[index] = a * w1 + c * h1 + tx | 0;
        positions[index+1] = d * h1 + b * w1 + ty | 0;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx | 0;
        positions[index+6] = d * h1 + b * w0 + ty | 0;

        // xy
        positions[index+10] = a * w0 + c * h0 + tx | 0;
        positions[index+11] = d * h0 + b * w0 + ty | 0;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx | 0;
        positions[index+16] = d * h0 + b * w1 + ty | 0;
    }
    else
    {
        // xy
        positions[index] = a * w1 + c * h1 + tx;
        positions[index+1] = d * h1 + b * w1 + ty;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx;
        positions[index+6] = d * h1 + b * w0 + ty;

        // xy
        positions[index+10] = a * w0 + c * h0 + tx;
        positions[index+11] = d * h0 + b * w0 + ty;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx;
        positions[index+16] = d * h0 + b * w1 + ty;
    }
    // uv
    positions[index+2] = uvx0;
    positions[index+3] = uvy0;

    // uv
    positions[index+7] = uvx1;
    positions[index+8] = uvy0;

    // uv
    positions[index+12] = uvx1;
    positions[index+13] = uvy1;

    // uv
    positions[index+17] = uvx0;
    positions[index+18] = uvy1;

    // color and alpha
    colors[index+4] = colors[index+9] = colors[index+14] = colors[index+19] = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.worldAlpha * 255 << 24);

    // increment the batchsize
    spriteBatch.sprites[spriteBatch.currentBatchSize++] = sprite;
};

/**
 * 淡入
 * @constant
 * @type {number}
 */
NodeFadeInOut.FADE_IN = 0;

/**
 * 淡出
 * @constant
 * @type {number}
 */
NodeFadeInOut.FADE_OUT = 1;

/**
 * 缩放淡入淡出
 * @constant
 * @type {number}
 */
NodeFadeInOut.STYLE_ZOOM = 0;

/**
 * 裁切淡入淡出
 * @constant
 * @type {number}
 */
NodeFadeInOut.STYLE_CLIP = 1;

/**
 * x,y轴同时变化
 * @constant
 * @type {number}
 */
NodeFadeInOut.EFFECT_XY = 0;
/**
 * x轴变化
 * @constant
 * @type {number}
 */
NodeFadeInOut.EFFECT_X = 1;
/**
 * y轴变化
 * @constant
 * @type {number}
 */
NodeFadeInOut.EFFECT_Y = 2;
/**
 * @author chenx
 * @date 2015.11.13
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * tween 回调函数
 * @class qc.TweenFunction
 */
var TweenFunction = qc.defineBehaviour('qc.TweenFunction', qc.Tween, function() {
    var self = this;

    /**
     * @property {string} func - 回调函数名
     */
    self.funcName = '';

    /**
     * @property {function} _func - 回调函数
     */
    self.func = null;

    // 回调函数的属主
    self.funcContext = null;

    // 默认情况下不可用
    self.enable = false;
},{
    funcName: qc.Serializer.STRING
});

// 菜单上的显示
TweenFunction.__menu = 'Plugins/TweenFunction';

Object.defineProperties(TweenFunction.prototype, {
    funcName: {
        get: function() { return this._funcName; },
        set: function(v) {
            if (v === this._funcName) return;

            this._funcName = v;
            this.onEnable();
        }
    }
});

// 组件 enabled
// gameObject 所有脚本挂载完后，才调用该接口，在此处将函数名转换成函数
TweenFunction.prototype.onEnable = function() {

    if (this._funcName.length <= 0)
        return;

    // 遍历 gameObject 及其所有的 scripts，查找回调函数
    this.func = this.gameObject[this._funcName];
    var classList = [];
    if (this.func)
    {
        // 记录存在该函数名的类名
        classList.push(this.gameObject.class);
        this.func = this.func.bind(this.gameObject);
        //this.funcContext = this.gameObject;
    }

    var self = this;
    this.gameObject.scripts.forEach(function(scriptOb) {
        var func = scriptOb[self._funcName];
        if (func)
        {
            // 记录存在该函数名的类名
            classList.push(scriptOb.class);
            self.func = func.bind(scriptOb);
            //this.funcContext = scriptOb;
        }
    });

    if (!self.func && this.enable)
        this.game.log.important('TweenFunction({0}) not find!', this._funcName);

    if (classList.length <= 1)
        return;

    // 存在多个相同名字的函数，提示错误
    self.game.log.error('Error: Exist multi functions with same name: {0}', classList);

    if (self.game.device.editor === true)
    {
        // 在编辑器中，弹出错误提示框
        var G = window.parent && window.parent.G;
        if (G)
        {
            var str = G._('TweenFunction func error') + classList;
            G.notification.error(str);
        }
    }
};


// 帧调度
TweenFunction.prototype.onUpdate = function(factor, isFinished) {
    if (typeof(this.func) != 'function')
        return;

    if (this.duration == 0 && !isFinished)
        // 表示该回调只在完成的调用一次
        return;

    // 调用回调函数
    this.func(factor, this.duration);
};

/**
 * 开始变化
 * @param node {qc.Node} - 需要改变的节点
 * @param duration {number} - 经历的时间
 * @param funcName {string} - 回调函数名
 * @returns {qc.TweenFunction}
 */
TweenFunction.begin = function(node, duration, funcName) {
    var tween = qc.Tween.begin('qc.TweenFunction', node, duration);
    tween.funcName = funcName;

    return tween;
};

// define a user behaviour
var BackgroundController = qc.defineBehaviour('qc.engine.BackgroundController', qc.Behaviour, function() {
	this.speed = 100;
	this.rightrigidbody = null;
	this.leftrigidbody = null;
	this.itemrigidbody = null;
	this.expressrigidbody = null;
	this.respeed = 0;
}, {
	speed: qc.Serializer.NUMBER,
	left: qc.Serializer.NODE,
	right: qc.Serializer.NODE,
	background1: qc.Serializer.NODE,
	background2: qc.Serializer.NODE,
	background3: qc.Serializer.NODE,
});

BackgroundController.prototype.awake = function() {
	var self = this;
	ExpressGame.backgroundController = self.getScript('qc.engine.BackgroundController');

	self.leftrigidbody = self.left.getScript('qc.arcade.RigidBody');
	self.rightrigidbody = self.right.getScript('qc.arcade.RigidBody');

	self.leftrigidbody.velocity.x = 0;
	self.leftrigidbody.velocity.y = this.speed;
	self.rightrigidbody.velocity.x = 0;
	self.rightrigidbody.velocity.y = this.speed;
//	self.background1.getScript('qc.arcade.RigidBody').velocity.x = 0;
//	self.background1.getScript('qc.arcade.RigidBody').velocity.y = this.speed;
//	self.background2.getScript('qc.arcade.RigidBody').velocity.x = 0;
//	self.background2.getScript('qc.arcade.RigidBody').velocity.y = this.speed;
//	self.background3.getScript('qc.arcade.RigidBody').velocity.x = 0;
//	self.background3.getScript('qc.arcade.RigidBody').velocity.y = this.speed;

};

BackgroundController.prototype.update = function() {
	var self = this;

	if (ExpressGame.refresh) { //刷新速度
		self.leftrigidbody.velocity.y = self.speed;
		self.rightrigidbody.velocity.y = self.speed;
//		self.background1.getScript('qc.arcade.RigidBody').velocity.y = this.speed;
//		self.background2.getScript('qc.arcade.RigidBody').velocity.y = this.speed;
//		self.background3.getScript('qc.arcade.RigidBody').velocity.y = this.speed;
	}

};
BackgroundController.prototype.pause = function() { //暂停
	var self = this;
	self.respeed = self.speed;
	self.speed = 0;
};
BackgroundController.prototype.play = function() { //播放
	var self = this;
	self.speed = self.respeed;
	ExpressGame.refresh = true;

};
// 敌人车
var Car = qc.defineBehaviour('qc.engine.Car', qc.Behaviour, function() {
	this.rigidbody = null;
	this.id = 0;
	this.name = 'Car';
	this.speed = 200;
	this.csore = 0; //分数
	this.money = 0; //金币
	this.lv = 1;
	this.ico = null;
	this.respeed = 0;//速度暂停

}, {
	id: qc.Serializer.NUMBER,
	name: qc.Serializer.STRING,
	speed: qc.Serializer.NUMBER,
	csore: qc.Serializer.NUMBER,
	money: qc.Serializer.NUMBER,
	lv: qc.Serializer.NUMBER,
	ico: qc.Serializer.TEXTURE,
	minwidth: qc.Serializer.NODE,
	maxwidth: qc.Serializer.NODE,
});

Car.prototype.awake = function() {
	var self = this;
	self.rigidbody = self.getScript('qc.arcade.RigidBody');
	
	var value = self.game.math.random(self.minwidth.anchoredX+self.gameObject.width/2, self.maxwidth.anchoredX-self.gameObject.width/2);
	self.gameObject.anchoredX = value;
	self.gameObject.anchoredY = -200;
	self.rigidbody.velocity.x = 0;
	self.rigidbody.velocity.y = self.speed+ExpressGame.backgroundController.speed;
	if (this.ico != null)
		this.load();
};

Car.prototype.update = function() {
if(ExpressGame.refresh){
	var self = this;
	self.rigidbody.velocity.y = self.speed+ExpressGame.backgroundController.speed;
}
};

Car.prototype.load = function() {
	var self = this;
	self.gameObject.texture = self.ico;
};

Car.prototype.pause = function() {
	var self = this;
	
	self.respeed=self.speed;
	self.speed=self.speed/10;
};
Car.prototype.play = function() {
	var self = this;
	self.speed=self.respeed;
};
//快递
var Express = qc.defineBehaviour('qc.engine.Express', qc.Behaviour, function() {
	this.rigidbody = null;
	this.id = 0;
	this.name = 'Express';
	this.money = 0;
	this.csore = 0;
	this.type = 0; //0,1,2,3
	this.ico = null;
	this.items = null;
	this.speed = 0;
}, {
	id: qc.Serializer.NUMBER,
	name: qc.Serializer.STRING,
	money: qc.Serializer.NUMBER,
	csore: qc.Serializer.NUMBER,
	type: qc.Serializer.NUMBER,
	ico: qc.Serializer.TEXTURE,
	items: qc.Serializer.NODES,
	minwidth: qc.Serializer.NODE,
	maxwidth: qc.Serializer.NODE,
});

Express.prototype.awake = function() {
	var self = this;
	self.rigidbody = self.getScript('qc.arcade.RigidBody');

	var value = self.game.math.random(self.minwidth.anchoredX + self.gameObject.width / 2, self.maxwidth.anchoredX - self.gameObject.width / 2);
	self.gameObject.anchoredX = value;
	self.gameObject.anchoredY = -200;
	self.rigidbody.velocity.x = 0;
	self.rigidbody.velocity.y = self.speed + ExpressGame.backgroundController.speed;
	if (this.ico != null)
		this.load();
};

Express.prototype.update = function() {

	if (ExpressGame.refresh) {
		var self = this;
		self.rigidbody.velocity.y = self.speed + ExpressGame.backgroundController.speed;
	}
};

Express.prototype.load = function() {
	var self = this;
	self.gameObject.texture = self.ico;
};

//移除快递
Express.prototype.outExpress = function(v) {
	//
	var script = v.getScript('qc.engine.Courier');
	script.csoreChange(-this.csore / 2);
	script.moneyChange(-this.money / 2);
	this.destroy();
};
//投放快递
Express.prototype.inExpress = function(v) {
	//
	var script = v.getScript('qc.engine.Courier');
	script.csoreChange(this.csore);
	script.moneyChange(this.money);
	ExpressGame.gameController.refreshexpress();
	this.destroy();
};
// 房子
var House = qc.defineBehaviour('qc.engine.House', qc.Behaviour, function() {
    this.id=0;
	this.name = 'House';
	this.type = 1;//房类型
	this.height = 0;
	this.ico=null;
}, {
    id: qc.Serializer.NUMBER,
	name: qc.Serializer.STRING,
	type: qc.Serializer.NUMBER,
	height: qc.Serializer.NUMBER,
	ico: qc.Serializer.TEXTURE,
});


House.prototype.awake = function() {

};

House.prototype.update = function() {

};

// define a user behaviour
var Item = qc.defineBehaviour('qc.engine.Item', qc.Behaviour, function() {
	this.id = 0;
	this.name = 'item';
	this.money = 0;
	this.csore = 0;
	this.skill = 0;
	this.type = ''; //
	this.ico = null;
}, {
	id: qc.Serializer.NUMBER,
	name: qc.Serializer.STRING,
	money: qc.Serializer.NUMBER,
	csore: qc.Serializer.NUMBER,
	skill: qc.Serializer.NUMBER,
	type: qc.Serializer.STRING,
	ico: qc.Serializer.TEXTURE,
});

Item.prototype.awake = function() {

};

Item.prototype.update = function() {

};
//捡起物品
Item.prototype.getItem = function(courier) {
	var script = courier.getScript('qc.engine.Courier');
	script.items.add(this);
};
//移除物品
Item.prototype.outItem = function() {
	this.destroy();
};
// define a user behaviour
var Player = qc.defineBehaviour('qc.engine.Player', qc.Behaviour, function() {
	this.id=0;
	this.name = 'Player';
	this.speed = 200;
	this.type = 'car';//车类型
	this.csore = 0; //分数
	this.money = 0;
	this.maxSkill = 100; //技能能量
	this.lv = 1;
	this.ico=null;
}, {
	id: qc.Serializer.NUMBER,
	name: qc.Serializer.STRING,
	speed: qc.Serializer.NUMBER,
	type: qc.Serializer.STRING,
	csore: qc.Serializer.NUMBER,
	money: qc.Serializer.NUMBER,
	maxSkill: qc.Serializer.NUMBER,
	lv: qc.Serializer.NUMBER,
	ico: qc.Serializer.TEXTURE,
});

Player.prototype.awake = function() {

};

Player.prototype.update = function() {

};


// define a user behaviour
var Touch = qc.defineBehaviour('qc.engine.Touch', qc.Behaviour, function() {
	this.rigidbody = null;
	this.id = 0;
	this.name = 'Express';
	this.money = 0;
	this.csore = 0;
	this.type = 0; //0,1,2,3
	this.ico = null;
}, {
	id: qc.Serializer.NUMBER,
	name: qc.Serializer.STRING,
	money: qc.Serializer.NUMBER,
	csore: qc.Serializer.NUMBER,
	type: qc.Serializer.NUMBER,
	ico: qc.Serializer.TEXTURE,
});


Touch.prototype.awake = function() {
	var self = this;
	if (this.ico != null)
		this.load();

};

Touch.prototype.update = function() {
	var self = this;
	if (self.gameObject.getWorldPosition().y > 1000) {
		//         console.log(self.gameObject);
		self.gameObject.destroy();
	}
};

Touch.prototype.load = function() {
	var self = this;
	self.gameObject.texture = self.ico;
};


//移除快递
Touch.prototype.outExpress = function(v) {
	//
	var script = v.getScript('qc.engine.Courier');
	script.csoreChange(-this.csore / 2);
	script.moneyChange(-this.money / 2);


	this.destroy();
};
//投放快递
Touch.prototype.inExpress = function(v) {
	//
	var script = v.getScript('qc.engine.Courier');
	script.csoreChange(this.csore);
	script.moneyChange(this.money);
	switch (this.type) {
		case 1:
			ExpressGame.gameController.express1--;
			break;
		case 2:
			ExpressGame.gameController.express2--;
			break;
		case 3:
			ExpressGame.gameController.express3--;
			break;
		default:
			break;
	}
	ExpressGame.gameController.refreshexpress();
};
window.ExpressGame = qc.ExpressGame = {
	//游戏界面切换
	uiManager: null,
	gameController: null,//主要游戏控制
	carController: null,//路面汽车控制
	backgroundController: null,//背景控制
	courierController: null,//快递员控制
	expressController: null,//快递控制
	uiController: null,//界面控制
	refresh: false, //刷新开关
	speedbugclean: false, //某bug的刷新开关（未知原因

};
qc.initGame = function(game) {
	ExpressGame.game = game;
};
/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 场景加载的进度提示界面
 */
var LoadingUI = qc.defineBehaviour('qc.engine.LoadingUI', qc.Behaviour,
    function() {
        this.clue = null;
    },
    {
        // 需要序列化的字段
        clue: qc.Serializer.NODE
    }
);

// 初始化处理
LoadingUI.prototype.awake = function() {
    // 关注场景开始切换和切换结束的事件
    var self = this;
    this.addListener(self.game.scene.onStartLoad, function() {
        // 场景加载开始，显示本界面
        self.show();
    });
    this.addListener(self.game.scene.onEndLoad, function() {
        // 场景加载完毕，隐藏本界面
        if (self.gameObject.visible) {
            if (self.duringTween)
                self.nextChange = 1;
            else
                self.hide();
        }
    });
};

// 帧调度，保证本界面永远在其他界面之上
LoadingUI.prototype.update = function() {
    var self = this,
        loaded = self.game.assets.loaded,
        total = self.game.assets.total;
    if (total) {
        self.clue.text = '加载中：' + loaded + '/' + total;
    }
    else {
        self.clue.text = '';
    }
    // 扔到最后面去
    self.gameObject.parent.setChildIndex(this.gameObject, self.gameObject.parent.children.length - 1);
};

// 开始显示本界面
LoadingUI.prototype.show = function() {
    var self = this,
        fadeInOut = self.gameObject.getScript('qc.Plugins.NodeFadeInOut');

    self.gameObject.visible = true;
    self.gameObject.alpha = 0;
    fadeInOut.stop();
    fadeInOut.enable = false;
    fadeInOut.target = self.gameObject.game.world;
    fadeInOut.fadeType = NodeFadeInOut.FADE_OUT;
    fadeInOut.fadeStyle = this.getRandomInt(0, 2);
    fadeInOut.fadeEffect = this.getRandomInt(0, 3);
    fadeInOut.pivotX = Math.random(0, 1);
    fadeInOut.pivotY = Math.random(0, 1);
    fadeInOut.columnCount = this.getRandomInt(1, 32);
    fadeInOut.rowCount = this.getRandomInt(1, 32);
    fadeInOut.resetToBeginning();
    fadeInOut.playForward();
    self.gameObject.alpha = 1;
    self.duringTween = true;
    fadeInOut.onFinished.addOnce(function() {
        self.duringTween = false;
        if (self.nextChange) {
            self.hide();
            self.nextChange = 0;
        }
    });
};

// 结束显示本页面，加载完毕了
LoadingUI.prototype.hide = function() {
    var self = this,
        fadeInOut = self.gameObject.getScript('qc.Plugins.NodeFadeInOut');

    self.gameObject.alpha = 1;
    fadeInOut.enable = false;
    fadeInOut.target = null;
    fadeInOut.fadeType = NodeFadeInOut.FADE_OUT;
    fadeInOut.fadeStyle = this.getRandomInt(0, 2);
    fadeInOut.fadeEffect = this.getRandomInt(0, 3);
    fadeInOut.pivotX = Math.random(0, 1);
    fadeInOut.pivotY = Math.random(0, 1);
    fadeInOut.columnCount = this.getRandomInt(1, 32);
    fadeInOut.rowCount = this.getRandomInt(1, 32);
    fadeInOut.resetToBeginning();
    fadeInOut.playForward();
    self.duringTween = true;
    fadeInOut.onFinished.addOnce(function() {
        self.gameObject.visible = false;
        self.duringTween = false;
        self.nextChange = 0;
    });
};

LoadingUI.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// define a user behaviour
var AutoBackgroundMove = qc.defineBehaviour('qc.engine.AutoBackgroundMove', qc.Behaviour, function() {

	this.speed = 100;
	this.times = 60000;
	this.maxvalue = 0;

}, {
	speed: qc.Serializer.NUMBER,
	times: qc.Serializer.NUMBER,
	maxvalue: qc.Serializer.NUMBER,
});

AutoBackgroundMove.prototype.awake = function() {
	this.speed = ExpressGame.backgroundController.speed;
};

AutoBackgroundMove.prototype.update = function() {
	if (ExpressGame.speedbugclean) {
	this.times = 60000/2;
	}
	if (ExpressGame.refresh) {
		this.speed = ExpressGame.backgroundController.speed;
	}
	this.gameObject.verticalNormalizedPosition = this.gameObject.verticalNormalizedPosition - this.speed / this.times;
	if (this.gameObject.verticalNormalizedPosition <= -this.maxvalue) {
		this.gameObject.verticalNormalizedPosition = 1;
		ExpressGame.gameController.player.getScript('qc.engine.Courier').csoreChange(100);
		ExpressGame.gameController.player.getScript('qc.engine.Courier').expChange(10 * ExpressGame.gameController.rank);
	}

};
// define a user behaviour
var AutoBackgroundOnCollide = qc.defineBehaviour('qc.engine.AutoBackgroundOnCollide', qc.Behaviour, function() {

}, {

});

AutoBackgroundOnCollide.prototype.awake = function() {

};

AutoBackgroundOnCollide.prototype.update = function() {

};

AutoBackgroundOnCollide.prototype.onCollide = function(o1, o2) {
	o2.top=-960;
	o2.bottom=960;
}
// define a user behaviour
var AutoHouseLoadOnCollide = qc.defineBehaviour('qc.engine.AutoHouseLoadOnCollide', qc.Behaviour, function() {

	this.bl = 0;
}, {
	bl: qc.Serializer.NUMBER,
});

AutoHouseLoadOnCollide.prototype.awake = function() {

	var self = this;
	//         console.log(self.gameObject.getWorldPosition().y);
};

AutoHouseLoadOnCollide.prototype.update = function() {
	var self = this;
	if (self.gameObject.getWorldPosition().y > -200 && self.bl == 0) {
		var randomnumber = self.game.math.random(1, 7);
		var type = 'Assets/prefab/house/house' + randomnumber + '.bin';
		self.game.assets.load('house', type, function(asset) {
			var prefabAsset = self.game.assets.find('house');
			var bullet = self.game.add.clone(prefabAsset, self.gameObject.parent);
			bullet.anchoredY = self.gameObject.anchoredY - bullet.height;
			// 			self.getScript('qc.arcade.RigidBody').velocity.y = 0.1;
		});
		self.bl = 1;
	}
	if (self.gameObject.getWorldPosition().y > 1000) {
		//         console.log(self.gameObject);
		self.gameObject.destroy();
	}
};


// AutoHouseLoadOnCollide.prototype.onCollide = function(o1, o2) {
// 	var self = this;
// 	if (o2.name == 'topout') {
// 		var randomnumber = self.game.math.random(1, 7);
// 		var type = 'Assets/prefab/house/house' + randomnumber + '.bin';
// 		self.game.assets.load('house', type, function(asset) {
// 			var prefabAsset = self.game.assets.find('house');
// 			o1.getScript('qc.arcade.RigidBody').removeCollide(o2);
// 			var bullet = self.game.add.clone(prefabAsset, o1.parent);
// 			bullet.anchoredY = o1.anchoredY - bullet.height;
// 			o1.getScript('qc.arcade.RigidBody').velocity.y = 0.1;
// 		});
// 	} else if (o2.name == 'buttomout') {
// 		o1.destroy();
// 	}
// }
// define a user behaviour
var AutoTouchLoad = qc.defineBehaviour('qc.engine.AutoTouchLoad', qc.Behaviour, function() {

	this.touchvalue = 1; //下次生成的点击序列号
	this.touchdelay = 4; //延迟秒数生成点击
	this.maxtype = 3; //最大快递序列号
	this.left = null;
	this.right = null;
}, {

	touchvalue: qc.Serializer.NUMBER,
	touchdelay: qc.Serializer.NUMBER,
	left: qc.Serializer.NODE,
	right: qc.Serializer.NODE,
});

AutoTouchLoad.prototype.awake = function() {
	this.touchvalue = this.game.math.random(1, this.maxtype);
	var t = this.game.timer.loop(this.touchdelay * 1000, function() {
		var self = this;
		self.createtouch();
	}, this);
};

AutoTouchLoad.prototype.update = function() {

};

AutoTouchLoad.prototype.createtouch = function() {
	var self = this;
	var type = 'Assets/prefab/express/touch' + this.touchvalue + '.bin';
	self.game.assets.load('touch', type, function(asset) {
		var prefabAsset = self.game.assets.find('touch');
		var rd = self.game.math.random(1, 2);
		switch (rd) {
			case 1:
				var bullet = self.game.add.clone(prefabAsset, self.left);
			    bullet.anchoredY = self.gameObject.anchoredY;
				break;
			case 2:
				var bullet = self.game.add.clone(prefabAsset, self.right);
			    bullet.anchoredY = self.gameObject.anchoredY;
				break;
			default:
				var bullet = self.game.add.clone(prefabAsset, self.left);
			    bullet.anchoredY = self.gameObject.anchoredY;
		}
	});
	this.touchvalue = self.game.math.random(1, this.maxtype);
};
// define a user behaviour
var CarOnCollide = qc.defineBehaviour('qc.engine.CarOnCollide', qc.Behaviour, function() {
	// need this behaviour be scheduled in editor
	//this.runInEditor = true;
}, {
	// fields need to be serialized
});

// Called when the script instance is being loaded.
//CarOnCollide.prototype.awake = function() {
//
//};

// Called every frame, if the behaviour is enabled.
//CarOnCollide.prototype.update = function() {
//
//};

CarOnCollide.prototype.onCollide = function(o1, o2) {
	var self = this;
	if (o2.name == "Courier") {
		ExpressGame.gameController.gamepause();
		ExpressGame.refresh = true;
		self.game.timer.add(1000, function() {
			ExpressGame.refresh = false;
		}, self);
		var type = 'Assets/prefab/effect/boom' + '.bin';
		self.game.assets.load('boom', type, function(asset) {
			var prefabAsset = self.game.assets.find('boom');
			var bullet = self.game.add.clone(prefabAsset, ExpressGame.gameController.player);
		}, this);
		this.game.timer.add(1500, function() {
			ExpressGame.gameController.death();
		}, this);
		self.getScript('qc.engine.CarOnCollide').destroy();
	}
};
// define a user behaviour
var DestoryOnCollide = qc.defineBehaviour('qc.engine.DestoryOnCollide', qc.Behaviour, function() {
	// need this behaviour be scheduled in editor
	//this.runInEditor = true;
}, {
	// fields need to be serialized
});


DestoryOnCollide.prototype.onCollide = function(o1, o2) {
	if (o2.name == "buttomout")
		o1.destroy();
}
// define a user behaviour
var ExpressOnCollide = qc.defineBehaviour('qc.engine.ExpressOnCollide', qc.Behaviour, function() {
	// need this behaviour be scheduled in editor
	//this.runInEditor = true;
}, {
	// fields need to be serialized
});

// Called when the script instance is being loaded.
ExpressOnCollide.prototype.awake = function() {

};

// Called every frame, if the behaviour is enabled.
ExpressOnCollide.prototype.update = function() {

};

ExpressOnCollide.prototype.onCollide = function(o1, o2) {
	var self = this;
	if (o2.name == "Courier") {
		switch (self.getScript('qc.engine.Express').type) {
			case 1:
				ExpressGame.gameController.express1 += 1;
				ExpressGame.gameController.expressadd(1, 0, 0);
				break;
			case 2:
				ExpressGame.gameController.express2 += 1;
				ExpressGame.gameController.expressadd(0, 1, 0);
				break;
			case 3:
				ExpressGame.gameController.express3 += 1;
				ExpressGame.gameController.expressadd(0, 0, 1);
				break;
			default:
				break;
		}
		this.game.timer.add(300, function() {
			ExpressGame.gameController.refreshexpress();
		}, this);

		var type = 'Assets/prefab/effect/kirakira' + '.bin';
		self.game.assets.load('kirakira', type, function(asset) {
			var prefabAsset = self.game.assets.find('kirakira');
			var bullet = self.game.add.clone(prefabAsset, o1.parent);
			bullet.x = self.gameObject.x;
			bullet.y = self.gameObject.y;
			var sc = bullet.addScript('qc.arcade.RigidBody');
			sc.velocity.y = ExpressGame.backgroundController.speed;
			self.game.timer.add(1000, function() {
				bullet.destroy();
			}, self);

		});
		o1.destroy();
	}
};
// define a user behaviour
var loadGame = qc.defineBehaviour('qc.engine.loadGame', qc.Behaviour, function() {
	// need this behaviour be scheduled in editor
	//this.runInEditor = true;
}, {
	// fields need to be serialized
});

// Called when the script instance is being loaded.
loadGame.prototype.awake = function() {
	var self = this;
	self.game.timer.add(5, function() {

		self.game.world.find('Loading').destroy();
		self.game.scene.load('test1', true, function() {

			self.game.assets.load('csore', 'Assets/atlas/texiao.bin');
			//	    self.game.world.find('Loading').visible = true;
			self.game.assets.load('csore', 'Assets/atlas/csore.bin');
			self.game.assets.load('turn_secen', 'Assets/atlas/turn_secen.bin');
			self.game.assets.load('housecar', 'Assets/atlas/housecar.bin');

			self.game.assets.load('express', 'Assets/prefab/express/express1.bin');
			self.game.assets.load('express', 'Assets/prefab/express/express2.bin');
			self.game.assets.load('express', 'Assets/prefab/express/express3.bin');
			self.game.assets.load('touch', 'Assets/prefab/express/touch1.bin');
			self.game.assets.load('touch', 'Assets/prefab/express/touch2.bin');
			self.game.assets.load('touch', 'Assets/prefab/express/touch3.bin');
			self.game.assets.load('car', 'Assets/prefab/enemy/car1.bin');
			self.game.assets.load('car', 'Assets/prefab/enemy/car2.bin');
			self.game.assets.load('car', 'Assets/prefab/enemy/car3.bin');
			self.game.assets.load('car', 'Assets/prefab/enemy/car4.bin');
			self.game.assets.load('car', 'Assets/prefab/enemy/car5.bin');
		}, function() {


		});
	}, self);
};

// Called every frame, if the behaviour is enabled.
//loadGame.prototype.update = function() {
//
//};
//快递员
var Courier = qc.defineBehaviour('qc.engine.Courier', qc.Behaviour, function() {
	this.id = 0;
	this.name = 'Courier';
	this.speed = 600;
	this.csore = 0; //分数
	this.money = 0; //金钱
	this.exp = 0; //经验
	this.skill = 0; //技能能量
	this.maxSkill = 100; //技能能量
	this.lv = 1;
	this.ico = null;
}, {
	id: qc.Serializer.NUMBER,
	name: qc.Serializer.STRING,
	speed: qc.Serializer.NUMBER,
	csore: qc.Serializer.NUMBER,
	money: qc.Serializer.NUMBER,
	exp: qc.Serializer.NUMBER,
	skill: qc.Serializer.NUMBER,
	maxSkill: qc.Serializer.NUMBER,
	lv: qc.Serializer.NUMBER,
	ico: qc.Serializer.TEXTURE
});

Courier.prototype.awake = function() {

};

Courier.prototype.update = function() {

};

Courier.prototype.speedChange = function(v) {
	if (this.speed + v > 2000)
		this.speed = 2000;
	else if (this.speed + v < 0)
		this.speed = 0;
	else
		this.speed = this.speed + v;
};

Courier.prototype.skillChange = function(v) {
	if (this.skill + v > this.maxSkill)
		this.skill = this.maxSkill;
	else if (this.skill + v < 0)
		this.skill = 0;
	else
		this.skill = this.skill + v;
};

Courier.prototype.csoreChange = function(v) {
	if (this.csore + v < 0)
		this.csore = 0;
	else
		this.csore = this.csore + v;
};

Courier.prototype.expChange = function(v) {
	if (this.exp + v < 0)
		this.exp = 0;
	else
		this.exp = this.exp + v;
};

Courier.prototype.moneyChange = function(v) {
	if (this.money + v < 0)
		this.money = 0;
	else
		this.money = this.money + v;
};
//升级
Courier.prototype.levelup = function(level) {
	this.speed = this.speed + 30 * level;
	this.csore = this.csore + 100 * level;
	this.level = this.level + level;
};
//死亡
Courier.prototype.death = function() {
	this.speed = 0;
	//时间停止
};
//被碰撞
Courier.prototype.damage = function(v) {

};
//投快递
Courier.prototype.express = function(v) {

};
// define a user behaviour
var CarController = qc.defineBehaviour('qc.engine.CarController', qc.Behaviour, function() {

	this.bulletRoot = null;
	this.nowcar = null;
	this.value = 1; //下次生成的车子序列号
	this.delay = 5; //延迟秒数生成车
	this.maxtype = 3; //最大车序列号
	this.carcreatetimer = null;
	this.count = 0;
	this.isplay = true;
}, {
	bulletRoot: qc.Serializer.NODE,
	nowcar: qc.Serializer.PREFAB,
	value: qc.Serializer.NUMBER,
	delay: qc.Serializer.NUMBER,
	maxtype: qc.Serializer.NUMBER,
});

CarController.prototype.awake = function() {
	//	this.carcreatetimer = this.game.timer.loop(this.delay * 1000, function() {
	//		var self = this;
	//		self.createcar();
	//	}, this);
	this.value = this.game.math.random(1, this.maxtype);
	ExpressGame.carController = this.getScript('qc.engine.CarController');
};

CarController.prototype.update = function() {

	//	if (ExpressGame.refresh) { //刷新速度
	//		var self = this;
	//		this.game.timer.remove(this.carcreatetimer);
	//		this.carcreatetimer = this.game.timer.loop(this.delay * 1000, function() {
	//			var self = this;
	//			self.createcar();
	//		}, this);
	//	}
	if (this.isplay) {
		if (this.count > this.delay * 1000) {
			this.createcar();
			this.count -= this.delay * 1000;
		}
		this.count += this.game.time.deltaTime;
	}
};

CarController.prototype.createcar = function() {
	var self = this;
	var type = 'Assets/prefab/enemy/car' + this.value + '.bin';
	self.game.assets.load('car', type, function(asset) {
		var prefabAsset = self.game.assets.find('car');
		var bullet = self.game.add.clone(prefabAsset, self.bulletRoot);
	});
	this.value = self.game.math.random(1, self.maxtype);
};

CarController.prototype.pause = function() {
	var self = this;
//	var arr = self.bulletRoot.children;
//	for (var i = 0; i < arr.length; i++) {
//		arr[i].getScript('qc.engine.Car').pause();
//	}
	self.isplay=false;

};

CarController.prototype.play = function() {
	var self = this;
//	var arr = self.bulletRoot.children;
//	for (var i = 0; i < arr.length; i++) {
//		arr[i].getScript('qc.engine.Car').play();
//	}
	self.isplay=true;

};
// define a user behaviour
var CourierController = qc.defineBehaviour('qc.engine.CourierController', qc.Behaviour, function() {
	this.rigidbody = null;
	this.player = null;
	this.angle = 5; //角度
	this.tinyangle = 0.1; //偏移角度
	this.type = 0; //记录移动类型
	this.isplay = true;
	this.reVelocityx = 0; //记录暂停用的横轴移速
	this.reVelocityy = 0; //记录暂停用的纵轴移速
	this.startmoveX = 0;
	this.startmoveY = 0;
}, {
	angle: qc.Serializer.NUMBER,
	tinyangle: qc.Serializer.NUMBER,
});

CourierController.prototype.awake = function() {
	var self = this,
		input = self.game.input;
	self.rigidbody = self.getScript('qc.arcade.RigidBody');
	self.player = self.getScript('qc.engine.Courier');
	self.game.input.onPointerDown.add(this.onPointerDown, this);
	self.game.input.onPointerUp.add(this.onPointerUp, this);
	self.game.input.onPointerMove.add(this.onPointerMove, this);
	self.game.input.onKeyUp.add(this.onKeyUp, self);
	ExpressGame.courierController = self.getScript('qc.engine.CourierController');
};
CourierController.prototype.onKeyUp = function(keyCode, charCode) {
	if (keyCode == 39 || keyCode == 37) {
		this.type = 0;
	}
}
CourierController.prototype.update = function() {

	var self = this;

	if (self.isplay) { //非暂停

		if (self.game.input.isKeyDown(qc.Keyboard.LEFT)) {
			self.type = -1;
		} else if (self.game.input.isKeyDown(qc.Keyboard.RIGHT)) {
			self.type = 1;
		}
		if (self.type == -1) { //left

			if (self.gameObject.rotation > -self.game.math.degToRad(self.angle)) {
				self.gameObject.rotation -= self.tinyangle;
				self.rigidbody.velocity.x -= self.player.speed / 20;
			} else {
				self.gameObject.rotation = self.game.math.degToRad(-self.angle);
				self.rigidbody.velocity.x = -self.player.speed;
			}
		}
		if (self.type == 1) { //right
			if (self.gameObject.rotation < self.game.math.degToRad(self.angle)) {
				self.gameObject.rotation += self.tinyangle;
				self.rigidbody.velocity.x += self.player.speed / 20;
			} else {
				self.gameObject.rotation = self.game.math.degToRad(self.angle);
				self.rigidbody.velocity.x = self.player.speed;
			}
		}
		if (self.type == 0) { //stop
			if (self.gameObject.rotation < -self.tinyangle) {
				self.gameObject.rotation += self.tinyangle;
				self.rigidbody.velocity.x += self.player.speed / 20;
			} else if (self.gameObject.rotation > self.tinyangle) {
				self.gameObject.rotation -= self.tinyangle;
				self.rigidbody.velocity.x -= self.player.speed / 20;
			} else {
				self.gameObject.rotation = 0;
				self.rigidbody.velocity.x = 0;
			}
		}
	}

};


CourierController.prototype.onPointerDown = function(id, x, y) {
	var self = this;
	this.startmoveX = x;
};

CourierController.prototype.onPointerMove = function(id, x, y) {
	var self = this;
	if (self.isplay) { //非暂停
		if (x < this.startmoveX) {
			self.type = -1;
		} else {
			self.type = 1;
		}
	}

};

CourierController.prototype.onPointerUp = function(id, x, y) {
	var self = this;

	this.startmoveX = x;
	if (self.isplay) { //非暂停
		self.type = 0;
	}


};

CourierController.prototype.pause = function() {
	var self = this;
	self.reVelocityx = self.rigidbody.velocity.x;
	self.rigidbody.velocity.x = 0;
	self.isplay = false;
};

CourierController.prototype.play = function() {
	var self = this;
	self.rigidbody.velocity.x = self.reVelocityx;
	self.isplay = true;
};
// define a user behaviour
var ExpressController = qc.defineBehaviour('qc.engine.ExpressController', qc.Behaviour, function() {

	this.bulletRoot = null;
	this.expressvalue = 1; //下次生成的快递序列号
	this.touchvalue = 1; //下次生成的点击序列号
	this.expressdelay = 5; //延迟秒数生成快递
	this.touchdelay = 10; //延迟秒数生成点击
	this.maxtype = 3; //最大快递序列号
	this.left = null;
	this.right = null;
	this.expresstimer = null;
	this.touchtimer = null;

}, {
	bulletRoot: qc.Serializer.NODE,
	expressvalue: qc.Serializer.NUMBER,
	touchvalue: qc.Serializer.NUMBER,
	expressdelay: qc.Serializer.NUMBER,
	touchdelay: qc.Serializer.NUMBER,
	left: qc.Serializer.NODE,
	right: qc.Serializer.NODE,

});

ExpressController.prototype.awake = function() {
	this.expressvalue = this.game.math.random(1, this.maxtype);
	this.touchvalue = this.game.math.random(1, this.maxtype);
	this.expresstimer = this.game.timer.loop(this.expressdelay * 1000, function() {
		var self = this;
		self.createexpress();
	}, this);
	this.touchtimer = this.game.timer.loop(this.touchdelay * 1000, function() {
		var self = this;
		self.createtouch();
	}, this);
	ExpressGame.carController = this.getScript('qc.engine.ExpressController');
};

ExpressController.prototype.update = function() {

	if (ExpressGame.refresh) { //刷新速度

		//		this.game.timer.remove(this.expresstimer);
		//		this.expresstimer = this.game.timer.loop(this.expressdelay * 1000, function() {
		//			var self = this;
		//			self.createexpress();
		//		}, this);
		//
		//		this.game.timer.remove(this.touchtimer);
		//		this.touchtimer = this.game.timer.loop(this.touchdelay * 1000, function() {
		//			var self = this;
		//			self.createtouch();
		//		}, this);

	}
};

ExpressController.prototype.pause = function() {
	this.game.timer.remove(this.expresstimer);
	this.game.timer.remove(this.touchtimer);
}

ExpressController.prototype.play = function() {
	this.expresstimer = this.game.timer.loop(this.expressdelay * 1000, function() {
		var self = this;
		self.createexpress();
	}, this);
	this.touchtimer = this.game.timer.loop(this.touchdelay * 1000, function() {
		var self = this;
		self.createtouch();
	}, this);
}


ExpressController.prototype.createexpress = function() {
	var self = this;
	var type = 'Assets/prefab/express/express' + this.expressvalue + '.bin';
	self.game.assets.load('express', type, function(asset) {
		var prefabAsset = self.game.assets.find('express');
		var bullet = self.game.add.clone(prefabAsset, self.bulletRoot);
	});
	this.expressvalue = self.game.math.random(1, this.maxtype);
};

ExpressController.prototype.createtouch = function() {
	var self = this;
	var type = 'Assets/prefab/express/touch' + this.touchvalue + '.bin';
	self.game.assets.load('touch', type, function(asset) {
		var prefabAsset = self.game.assets.find('touch');
		var rd = self.game.math.random(1, 2);
		switch (rd) {
			case 1:
				var bullet = self.game.add.clone(prefabAsset, self.left);
				bullet.anchoredY = -self.left.anchoredY - 200 - 960;
				break;
			case 2:
				var bullet = self.game.add.clone(prefabAsset, self.right);
				bullet.anchoredY = -self.right.anchoredY - 200 - 960;
				break;
			default:
				var bullet = self.game.add.clone(prefabAsset, self.left);
				bullet.anchoredY = -self.left.anchoredY - 200 - 960;
		}
	});
	this.touchvalue = self.game.math.random(1, this.maxtype);
};
// define a user behaviour
var GameController = qc.defineBehaviour('qc.engine.GameController', qc.Behaviour, function() {
	this.player = null;
	this.express1 = 0;
	this.express2 = 0;
	this.express3 = 0;
	this.UI = null;
	this.rank = 1;
	this.rankrefresh = true;
	this.exp = 0;
	this.ranktime = 10; //升级间隔
	this.speed = 100; //初始速度
	this.cardelay = 5; //初始汽车刷新
	this.expressdelay = 2; //初始快递刷新
	this.touchdelay = 1; //初始快递需求刷新
	this.count = 0;
	this.isplay = true;
}, {
	player: qc.Serializer.NODE,
	express1: qc.Serializer.NUMBER,
	express2: qc.Serializer.NUMBER,
	express3: qc.Serializer.NUMBER,
	ranktime: qc.Serializer.NUMBER,
	rank: qc.Serializer.NUMBER,
	rankrefresh: qc.Serializer.BOOLEAN,
	speed: qc.Serializer.NUMBER,
	cardelay: qc.Serializer.NUMBER,
	expressdelay: qc.Serializer.NUMBER,
	touchdelay: qc.Serializer.NUMBER,
});

GameController.prototype.awake = function() {

	var self = this;
	ExpressGame.gameController = this.getScript('qc.engine.GameController');
	this.game.timer.add(5, function() {
		self.game.world.find('scoreviwe').visible = false;
		self.game.world.find('Loading').visible = false;
	}, this);

	self.game.assets.load('housecar', 'Assets/atlas/housecar.bin');
};

GameController.prototype.update = function() {

	var self = this;
	if (self.isplay) {
		if (self.count > self.ranktime * 1000) { //升级难度
			self.rank++;
			self.rankrefresh = true;
			ExpressGame.uiController.infomationchange('难度提升，当前难度为 ' + self.rank);
			self.count -= self.ranktime * 1000;
			self.player.getScript(qc.engine.Courier).csoreChange(self.rank * 100);
		}
		self.count += self.game.time.deltaTime;
		if (self.rankrefresh) {
			//		console.log(ExpressGame.carController.delay);
			//		console.log(this.game.world.find('GameController').getScript('qc.engine.CarController'));
			ExpressGame.backgroundController.speed = self.speed * self.rank;
			this.game.world.find('GameController').getScript('qc.engine.CarController').delay = self.cardelay / self.rank;
			//此处bug不能用，不明真相
			//		ExpressGame.carController.delay = self.cardelay / self.rank;
			ExpressGame.refresh = true;
			self.game.timer.add(1000, function() {
				ExpressGame.refresh = false;
			}, self);
		}
	}
};

GameController.prototype.refreshexpress = function() { //刷新快递，因特效已不使用
	var self = this;
	ExpressGame.uiController.expresschange(self.express1, self.express2, self.express3);
};

GameController.prototype.expressadd = function(v1, v2, v3) { //刷新快递
	var self = this;
	ExpressGame.uiController.expressadd(v1, v2, v3);
};

GameController.prototype.pause = function() { //刷新
	var self = this;
	self.isplay = false;
};

GameController.prototype.play = function() { //刷新
	var self = this;
	self.isplay = true;
};


GameController.prototype.gamepause = function() {
	var self = this;
	ExpressGame.backgroundController.pause();
	ExpressGame.carController.pause();
	ExpressGame.courierController.pause();
	self.pause();
};

GameController.prototype.death = function() {
	var self = this;
	var sc = self.player.getScript('qc.engine.Courier');
	ExpressGame.uiController.death(sc.csore, sc.money, sc.exp);
};

GameController.prototype.gameclean = function() {
	var self = this;
	self.game.timer.remove(ExpressGame.uiController.infomationtimer);
	self.game.timer.remove(this.game.world.find('GameController').getScript('qc.engine.ExpressController').expresstimer);
	self.game.timer.remove(this.game.world.find('GameController').getScript('qc.engine.ExpressController').touchtimer);
};
// define a user behaviour
var UIController = qc.defineBehaviour('qc.engine.UIController', qc.Behaviour, function() {

	this.UI = null;
	this.infomationtimer = null;
	this.scoreview = null;

}, {
	UI: qc.Serializer.NODE,
	scoreview: qc.Serializer.NODE,
});

UIController.prototype.awake = function() {
	ExpressGame.uiController = this.getScript('qc.engine.UIController');
};

UIController.prototype.update = function() {

};

UIController.prototype.expresschange = function(v1, v2, v3) {
	var self = this;
	self.UI.find('express1').getChildAt(0).text = v1.toString();
	self.UI.find('express2').getChildAt(0).text = v2.toString();
	self.UI.find('express3').getChildAt(0).text = v3.toString();
};

UIController.prototype.expressadd = function(v1, v2, v3) {
	var self = this;
	if (v1 != 0) {
		var type = 'Assets/prefab/effect/numberchange' + '.bin';
		self.game.assets.load('numberchange', type, function(asset) {
			var prefabAsset = self.game.assets.find('numberchange');
			var bullet = self.game.add.clone(prefabAsset, self.UI.find('express1').getChildAt(0));
		}, this);
	}
	if (v2 != 0) {
		var type = 'Assets/prefab/effect/numberchange' + '.bin';
		self.game.assets.load('numberchange', type, function(asset) {
			var prefabAsset = self.game.assets.find('numberchange');
			var bullet = self.game.add.clone(prefabAsset, self.UI.find('express2').getChildAt(0));
		}, this);
	}
	if (v3 != 0) {
		var type = 'Assets/prefab/effect/numberchange' + '.bin';
		self.game.assets.load('numberchange', type, function(asset) {
			var prefabAsset = self.game.assets.find('numberchange');
			var bullet = self.game.add.clone(prefabAsset, self.UI.find('express3').getChildAt(0));
		}, this);
	}
};

UIController.prototype.infomationchange = function(v) {
	var info = this.UI.find('infomation');
	info.getChildAt(0).text = v;
	info.getScript('qc.TweenPosition').playGroupForward(false);
	this.infomationtimer = this.game.timer.add(2000, function() {
		var self = this;
		info.getScript('qc.TweenPosition').playGroupReverse(false);
	}, this);
};

UIController.prototype.death = function(cs, mo, exp) {
	var self = this;
	self.scoreview.find('scoreText').text = cs.toString();
	self.scoreview.find('moneyText').text = mo.toString();
	self.scoreview.find('expText').text = exp.toString();
	self.scoreview.visible = true;
	self.game.paused = true;
};
/**
 * 移动到目标点
 */
var test1 = qc.defineBehaviour('qc.engine.test1', qc.Behaviour, function() {
	this.speed = 60;
	this.maxTime = 3;
	this.fireTime = 0;
	this.bulletRoot = null;
	this.bulletPrefab = null;
	this.firep = null;
	this.pointx = 0;
	this.pointy = 0;
	this.canjump = false;
	this.isjump = true;
	this.enemy = null;
	this.floor1 = null;
	this.floor2 = null;
}, {
	speed: qc.Serializer.NUMBER,
	maxTime: qc.Serializer.NUMBER,
	bulletRoot: qc.Serializer.NODE,
	bulletPrefab: qc.Serializer.PREFAB,
	firep: qc.Serializer.NODE,
	pointx: qc.Serializer.NUMBER,
	pointy: qc.Serializer.NUMBER,
	canjump: qc.Serializer.BOOLEAN,
	isjump: qc.Serializer.BOOLEAN,
	fireTime: qc.Serializer.NUMBER,
	enemy: qc.Serializer.NODE,
	floor1: qc.Serializer.NODE,
	floor2: qc.Serializer.NODE,
});

test1.prototype.awake = function() {
	this.pointx = this.firep.x - this.gameObject.anchoredX;
	this.pointy = this.firep.y - this.gameObject.anchoredY;
};

// 帧调度
test1.prototype.update = function() {
	var self = this,
		rigidbody = this.getScript('qc.arcade.RigidBody');
	rigidbody.angularAcceleration = 0;

	if (rigidbody.velocity.y < -40 || rigidbody.velocity.y > 40) {
		self.gameObject.playAnimation('cheer');
		this.isjump = true;
		this.canjump = false;
		this.pointx = 51;
		this.pointy = -59;
	}
	if (self.game.input.isKeyDown(qc.Keyboard.LEFT)) {
		rigidbody.velocity.x = -500;
		self.gameObject.scaleX = -1;
		//      rigidBody.acceleration.x = -8000;
		//		rigidbody.velocityFromRotation(self.gameObject.rotation, -8000, rigidbody.acceleration);
		if (!this.isjump)
			self.gameObject.playAnimation('move');
	} else if (self.game.input.isKeyDown(qc.Keyboard.RIGHT)) {
		rigidbody.velocity.x = 500;
		self.gameObject.scaleX = 1;
		//      rigidBody.acceleration.x = 8000;
		//		rigidbody.velocityFromRotation(self.gameObject.rotation, 8000, rigidbody.acceleration);
		if (!this.isjump) self.gameObject.playAnimation('move');
	} else {
		//      game.log.trace('asdasdsa');
		rigidbody.velocity.x = 0;
		if (!this.isjump) self.gameObject.playAnimation('idle');
	}
	if (self.game.input.isKeyDown(qc.Keyboard.Z) && this.canjump) {
		rigidbody.velocity.set(rigidbody.velocity.x, -3000);
		self.gameObject.playAnimation('cheer');
		this.canjump = false;
		this.isjump = true;
	}

	if (self.game.input.isKeyDown(qc.Keyboard.X)) {
		if (this.fireTime > this.maxTime) {
			self.fire();
			this.fireTime = 0;
		}

	}
	this.firep.x = this.gameObject.anchoredX + this.pointx * self.gameObject.scaleX;
	this.firep.y = this.gameObject.anchoredY + this.pointy;
	if (this.fireTime <= this.maxTime) {
		this.fireTime++;
	}
};
test1.prototype.fire = function() {
	var self = this,
		rigidbody = this.getScript('qc.arcade.RigidBody');


	// 复制出一个子弹
	var bullet = self.game.add.clone(self.bulletPrefab, self.bulletRoot);
	//  bullet.x = this.firep.gameObject.x;
	//  bullet.y = this.firep.gameObject.y;
	bullet.x = this.firep.x;
	bullet.y = this.firep.y;
	var physics = bullet.getScript('qc.arcade.RigidBody');
	physics.addCollide(this.enemy);
	physics.addCollide(this.floor1);
	physics.addCollide(this.floor2);
	// 让子弹运动
	physics.velocity.x = 1000 * self.gameObject.scaleX;
	physics.velocity.y = 1000;
	var t = this.game.timer.add(3000, function() {
			bullet.destroy();
		})
		//	
		//	var tp = bullet.getScript('qc.TweenPosition');
		//	tp.from = new qc.Point(bullet.x, bullet.y);
		//	//  tp.to = rigidbody.velocityFromRotation(bullet.rotation, 2000*self.gameObject.scaleX, tp.to);
		//	tp.to = new qc.Point(2000 * self.gameObject.scaleX, bullet.y);
		//	tp.resetToBeginning();
		//	tp.onFinished.addOnce(function() {
		//		bullet.destroy();
		//	});
		//	tp.playForward();
};
//
//test1.prototype.onCollide = function(o1, o2) {
//	game.log.trace(this.canjump);
//	this.canjump=true;
//	o2.canjump=true;
//	this.gameObject.playAnimation('idle');
//};
//test1.prototype.onOverlap = function(o1, o2) {
//	game.log.trace(this.canjump);
//	this.canjump=true;
//	this.gameObject.playAnimation('idle');
//};
// define a user behaviour
var backBtnClick = qc.defineBehaviour('qc.engine.backBtnClick', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
    this.backBtn=null;
}, {
    // fields need to be serialized
    backBtn: qc.Serializer.NODE
});

// Called when the script instance is being loaded.
backBtnClick.prototype.awake = function() {
	//添加返回按钮监听
    this.addListener(this.backBtn.onClick, this.backBtnClick, this);
};

//返回按钮事件
backBtnClick.prototype.backBtnClick = function() {
      // 按钮被点击的处理
    ExpressGame.uiManager.switchStateTo(UIManager.index);
  };
// Called every frame, if the behaviour is enabled.
//backBtnClick.prototype.update = function() {
//
//};

// define a user behaviour
var BtnScale = qc.defineBehaviour('qc.engine.BtnScale', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
    this.Button=null;
    this.tweenScale=null;
}, {
    // fields need to be serialized
    Button: qc.Serializer.NODE
    
});


// Called when the script instance is being loaded.
BtnScale.prototype.awake = function() {
    // 添加TweenScale脚本
    this.tweenScale=this.Button.addScript('qc.TweenScale');
    // 设置起始值
    this.tweenScale.from.x = 1;
	this.tweenScale.from.y = 1;

	// 设置结束值
	this.tweenScale.to.y = 0.9;
	this.tweenScale.to.x = 0.9;

	// 设置持续时间
	this.tweenScale.duration = 0.1;
    
	this.addListener(this.Button.onDown, this.ButtonDown, this);
    this.addListener(this.Button.onUp, this.ButtonUp, this);
};

//按下按钮缩小
BtnScale.prototype.ButtonDown = function() {    
    this.tweenScale.playForward();
  };

//松开按钮恢复
BtnScale.prototype.ButtonUp = function() {
    this.tweenScale.playReverse();
  };
// Called every frame, if the behaviour is enabled.
//BtnScale.prototype.update = function() {
//
//};

// define a user behaviour
var indexStartClick = qc.defineBehaviour('qc.engine.indexStartClick', qc.Behaviour, function() {
	this.type = 1;
}, {

	type: qc.Serializer.NUMBER,
});


indexStartClick.prototype.onClick = function() {
	var self = this;
	switch (this.type) {
		case 1:
            ExpressGame.speedbugclean=true;
			this.game.scene.load('test1', true, function() {
				self.game.world.find('Loading').visible = true;
			}, function() {
				self.game.world.find('Loading').destroy();
			});
			break;
		case 2:
            ExpressGame.speedbugclean=true;
			this.game.scene.load('test1', true, function() {
				self.game.world.find('Loading').visible = true;
			}, function() {
				self.game.world.find('Loading').destroy();
			});
			break;
		case 3:
			break;
		default:
			break;
	}
};
// define a user behaviour
var pause = qc.defineBehaviour('qc.engine.pause', qc.Behaviour, function() {
	this.pausegameObject = null;
	this.type = 0; //类型有暂停0，继续1，退出2，主菜单3
	this.speed = 200;
}, {
	pausegameObject: qc.Serializer.NODE,
	type: qc.Serializer.NUMBER,
});

// Called when the script instance is being loaded.
pause.prototype.awake = function() {
	if (this.type != 0)
		this.addListener(this.gameObject.onNativeClick, this.gamePause, this);
};

// Called every frame, if the behaviour is enabled.
pause.prototype.update = function() {

};
pause.prototype.gamePause = function() {
	var self = this;
	if (self.type == 1) {
		self.pausegameObject.visible = false;
		//		ExpressGame.backgroundController.play();
		//		ExpressGame.courierController.play();
		//		ExpressGame.carController.play();
		self.game.paused = false;
	} else if (self.type == 2) {

	} else if (self.type == 3) {
		this.game.paused = false;
		ExpressGame.gameController.gameclean();
		self.game.world.find('Loading').visible = true;
		this.game.scene.load('index', true, function() {
			
		}, function() {
			self.game.world.find('Loading').destroy();
		});

	}
}
pause.prototype.onClick = function(e) {
	var self = this;
	if (self.type == 0) {
		self.pausegameObject.visible = true;
		//		ExpressGame.backgroundController.pause();
		//		ExpressGame.courierController.pause();
		//		ExpressGame.carController.pause();
		self.game.paused = true;
	}
	//	else if (self.type == 1) {
	//		self.pausegameObject.visible = false;
	//		//		ExpressGame.backgroundController.play();
	//		//		ExpressGame.courierController.play();
	//		//		ExpressGame.carController.play();
	//		self.game.paused = false;
	//	} else if (self.type == 2) {
	//		self.pausegameObject.visible = false;
	//	} else if (self.type == 3) {
	//		self.pausegameObject.visible = false;
	//	}
};
// define a user behaviour
var scoreviewMainClick = qc.defineBehaviour('qc.engine.scoreviewMainClick', qc.Behaviour, function() {
	// need this behaviour be scheduled in editor
	//this.runInEditor = true;
}, {
	// fields need to be serialized
});

// Called when the script instance is being loaded.
scoreviewMainClick.prototype.awake = function() {

	this.addListener(this.gameObject.onNativeClick, this.gamePause, this);
};

//scoreviewMainClick.prototype.onClick = function() {
//	var self = this;
//	self.game.scene.load('index', true, function() {
//
//	}, function() {
//
//	});
//};

scoreviewMainClick.prototype.gamePause = function() {

	var self = this;
	this.game.paused = false;
	ExpressGame.gameController.gameclean();
	self.game.world.find('Loading').visible = true;
	self.game.scene.load('index', true, function() {}, function() {
		self.game.world.find('Loading').destroy();
	});
}
// define a user behaviour
var scoreviewStartClick = qc.defineBehaviour('qc.engine.scoreviewStartClick', qc.Behaviour, function() {
	// need this behaviour be scheduled in editor
	//this.runInEditor = true;
}, {
	// fields need to be serialized
});

scoreviewStartClick.prototype.awake = function() {

	this.addListener(this.gameObject.onNativeClick, this.gamePause, this);
};


scoreviewStartClick.prototype.gamePause = function() {
		var self = this;
		this.game.paused = false;
		ExpressGame.gameController.gameclean();
		this.game.timer.add(5, this.load.bind(this));
		//	this.load();
		//	
	}

scoreviewStartClick.prototype.load = function() {
	var self = this;
	this.game.scene.load('test1', true, function() {
		self.game.assets.load('csore', 'Assets/atlas/effect.bin');
//	    self.game.world.find('Loading').visible = true;
		self.game.assets.load('csore', 'Assets/atlas/csore.bin');
		self.game.assets.load('turn_secen', 'Assets/atlas/turn_secen.bin');
		self.game.assets.load('housecar', 'Assets/atlas/housecar.bin');

		self.game.assets.load('express', 'Assets/prefab/express/express1.bin');
		self.game.assets.load('express', 'Assets/prefab/express/express2.bin');
		self.game.assets.load('express', 'Assets/prefab/express/express3.bin');
		self.game.assets.load('touch', 'Assets/prefab/express/touch1.bin');
		self.game.assets.load('touch', 'Assets/prefab/express/touch2.bin');
		self.game.assets.load('touch', 'Assets/prefab/express/touch3.bin');
		self.game.assets.load('car', 'Assets/prefab/enemy/car1.bin');
		self.game.assets.load('car', 'Assets/prefab/enemy/car2.bin');
		self.game.assets.load('car', 'Assets/prefab/enemy/car3.bin');
		self.game.assets.load('car', 'Assets/prefab/enemy/car4.bin');
		self.game.assets.load('car', 'Assets/prefab/enemy/car5.bin');
	}, function() {
//		self.game.world.find('Loading').destroy();

	});
}
// define a user behaviour
var touchClick = qc.defineBehaviour('qc.engine.touchClick', qc.Behaviour, function() {


}, {

});

touchClick.prototype.awake = function() {

};


touchClick.prototype.update = function() {

};


touchClick.prototype.expanime = function(v) { //快递飞跃动画
	var self = this;
	var type = 'Assets/prefab/express/expanime' + v + '.bin';
	self.game.assets.load('expanime', type, function(asset) {
		var prefabAsset = self.game.assets.find('expanime');
		var bullet = self.game.add.clone(prefabAsset, self.game.world.find('UIRoot'));
		bullet.x = ExpressGame.gameController.player.getWorldPosition().x;
		bullet.y = ExpressGame.gameController.player.getWorldPosition().y;
		var tp = bullet.getScript('qc.TweenPosition');
		tp.from.x = bullet.x;
		tp.from.y = bullet.y;
		tp.to.x = self.gameObject.getWorldPosition().x;
		tp.to.y = self.gameObject.getWorldPosition().y + ExpressGame.backgroundController.speed * 0.5;
		self.game.timer.add(500, function() {
			bullet.destroy();
		}, self);
	});
	this.game.timer.add(500, function() {
		self.gameObject.destroy();
	}, this);
	self.getScript('qc.engine.touchClick').destroy();
}

touchClick.prototype.onClick = function() {
	var self = this;
	var sc = self.getScript('qc.engine.Touch');
	switch (sc.type) {
		case 1:
			if (ExpressGame.gameController.express1 > 0) {
				sc.inExpress(ExpressGame.gameController.player);
				self.expanime(sc.type);
			}
			break;
		case 2:
			if (ExpressGame.gameController.express2 > 0) {
				sc.inExpress(ExpressGame.gameController.player);
				self.expanime(sc.type);
			}
			break;
		case 3:
			if (ExpressGame.gameController.express3 > 0) {
				sc.inExpress(ExpressGame.gameController.player);
				self.expanime(sc.type);
			}

			break;
		default:
			break;
	}
};
// define a user behaviour
var indexBtn = qc.defineBehaviour('qc.engine.indexBtn', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
    //首页界面按钮
    this.helpBtn=null;
    this.setBtn=null;
    this.infoBtn=null;
    this.music_xBtn=null;
    this.musicText=null;
    this.moreBtn=null;
    this.medalBtn=null;
    this.scoreBtn=null;
    this.fcBtn=null;
    this.fcText=null;
    this.startBtn=null;
    this.setBlue=null;
}, {
    // fields need to be serialized
    helpBtn: qc.Serializer.NODE,
    setBtn: qc.Serializer.NODE,
    setBlue:qc.Serializer.NODE,
    infoBtn: qc.Serializer.NODE,
    music_xBtn: qc.Serializer.NODE,
    musicText: qc.Serializer.NODE,
    moreBtn: qc.Serializer.NODE,
    moreBlue: qc.Serializer.NODE,
    medalBtn: qc.Serializer.NODE,
    scoreBtn: qc.Serializer.NODE,
    fcBtn: qc.Serializer.NODE,
   	fcText: qc.Serializer.NODE,
    startBtn: qc.Serializer.NODE
});

// Called when the script instance is being loaded.
indexBtn.prototype.awake = function() {
	// 关注按钮被点击的事件
    
    //添加帮助按钮监听
	this.addListener(this.helpBtn.onClick, this.helpBtnClick, this);
    
    //添加信息按钮监听
    this.addListener(this.infoBtn.onClick, this.infoBtnClick, this);
    
    //添加勋章按钮监听
    this.addListener(this.medalBtn.onClick, this.medalBtnClick, this);
    
    //添加得分榜按钮监听
    this.addListener(this.scoreBtn.onClick, this.scoreBtnClick, this);
    
    //添加进入游戏按钮监听
    this.addListener(this.startBtn.onClick, this.startBtnClick, this);
    
     //添加设置按钮监听
    this.addListener(this.setBtn.onClick, this.setBtnClick, this);
    
    //添加更多按钮监听
    this.addListener(this.moreBtn.onClick, this.moreBtnClick, this);
    
    //添加音乐按钮监听
    this.addListener(this.music_xBtn.onClick, this.music_xBtnClick, this);
    
    //添加facebook按钮监听
    this.addListener(this.fcBtn.onClick, this.fcBtnClick, this);
    
    
    
};
//帮助按钮事件
indexBtn.prototype.helpBtnClick = function() {
    // 按钮被点击的处理
    ExpressGame.uiManager.switchStateTo(UIManager.help);
  };

//信息按钮事件
indexBtn.prototype.infoBtnClick = function() {
    // 按钮被点击的处理
    ExpressGame.uiManager.switchStateTo(UIManager.info);
  };

//勋章按钮事件
indexBtn.prototype.medalBtnClick = function() {
    // 按钮被点击的处理
    ExpressGame.uiManager.switchStateTo(UIManager.medal);
  };

//得分榜按钮事件
indexBtn.prototype.scoreBtnClick = function() {
    // 按钮被点击的处理
    ExpressGame.uiManager.switchStateTo(UIManager.score);
  };

//进入游戏按钮事件
indexBtn.prototype.startBtnClick = function() {
    // 按钮被点击的处理
    ExpressGame.uiManager.switchStateTo(UIManager.start);
  };

//设置按钮事件
indexBtn.prototype.setBtnClick = function() {
	// 按钮被点击的处理
	var self = this;
    var tweenPosition = this.setBlue.getScript('qc.TweenPosition');
    var tweenAlpha = this.setBlue.getScript('qc.TweenAlpha');
    if(this.setBlue.anchoredY==120){
        tweenAlpha.delay=0.1;
        tweenAlpha.duration=0.1;
        tweenPosition.playGroupForward(); 
    }else{
        tweenAlpha.delay=0;
        tweenAlpha.duration=0.05;
        tweenPosition.playGroupReverse(); 
    }
  };

//更多按钮事件
indexBtn.prototype.moreBtnClick = function() {
	// 按钮被点击的处理
	var self = this;
    var tweenPosition = this.moreBlue.getScript('qc.TweenPosition');
    var tweenAlpha = this.moreBlue.getScript('qc.TweenAlpha');
    if(this.moreBlue.anchoredY==175){
        tweenPosition.duration=0.1;
        tweenAlpha.delay=0.1;
        tweenAlpha.duration=0.1;
        tweenPosition.playGroupForward(); 
    }else{
        tweenPosition.duration=0.2;
        tweenAlpha.delay=0;
        tweenAlpha.duration=0.04;
        tweenPosition.playGroupReverse(); 
    }
  };

//音乐按钮事件
indexBtn.prototype.music_xBtnClick = function() {
    // 按钮被点击的处理
    var tweenPosition = this.musicText.getScript('qc.TweenPosition');
    var tweenAlpha = this.musicText.getScript('qc.TweenAlpha');
    tweenPosition.resetGroupToBeginning();
    tweenPosition.playGroupForward();
  };

//facebook按钮事件
indexBtn.prototype.fcBtnClick = function() {
    // 按钮被点击的处理
    var tweenPosition = this.fcText.getScript('qc.TweenPosition');
    var tweenAlpha = this.fcText.getScript('qc.TweenAlpha');
    tweenPosition.resetGroupToBeginning();
    tweenPosition.playGroupForward();
  };


// Called every frame, if the behaviour is enabled.
//BtnClick.prototype.update = function() {
//
//};
// define a user behaviour
var touchInput = qc.defineBehaviour('qc.engine.touchInput', qc.Behaviour, function() {
	this.type = 1;
}, {
	type: qc.Serializer.NUMBER,
});

// Called when the script instance is being loaded.
touchInput.prototype.awake = function() {

};

// Called every frame, if the behaviour is enabled.
touchInput.prototype.onDown = function() {
	ExpressGame.courierController.type = this.type;
};

touchInput.prototype.onUp = function() {
	ExpressGame.courierController.type = 0;
};
// define a user behaviour
var UIManager = qc.defineBehaviour('qc.engine.UIManager', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
    var self = this;
    ExpressGame.uiManager=self;
}, {
    // fields need to be serialized
    Index: qc.Serializer.NODE,
	Help:qc.Serializer.NODE,
    Info: qc.Serializer.NODE,
    Medal: qc.Serializer.NODE,
    Start: qc.Serializer.NODE,
    Score: qc.Serializer.NODE    
});
UIManager.index=0;
UIManager.help=1;
UIManager.info=2;
UIManager.medal=3;
UIManager.start=4;
UIManager.score=5;

// Called when the script instance is being loaded.
UIManager.prototype.awake = function() {
	this.switchStateTo(UIManager.index);
};


UIManager.prototype.switchStateTo= function(state) {
    var self = this;
    ExpressGame.game.time.frameRate = 30;
    self.Index.visible = state === UIManager.index;
    if (self.Index.visible) {
    }
    self.Help.visible = state === UIManager.help;
    self.Info.visible = state === UIManager.info;
    self.Medal.visible = state === UIManager.medal;
    self.Start.visible = state === UIManager.start;
    self.Score.visible = state === UIManager.score;
};

}).call(this, this, Object);
