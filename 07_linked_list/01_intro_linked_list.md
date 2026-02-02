# Linked List Data Structure

A **Linked List** is a linear data structure in which elements (called nodes) are connected using pointers. Each node contains a value and a reference to the next node.

## 1. Node Components
*   **Value:** The actual data stored.
*   **Reference (Pointer):** A link to the next node (and optionally the previous node).

---

## 2. Types of Linked Lists

### A. Singly Linked List
*   **Direction:** Forward only.
*   **Structure:** `[Value | Next] -> [Value | Next] -> [Value | Null]`

### B. Doubly Linked List
*   **Direction:** Bidirectional (Forward and Backward).
*   **Structure:** `Null <- [Prev | Value | Next] <-> [Prev | Value | Next] -> Null`

---

## 3. Key Terminologies
*   **Head:** The entry point; the first node of the list.
*   **Tail:** The final node; points to `Null`.
*   **Representation:** Usually identified by its **Head** node.

---

## 4. Array vs. Linked List

| Feature | Array | Linked List |
| :--- | :--- | :--- |
| **Memory Layout** | Contiguous (adjacent) blocks. | Scattered; connected via pointers. |
| **Size** | Fixed/Static (resizing is expensive). | Dynamic (grows/shrinks as needed). |
| **Access Time** | Fast: $O(1)$ via index. | Slow: $O(n)$ (sequential traversal). |
| **Insertion/Deletion** | Slow: Requires shifting elements. | Fast: $O(1)$ (just change pointers). |
| **Memory Efficiency** | High (values only). | Lower (requires extra space for pointers). |

---

## 5. Use Cases: When to Use What?

| If you need to... | Use... | Reason |
| :--- | :--- | :--- |
| **Access by index fast** | **Array** | Direct index access is $O(1)$. |
| **Frequent Insert/Delete** | **Linked List** | Efficient pointer updates at head/tail. |
| **Save memory** | **Array** | No overhead from pointers. |
| **Handle unknown size** | **Linked List** | No resizing or pre-allocation needed. |
