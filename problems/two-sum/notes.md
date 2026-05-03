# Two Sum

## 🌐 Source

* LeetCode: https://leetcode.com/problems/two-sum/

## 🧩 Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to the target.

---

## 🧠 Pattern

* Hash Map

---

## 💡 Key Idea

Store numbers in a hash map while iterating.
For each element, check if its complement (`target - num`) already exists.

---

## ⚠️ Mistakes I Made

* Tried brute force first without thinking of optimization

---

## 🚀 Complexity

* Time: O(n)
* Space: O(n)

---

## 🔁 Revision Notes

* Classic hashmap lookup problem
* Always check complement BEFORE inserting current element
