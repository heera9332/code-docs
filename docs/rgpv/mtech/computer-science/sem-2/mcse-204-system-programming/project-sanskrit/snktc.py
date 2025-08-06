# snktc.py
import sys

if len(sys.argv) < 2:
    print("Usage: python snktc.py <inputfile.snkt>")
    sys.exit(1)

with open(sys.argv[1], encoding="utf-8") as f:
    code = f.read()

# Replace Sanskrit keywords with C keywords
c_code = code
c_code = c_code.replace("ank", "int")
c_code = c_code.replace("patra", "char")
c_code = c_code.replace("taral", "float")
c_code = c_code.replace("dwigun", "double")
c_code = c_code.replace("shoonya", "void")
c_code = c_code.replace("yadi", "if")
c_code = c_code.replace("anyatha", "else")
c_code = c_code.replace("paryant", "for")
c_code = c_code.replace("jabtak", "while")
c_code = c_code.replace("karo", "do")
c_code = c_code.replace("vikalp", "switch")
c_code = c_code.replace("sthaniya", "case")
c_code = c_code.replace("moolya", "default")
c_code = c_code.replace("viram", "break")
c_code = c_code.replace("agla", "continue")
c_code = c_code.replace("paravartan", "return")
c_code = c_code.replace("mukhya", "main")
c_code = c_code.replace("sanrachana", "struct")
c_code = c_code.replace("paribhashit", "typedef")
c_code = c_code.replace("sangh", "union")
c_code = c_code.replace("ganana", "enum")
c_code = c_code.replace("sthayi", "const")
c_code = c_code.replace("sthira", "static")
c_code = c_code.replace("bahya", "extern")
c_code = c_code.replace("svachalit", "auto")
c_code = c_code.replace("panjikrit", "register")
c_code = c_code.replace("aakar", "sizeof")
c_code = c_code.replace("jao", "goto")
c_code = c_code.replace("sanketik", "signed")
c_code = c_code.replace("anasanketik", "unsigned")
c_code = c_code.replace("laghu", "short")
c_code = c_code.replace("dirgh", "long")
c_code = c_code.replace("antarrekha", "inline")
c_code = c_code.replace("chanchal", "volatile")
c_code = c_code.replace("niyantrit", "restrict")

# functions reaplacement

c_code = c_code.replace("mudrit", "printf")

# Add necessary #include
c_code = "#include <stdio.h>\n" + c_code

# Output file
with open("main.c", "w", encoding="utf-8") as f:
    f.write(c_code)

print("C code generated in main.c.")
print("To compile: gcc main.c -o main")
print("To run: ./main")
