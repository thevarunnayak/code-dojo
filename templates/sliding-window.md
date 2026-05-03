# Sliding Window

## 🧠 When to Use

* Subarray / substring problems
* “Longest”, “smallest”, “count of valid windows”
* Continuous range problems

---

## ⚙️ Core Idea

Maintain a window using two pointers:

* Expand right pointer
* Shrink left pointer when condition breaks

---

## 🧩 Template (Generic)

```python
left = 0

for right in range(len(arr)):
    # expand window

    while condition_not_valid:
        # shrink window
        left += 1

    # update result
```

---

## ⚠️ Common Mistakes

* Forgetting to shrink window
* Not updating result at correct time
* Wrong condition logic

---

## 📚 Related Problems

* Longest Substring Without Repeating Characters
* Minimum Window Substring
* Permutation in String

---

## 🔁 Revision Notes

* Window grows → condition breaks → shrink
* Think: dynamic range, not fixed
