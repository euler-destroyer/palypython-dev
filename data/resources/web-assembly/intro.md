
<Problem
    title="web assembly"
    description="look at this cool web assembly"
    defaultCode=
'(module
  (func $i (import "imports" "i") (param i32))
  (func (export "e")
    i32.const 42
    call $i))
    '
    language="assembly"

/> 